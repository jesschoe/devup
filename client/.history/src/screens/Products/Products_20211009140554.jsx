import { useState, useEffect } from "react"
// import Layout from '../../components/Layout/Layout'
import { getProducts } from '../../services/products'
import Product from '../../components/Product/Product'
import Sort from '../../components/Sort/Sort'

const Products = () => {
  const [products, setProducts] = useState([])
  const [applySort, setApplySort] = useState(false)
  
  useEffect(() => {
      const fetchProducts = async () => {
        const allProducts = await getProducts()
        setProducts(allProducts)
      }
      fetchProducts()
    }, [])
    
    const handleSort = (type) => {
      if (type !== '' && type !== undefined) {
        setSortType(type)
      }
      switch (type) {
        case 'name-ascending':
          setSearchResult(AZ(searchResult))
          break
        case 'name-descending':
          setSearchResult(ZA(searchResult))
          break
        case 'price-ascending':
          setSearchResult(lowestFirst(searchResult))
          break
        case 'price-descending':
          setSearchResult(highestFirst(searchResult))
          break
        default:
          break
      }
    }
    if (applySort) {
      handleSort(sortType)
      setApplySort(false)
    }
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



