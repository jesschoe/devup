import { useState, useEffect } from "react"
// import Layout from '../../components/Layout/Layout'
import { getProducts } from '../../services/products'
import Product from '../../components/Product/Product'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      const fetchProducts = async () => {
        const allProducts = await getProducts()
        setProducts(allProducts)
        console.log(allProducts)
      }
      fetchProducts()
    }, [])


  return (
      <Product
  )
}

export default Products



