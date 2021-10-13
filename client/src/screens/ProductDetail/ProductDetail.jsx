import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer"
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
      <div className="container">
      <div className="w-9/12 flex flex-col mt-10">
        <div className="flex flex-col overflow-y-scroll bg-black justify-center items-center mb-20">
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="flex justify-center content-center">
              <img className="max-h-64 max-w-lg m-10" src={product.imgURL} alt="" />
            </div>
            <div className="flex flex-col flex-wrap md:m-10 m-4 p-8">
              <div className="text-3xl font-black text-white mb-5">{product.name}</div>
              <div className="text-lg font-bold text-white mb-1.5">Features</div>
              <div className="text-xs mb-8 text-white">
                <ul className="">{(product.details).split("/n").map((detail, i) => {
                  return <li className="p-1 list-disc" key={i}>{detail}</li>
                })}</ul>
              </div>
              <h1 className="text-lg font-bold text-white md:text-xl -mt-3.5 mb-1.5">{`$${product.price}`}</h1>
              <div className="flex flex-col sm:flex-row">
                <a href={product.productURL} target="_blank">
                  <button className="mr-8 px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded my-4 h-8 w-40">See More</button>
                </a>
                <Link to={`/${id}/edit`}>
                  <button className="px-2 py-1 text-xs font-bold text-white bg-orange uppercase rounded my-4 h-8 w-40">Edit Product</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap mb-16 p-8">
            <div className="text-lg font-bold text-white pl-10">Description</div>
            <p className="text-white px-10" >{product.description}</p>
          </div>
        </div>
        <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;



