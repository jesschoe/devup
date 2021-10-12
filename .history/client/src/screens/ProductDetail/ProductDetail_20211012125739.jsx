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

export default ProductDetail;


