import React from 'react'
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import { getProduct } from "../../services/products"

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fecthProduct = async () => {
      const res = await getProduct(id);
      setProduct(res)
      setIsLoaded(true)
    }
    fecthProduct();
    // eslint-disable-next-line
  }, { id })


  if (!isLoaded) {
    return <h1>Loading..</h1>
  }

  return (
    <Layout>
      <div className="product-detail-div">
        <div className="product-detail-column-one">
          <h1 className="product-name">{product.name}</h1>
          <h1 className="product-description">{product.description}</h1>
          <ul className="product-details">{product.details.map((detail) => {
            return <li>{detail}</li>
          })}</ul>
          <div className="product-detail-buttons">
            <button className="see-more-button"><Link to={"/products"}>See More</Link></button>
            <button className="edit-product-button"><Link to={`/products/${id}/edit`}>Edit Product</Link></button>
          </div>
        </div>
        <div className="product-detail-column-two">
          <img className="product-title" src={product.imgURl} alt={product.title} />
          <h1 className="product-price">{product.price}</h1>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail







