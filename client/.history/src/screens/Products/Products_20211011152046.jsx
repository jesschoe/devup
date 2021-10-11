import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import { getProducts } from '../../services/products'
import Layout from '../../components/Layout/Layout'
import Product from '../../components/Product/Product'
import Sort from '../../components/Sort/Sort'
import Categories from "../../components/Categories/Categories"
import { priceLowHigh, priceHighLow } from "../../utils/sort"
import { useParams } from "react-router"

const Products = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('price-low-high')
  const ;
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
      setCategory(allProducts)
    }
    fetchProducts()
  }, [])

  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    if (type === 'price-low-high') {
      setCategory(priceLowHigh(category))
    } else if (type === 'price-high-low') {
      setCategory(priceHighLow(category))
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleCategories = (option) => {
    const results = products.filter((product) =>
      product.category.includes(option)

    )
    setCategory(results)
    setApplySort(true)
  }


  return (
    <Layout>
      <Categories handleCategories={handleCategories} />
      <Sort className="" handleSort={handleSort} />
      <div>
        <div className="flex flex-wrap justify-center items-center">
          {category.map((product) => {
            return (
              <div key={product._id}>
                <Product
                  _id={product._id}
                  name={product.name}
                  imgURL={product.imgURL}
                  price={product.price}
                  keywords={product.keywords.map((k, i) => {
                    return (
                      <div key={i}>


                        #{k}

                      </div>
                    )
                  })}
                /> </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Products



