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
      const fetchProduct = async () => {
        const res = await getProduct(id);
        setProduct(res);
        setIsLoaded(true);
      };
      fetchProduct();
      // eslint-disable-next-line
    }, [id]);

  if (!isLoaded) {
    return <h1>Loading..</h1>;
  }

  return (
    <Layout>
      <div class="flex justify-center flex-column items-center min-h-screen">
        <div class="flex flex-column flex-wrap max-w-5xl mx-auto overflow-hidden bg-black rounded justify-center items-center my-24 mb-96 ">
          <div class="flex flex-row ">
            <div class="flex justify-center content-center">
              <img class="max-h-64 max-w-lg overflow-hidden m-10" src={product.imgURL} alt="" />
            </div>
            <div class=" m-10">
              <h1 class="text-3xl font-bold stroke-orange text-white mb-5  ">{product.name}</h1>
              <h3 class="text-lg font-bold text-white mb-1.5">Features</h3>
              <p class="max-w-sm text-xs mb-8 text-white">
                <ul className="">{product.details.map((detail) => {
                  return <li>- {detail}</li>
                })}</ul>
              </p>
              <h1 class="text-lg font-bold text-white md:text-xl -mt-3.5 mb-1.5">{`$${product.price}`}</h1>
              <div class="relative right-5">
                <Link to="">
                  <button class="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded m-4 h-8 w-40">See More</button>
                </Link>
                <Link to="">
                  <button class="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded m-4 h-8 w-40">Edit Product</button>
                </Link>
              </div>
            </div>
          </div>
          <div class="flex flex-column flex-wrap max-w-3xl m-3 mb-16 relative right-5">
            <div class="mb-1.5 text-lg font-bold text-white">Description</div>
            <p class="text-white" >{product.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;



