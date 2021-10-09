import { useState, useEffect } from "react"
// import Layout from '../../components/Layout/Layout'
import { getProducts } from '../../services/products'
import Product from '../../components/Product/Product'

const Products = () => {
  const [products, setProducts] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState("name-ascending")
  
  useEffect(() => {
      const fetchProducts = async () => {
        const allProducts = await getProducts()
        setProducts(allProducts)
      }
      fetchProducts()
    }, [])
      

  return (
      <div>
        {products.map((product,) => {
          return (
            <Product
              _id={product._id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
              category={product.category}
              key={product._id}
            />
          )
        })}
      </div>
  )
}

export default Products



