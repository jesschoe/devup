import { useState, useEffect } from "react"
// import Layout from '../../components/Layout/Layout'
import { getProducts } from '../../services/products'
import Product from '../../components/Product/Product'
import Sort from '../../components/Sort/Sort'
import { Link } from "react-router-dom"
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
const Products = () => {
  const [products, setProducts] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')

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
    }
    if (applySort) {
      handleSort(sortType)
      setApplySort(false)
    }
  return (
      <div>
        <Sort handleSort={handleSort} />
        <div className="flex flex-wrap justify-center items-center">
        {products.map((product,) => {
          return (
            <Product
              _id={product._id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
              keywords={product.keywords.map((k) => {
                return (
                  <Link>
                  <div className="flex justify-center align-<CardHeader
                    avatar={
                      <Avatar aria-label="">
                        
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="">
                        
                      </IconButton>
                    }
                    title=""
                    subheader=""
                    
                  />">
                    #{k}
                    </div>
                  </Link>
                )
              })}
              key={product._id}
            />
          )
        })}
        </div>
      </div>
  )
}

export default Products



