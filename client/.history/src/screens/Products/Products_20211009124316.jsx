import { useState, useEffect } from "react"
// import Layout from '../../components/Layout/Layout'
import { getProducts } from '../../services/products'

export const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
          const allProducts = await getProducts()
          setProducts(allProducts)
          setSearchResult(allProducts)
        }
        fetchProducts()
      }, [])


    return (
        <Layout>
            {products.map((product, index) => {
              return (
                <div></div>
              )
            })}
        </Layout>
    )
}