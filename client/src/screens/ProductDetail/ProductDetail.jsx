import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { getProduct, addReview, deleteReview } from "../../services/products";
import { addToWishList } from "../../services/users";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer"
import Modal from "../../components/Modal/Modal";
import "./ProductDetail.css"
import 'react-toastify/dist/ReactToastify.css';

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

  const notify = () => toast("Added to Wishlist!")

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
      userId: user.id,
      author: user.username
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
    product.reviews.unshift(review)
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
    notify()
  }

  if (!isLoaded) {
    return <h1>Loading..</h1>;
  }

  return (
    <Layout user={user} admin={admin}>
      <div className="container">
        <div>
          <ToastContainer hideProgressBar={true} autoClose={2000} toastStyle={{ color: "#FFA800", border: "1px, solid, #FFA800", backgroundColor: "#262626" }} />
        </div>
      <div className={(showModal) ? "mx-56 px-56 flex flex-col opacity-40" : "mx-56 px-56 flex flex-col"}>
        <div className="self-start mx-36 mt-10 mb-2 text-3xl font-black text-orange">
          Product Details
        </div>
        <div className="flex flex-col overflow-y-auto bg-black justify-center items-center mx-36 mb-10">
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center items-center content-center">
              <img className="self-center max-h-56 md:max-h-96 md:max-w-lg m-4" src={product.imgURL} alt="" />
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
              <div className="text-xl font-black text-orange mt-4 mb-1.5">Features</div>
              <div className="mb-8">
                <ul className="">{(product.details).split("/n").map((detail, i) => {
                  return <li className="p-1 font-bold" key={i}>- {detail}</li>
                })}</ul>
              </div>
              <h1 className="text-lg font-bold text-white text-right md:text-xl -mt-3.5 mb-1.5">{`$${product.price}`}</h1>
              <div className="flex flex-row justify-start">
                <a href={product.productURL} rel="noreferrer" target="_blank">
                  <button 
                    className="w-36 text-sm mr-8 px-6 py-2 font-black my-6 text-orange md:rounded md:border-none md:text-white md:bg-orange bg-black border border-orange"
                  >See Retailer</button>
                </a>
                <button 
                  className="w-36 text-sm px-6 py-2 font-black my-6 text-orange md:rounded md:border-none md:text-white md:bg-orange bg-black border border-orange"
                  onClick={wishListSubmit}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap mb-8 p-8">
            <div className="text-xl font-black text-orange pl-2 mb-1.5 md:pl-10">Description</div>
            <div className="px-2 md:px-10" >{product.description}</div>
            {admin ? <Link 
              to={`/products/${id}/edit`} 
              className="text-purple text-sm border border-color-purple self-end py-2 px-6 mt-10"
            >Edit Product</Link> : ''}
          </div>
        </div>
        <div className="mb-20">
          <div className="flex justify-between items-center mx-36">
            <div className="mt-4 text-3xl font-black text-orange">
              Reviews
            </div>
            <div>
              <button 
                className="w-36 text-sm px-6 py-2 font-black my-6 text-orange md:rounded md:border-none md:text-white md:bg-orange bg-black border border-orange"
                onClick={user ? handleWrite : ''}
              >Write a Review
                </button>
            </div>
          </div>
        <div className="flex flex-col justify-center items-center mx-36 mb-8">
          {product.reviews.map((review,i) => {
            return (
              <div className="bg-black flex w-full justify-between p-12 mb-4" key={i}>
                <div className="self-start w-5/12 md:w-3/12">
                  <div className="text-xl">{review.author}</div>
                  <div className="text-xs">{getTimestamp(product.updatedAt)}</div>
                  <div className="text-orange mt-4">
                    {review.rating >= 1 ? <span>★</span> : <span>☆</span>}
                    {review.rating >= 2 ? <span>★</span> : <span>☆</span>}
                    {review.rating >= 3 ? <span>★</span> : <span>☆</span>}
                    {review.rating >= 4 ? <span>★</span> : <span>☆</span>}
                    {review.rating >= 5 ? <span>★</span> : <span>☆</span>}
                  </div>
                  {user ? user.id === review.userId ? 
                  <button 
                    className="text-sm px-6 py-2 font-black my-6 text-orange md:rounded md:border-none md:text-white md:bg-orange bg-black border border-orange"
                    onClick={()=>handleDelete(id, review._id)}
                  >Delete</button> : "" : ""} 
                </div>
                  <div className="text-sm pl-4 w-7/12 md:w-9/12">
                    {review.content}
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
          user={user}
        />
      </div>
    </Layout>
  );
};

export default ProductDetail;



