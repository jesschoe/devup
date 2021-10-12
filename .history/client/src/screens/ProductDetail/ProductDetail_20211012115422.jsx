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
      <div className="flex justify-center items-center min-h-screen min-w-max">
        <div className=" bg-black grid grid-cols-2 grid-rows-4">
          <div className="col-start-1">name</div>
          <div className="col-start-1">description</div>
          <div className="col-start-1">details</div>
          <div className="col-start-1">
            <button>see more</button>
            <button>edit product</button>
          </div>
          <div className="col-start-2 row-start-1 row-span-4" >}</div>
        </div>
      </div>
    </Layout >
  )
}

export default ProductDetail



{/* <div className="flex justify-center min-h-screen min-w-max">
        <div class="bg-black flex justify-center max-w-56">
          <div class="">
            <div class="">
              <h1 class="">{product.name}</h1>
              <h1 className="">{product.description}</h1>
              <ul className="">{product.details.map((detail) => {
                return <li> - {detail}</li>
              })}</ul>
              <div className="">
                <button className=""><Link to={"/products"}>See More</Link></button>
                <button className=""><Link to={`/products/${id}/edit`}>Edit Product</Link></button>
              </div>
            </div>
            <div class="">
              <img class="" src={product.imgURL} alt={product.title} />
              <h1 className="">{product.price}</h1>
            </div>
          </div>
        </div>

        <div className="product-detail-column-two">
          <img className="product-title" src={product.imgURL} alt={product.title} />
          <h1 className="product-price">{product.price}</h1>
        </div>
      </div> */}



