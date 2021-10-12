import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getProduct } from "../../services/products";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(
    () => {
      const fecthProduct = async () => {
        const res = await getProduct(id);
        setProduct(res);
        setIsLoaded(true);
      };
      fecthProduct();
      // eslint-disable-next-line
    },
    { id }
  );

  if (!isLoaded) {
    return <h1>Loading..</h1>;
  }

  return (
    <Layout>
      
    <div class="flex max-w- mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">

        <div class="w-2/3 p-4 md:p-4">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{product.name}</h1>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>
            <div class="flex justify-between mt-3 item-center">
                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
            </div>
        </div>
        <div class="w-full my-auto">
          <img className="overflow-hidden"src={product.imgURL} alt="" />
        </div>
    </div>
    </Layout>
  );
};

export default ProductDetail;

{
  /* <div className="flex justify-center min-h-screen min-w-max">
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
      </div> */
}
