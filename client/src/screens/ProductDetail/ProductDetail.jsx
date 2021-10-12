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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;



