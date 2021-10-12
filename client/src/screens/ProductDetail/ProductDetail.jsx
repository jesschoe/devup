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

      <div class="flex justify-center flex-column items-center min-h-screen">
        <div class="flex max-w-5xl mx-auto overflow-hidden bg-black rounded justify-center items-center my-24">
          <div class="flex flex-row ">
            <div class="flex justify-center content-center">
              <img class="max-h-64 ax-w-xs overflow-hidden m-10" src={product.imgURL} alt="" />
            </div>
            <div class=" m-10">
              <h1 class="text-3xl font-bold text-white mb-5">{product.name}</h1>
              <p class="max-w-sm text-xs mb-8 text-white">
                <ul className="">{product.details.map((detail) => {
                  return <li> - {detail}</li>
                })}</ul>
              </p>
              <h1 class="text-lg font-bold text-white md:text-xl">{`$${product.price}`}</h1>
              <div>
                <Link to="">
                  <button class="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded m-4">See More</button>
                </Link>
                <Link to="">
                  <button class="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded ">See More</button>
                </Link>
              </div>
            </div>

      <div className="flex justify-center items-center min-h-screen">
        <div class="flex max-w-2xl mx-auto overflow-hidden bg-black rounded justify-center items-center my-24">
          <div class="w-2/3 p-4 md:p-4">
            <h1 class="text-3xl font-bold text-white">{product.name}</h1>

            <p class="mt-2 text-xs text-white">{product.description}</p>
            <p class="mt-2 text-xs text-white">
              <ul className="">
                {product.details.map((detail) => {
                  return <li> - {detail}</li>;
                })}
              </ul>
            </p>
            <div class="flex justify-between mt-3 item-center">
              <h1 class="text-lg font-bold text-white md:text-xl">{`$${product.price}`}</h1>
            </div>
            <Link to={"/products"}>
              <button class="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded m-4">
                See More
              </button>
            </Link>
            <Link to={`/products/${id}/edit`}>
              <button class="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded ">
                Edit Product
              </button>
            </Link>
          </div>
          <div class="w-full my-auto">
            <img
              className="overflow-hidden"
              src={product.imgURL}
              alt={product.name}
            />

          </div>
        </div>
      </div>
    </Layout>
  );
};

<<<<<<< HEAD
=======


{/* <div className="flex justify-center items-center min-h-screen">
        <div class="flex max-w-5xl mx-auto overflow-hidden bg-black rounded justify-center items-center my-24">

          <div class="w-2/3 p-96 md:p-4">
            <h1 class="text-3xl font-bold text-white">{product.name}</h1>

            <p class="mt-2 text-xs text-white">{product.description}</p>
            <div class="flex justify-between mt-3 item-center">
              <h1 class="text-lg font-bold text-white md:text-xl">{`$${product.price}`}</h1>
            </div>
            <Link to="">
              <button class="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded m-4">See More</button>
            </Link>
            <Link to="">
              <button class="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded ">See More</button>
            </Link>
          </div>




          <div class="flex-column m-10  ">
            <img class="max-h-80 overflow-hidden relative right-10 m-10" src={product.imgURL} alt="" />
            <p class="max-w-sm max-w-30 text-xs mb-8 text-white">
              <ul className="">{product.details.map((detail) => {
                return <li> - {detail}</li>
              })}</ul>
            </p>
          </div>
        </div>
      </div> */}


>>>>>>> 7df4d1bd096511665938d6bfe2064e33cc069922
export default ProductDetail;



