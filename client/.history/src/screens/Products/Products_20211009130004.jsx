import { useState, useEffect } from "react"
// import Layout from '../../components/Layout/Layout'
import { getProducts } from '../../services/products'

export default const Products = () => {
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
        <div>
            {products.map((product, index) => {
              return (
                <div></div>
              )
            })}
        </div>
    )
}
