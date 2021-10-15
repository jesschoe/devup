import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer"
import Modal from "../../components/Modal/Modal";
import { getProduct, updateProduct } from "../../services/products";
import "./ProductDetail.css"

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState({
    author:"",
    rating:"",
    content:"",
  })
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams();

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

  const handleWrite = async() => {
    setShowModal(prev => !prev)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setReview({
      ...review,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    product.reviews.push(review)
    setProduct(product)
    await updateProduct(id, product)
    setShowModal(prev => !prev)
  }

  const handleRating = () => {

  }

  if (!isLoaded) {
    return <h1>Loading..</h1>;
  }

  return (
    <Layout>
      <div className="container">
      <div className={(showModal) ? "mx-36 flex flex-col mt-10 opacity-40" : "mx-36 flex flex-col mt-10"}>
        <div className="flex flex-col overflow-y-auto bg-black justify-center items-center mb-10">
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center items-center content-center">
              <img className="self-center max-h-64 max-w-lg m-4" src={product.imgURL} alt="" />
            </div>
            <div className="flex flex-col flex-wrap max-w-lg md:m-8 m-4 p-4">
              <div className="text-3xl text-right font-black text-white mb-2">{product.name}</div>
              <div className="rating">
                <span onClick={handleRating}>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
              </div>
              <div className="text-lg font-bold text-white mt-4 mb-1.5">Features</div>
              <div className="text-xs mb-8 text-white">
                <ul className="">{(product.details).split("/n").map((detail, i) => {
                  return <li className="p-1" key={i}>- {detail}</li>
                })}</ul>
              </div>
              <h1 className="text-lg font-bold text-white text-right md:text-xl -mt-3.5 mb-1.5">{`$${product.price}`}</h1>
              <div className="flex flex-row justify-around">
                <a href={product.productURL} rel="noreferrer" target="_blank">
                  <button 
                    className="mr-8 px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded my-4 h-8 md:w-40 w-28"
                  >See More</button>
                </a>
                <Link to={`/${id}/edit`}>
                  <button 
                    className="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded my-4 h-8 md:w-40 w-28"
                  >Edit Product</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap mb-8 p-8">
            <div className="text-lg font-bold text-white pl-10">Description</div>
            <p className="text-white px-10" >{product.description}</p>
          </div>
        </div>
        <div className="mb-20">
          <div className="flex justify-between items-center">
            <div className="mt-4 mb-2 text-2xl font-black text-white">
              Reviews
            </div>
            <div>
              <button onClick={handleWrite}>
                Write a Review
              </button>
            </div>
          </div>
        <div className="text-">
          {product.reviews.map((review,i) => {
            return (
              <div className="bg-black flex p-12 mb-8" key={i}>
                <div className="mr-8">
                  {review.author}
                  {review.rating}
                </div>
                <div className="ml-6 lg:ml-20">
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
        />
      </div>
    </Layout>
  );
};

export default ProductDetail;



