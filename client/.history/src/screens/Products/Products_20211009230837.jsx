import { useState, useEffect } from "react"
import Layout from '../../components/Layout/Layout'
import { getProducts } from '../../services/products'
import Product from '../../components/Product/Product'
import Sort from '../../components/Sort/Sort'
import { Link } from "react-router-dom"


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
    <Layout>
        <Sort className=""handleSort={handleSort} />
        <div className=" bg-gray-700">
        <div className="flex flex-wrap justify-center items-center">
        {products.map((product, key) => {
          return (
            <Product
              _id={product._id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
              key={props._id}
              keywords={produ.keywords.map((k) => {
                return (
                  <div>
                  <Link>
                    #{k}
                  </Link>
                    </div>
                )
              })}
              key={product._id}
            />
          )
        })}
        </div>
      </div>
      </Layout>
  )
}

export default Products



