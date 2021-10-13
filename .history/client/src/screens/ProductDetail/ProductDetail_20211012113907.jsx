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
      
    </Layout >
  )
}

export default ProductDetail







