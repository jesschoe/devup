import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer"
import Modal from "../../components/Modal/Modal";
import { getProduct, addReview, deleteReview } from "../../services/products";
import "./ProductDetail.css"
import { addToWishList } from "../../services/users";

const ProductDetail = ({user, admin}) => {
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState({
    userId:"",
    author:"",
    rating:"",
    content:"",
  })
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams();
  const history = useHistory()

  console.log(admin)
  useEffect(
    () => {
      const fetchProduct = async () => {
        const res = await getProduct(id);
        setProduct(res);
        setIsLoaded(true);
      };
      fetchProduct();
      // eslint-disable-next-line
    }, [id]);

  const getTimestamp = (time) => {
    let displayDate = time.split('')

    for (let i = 0; i < displayDate.length; i++) {
        if (displayDate[i] === 'T') {
            displayDate[i] = ' '
        } else if (displayDate[i] === '.') {
            displayDate.splice([i], 5)
        }
    }

    return displayDate.join('')

  }

  const handleWrite = async() => {
    setShowModal(prev => !prev)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setReview({
      ...review,
      [name]: value,
      userId: user.id
    })
  }

  const handleRating = (val) => {
    setReview({
      ...review,
      rating: val
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    product.reviews.push(review)
    setProduct(product)
    await addReview(id, product)
    
    setShowModal(prev => !prev)
  }

  const handleDelete = async (id, reviewId) => {
    product.reviews.forEach((review, i)=> {
      if (review._id === reviewId) {
        product.reviews.splice(i, 1)
      }
    })
    setProduct(product)
    await deleteReview(id, product)
    history.push(`/products/${id}`)
  }


  const wishListSubmit = async (event) => {
    await addToWishList(user.id, id)
    console.log(user)
  }

  if (!isLoaded) {
    return <h1>Loading..</h1>;
  }

  return (
    <Layout user={user} admin={admin}>
      <div className="container">
      <div className={(showModal) ? "mx-36 flex flex-col mt-10 opacity-40" : "mx-36 flex flex-col mt-10"}>
        <div className="flex flex-col overflow-y-auto bg-black justify-center items-center mb-10">
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center items-center content-center">
              <img className="self-center max-h-64 max-w-lg m-4" src={product.imgURL} alt="" />
            </div>
            <div className="flex flex-col flex-wrap max-w-lg md:m-8 m-4 p-4">
              <div className="text-3xl text-right font-black text-white mb-2">{product.name}</div>
              <div className="text-orange text-right">
                {product.avgRating >= 1 ? <span>★</span> : <span>☆</span>}
                {product.avgRating >= 2 ? <span>★</span> : <span>☆</span>}
                {product.avgRating >= 3 ? <span>★</span> : <span>☆</span>}
                {product.avgRating >= 4 ? <span>★</span> : <span>☆</span>}
                {product.avgRating >= 5 ? <span>★</span> : <span>☆</span>}
              </div>
              <div className="text-lg font-bold text-white mt-4 mb-1.5">Features</div>
              <div className="text-xs mb-8">
                <ul className="">{(product.details).split("/n").map((detail, i) => {
                  return <li className="p-1" key={i}>- {detail}</li>
                })}</ul>
              </div>
              <h1 className="text-lg font-bold text-white text-right md:text-xl -mt-3.5 mb-1.5">{`$${product.price}`}</h1>
              <div className="flex flex-row justify-around">
                <a href={product.productURL} rel="noreferrer" target="_blank">
                  <button 
                    className="mr-8 px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded my-4 h-8 md:w-40 w-28"
                  >See Retailer</button>
                </a>
                <button 
                  className="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded my-4 h-8 md:w-40 w-28"
                  onClick={wishListSubmit}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap mb-8 p-8">
            <div className="text-lg font-bold text-white pl-10">Description</div>
            <p className="px-10" >{product.description}</p>
            {admin ? <Link 
              to={`/products/${id}/edit`} 
              className="text-purple hover:text-white self-end pr-10 mt-10"
            >Edit Product</Link> : ''}
          </div>
        </div>
        <div className="mb-20">
          <div className="flex justify-between items-center">
            <div className="mt-4 mb-2 text-2xl font-black text-white">
              Reviews
            </div>
            <div>
              <button onClick={user ? handleWrite : ''}>
                Write a Review
                </button>
            </div>
          </div>
        <div className="text-">
          {product.reviews.map((review,i) => {
            return (
              <div className="bg-black flex p-12 mb-8" key={i}>
                <div className="w-5/12">
                  <div className="text-xl">{review.author}</div>
                  <div className="text-xs">{getTimestamp(product.updatedAt)}</div>
                  <div className="text-orange mt-4">
                    {review.rating >= 1 ? <span>★</span> : <span>☆</span>}
                    {review.rating >= 2 ? <span>★</span> : <span>☆</span>}
                    {review.rating >= 3 ? <span>★</span> : <span>☆</span>}
                    {review.rating >= 4 ? <span>★</span> : <span>☆</span>}
                    {review.rating >= 5 ? <span>★</span> : <span>☆</span>}
                  </div>
                </div>
                <div className="flex flex-col w-7/12">
                  <div className="text-sm">
                    {review.content}
                  </div>
                  {user ? user.id === review.userId ? 
                  <button 
                    className="self-end py-2 px-6 bg-orange text-white rounded-md"
                    onClick={()=>handleDelete(id, review._id)}
                  >Delete</button> : "" : ""} 
                </div>
              </div>
            )
          })}
        </div>
        </div>
        
        <Footer />
        </div>
        <Modal
          showModal={showModal}
          handleWrite={handleWrite}
          review={review}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleRating={handleRating}
          product={product.name}
        />
      </div>
    </Layout>
  );
};

export default ProductDetail;



