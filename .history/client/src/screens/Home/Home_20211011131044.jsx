import React from "react";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-max flex items-center justify-center ">
        <div className="grid grid-cols-3 gap-y-10 w-full">
          <div className="bg-black p-10 col-span-3 my-10">
              <div className=" bg-hero bg-cover bg-center h-96 flex items-center justify-end">
                <div className="text-orange text-3xl text-serif">
                    <h1 className="text-orange text-3xl text-left">Devup<br/>your space</h1>
                    <h2 className="text-white">A better setup<br/>leads to better code</h2>
                    <button className="flex items-center px-6 text-xl my-4 rounded text-white bg-orange">Browse all</button>
                    </div>
                
              </div>
          </div>
          <div className="bg-black p-3 col-span-3">Setup</div>
          <div className="bg-black p-3 col-span-3">Gearup</div>
          <div className="bg-black p-3 col-span-3">levelup</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
