import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-max flex items-center justify-center ">
        <div className="grid grid-cols-3 gap-y-10 w-full">
          <div className="bg-black p-10 col-span-3 my-10">
              <div className=" bg-hero bg-cover bg-center h-96 flex items-center justify-end">
                <div className="pr-10">
                    <h1 className="text-orange text-5xl text-left">Devup<br/>your space</h1>
                    <h2 className="text-white text-lg">A better setup<br/>leads to better code</h2>
                    <Link to='/products'>
                    <button className="flex items-center px-6 text-xl my-4 rounded text-white bg-orange">Browse all</button>
                    </Link>
                    </div>
              </div>
          </div>
          <div className="bg-black p-10 col-span-3 my-10">
              <div className=" bg-setup bg-cover bg-center h-96 flex items-center justify-start">
                    <div className="pl-10">
                    <h1 className="text-orange text-5xl text-left">Set Up</h1>
                    <h2 className="text-white text-lg">Customize your space<br/>for comfort and style</h2>
                    <Link to='/products'>
                    <button className="flex items-center px-6 text-xl my-4 rounded text-white bg-orange">Browse all</button>
                    </Link>
                    </div>
              </div>
          </div>
          <div className="bg-black p-10 col-span-3 my-10">
              <div className=" bg-gearup bg-cover bg-center h-96 flex items-center justify-end">
                <div className="pr-10">
                    <h1 className="text-orange text-5xl text-left">Gear Up</h1>
                    <h2 className="text-white text-lg">Maximize your productivity<br/>with the latest tech gear</h2>
                    <Link to='/products'>
                    <button className="flex items-center px-6 text-xl my-4 rounded text-white bg-orange">Browse all</button>
                    </Link>
                    </div>
              </div>
          </div>
          <div className="bg-black p-10 col-span-3 my-10">
              <div className=" bg-levelup bg-cover bg-center h-96 flex items-center justify-start">
                    <div className="pl-10">
                    <h1 className="text-orange text-5xl text-left">Level Up</h1>
                    <h2 className="text-white text-lg">Optimize your space<br/>for efficien and style</h2>
                    <Link to='/products'>
                    <button className="flex items-center px-6 text-xl my-4 rounded text-white bg-orange">Browse all</button>
                    </Link>
                    </div>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
