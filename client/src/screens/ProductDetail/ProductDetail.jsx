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
      <div className="flex justify-center flex-column items-center min-h-screen">
        <div className="flex flex-column flex-wrap max-w-5xl mx-auto overflow-hidden bg-black rounded justify-center items-center my-24 mb-96 ">
          <div className="flex flex-row ">
            <div className="flex justify-center content-center">
              <img className="max-h-64 max-w-lg overflow-hidden m-10" src={product.imgURL} alt="" />
            </div>
            <div className=" m-10">
              <h1 className="text-3xl font-bold stroke-orange text-white mb-5  ">{product.name}</h1>
              <h3 className="text-lg font-bold text-white mb-1.5">Features</h3>
              <div className="max-w-sm text-xs mb-8 text-white">
                <ul className="">{product.details.map((detail, i) => {
                  return <li key={i}>- {detail}</li>
                })}</ul>
              </div>
              <h1 className="text-lg font-bold text-white md:text-xl -mt-3.5 mb-1.5">{`$${product.price}`}</h1>
              <div className="relative right-5">
                <Link to="">
                  <button className="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded m-4 h-8 w-40">See More</button>
                </Link>
                <Link to="">
                  <button className="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded m-4 h-8 w-40">Edit Product</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-column flex-wrap max-w-3xl m-3 mb-16 relative right-5">
            <div className="mb-1.5 text-lg font-bold text-white">Description</div>
            <p className="text-white" >{product.description}</p>
          </div>
        </div>
      </div>Name
    </Layout>
  );
};

export default ProductDetail;



