import React from "react";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-max flex items-center justify-center ">
        <div className="grid grid-cols-3 gap-y-10 w-full">
          <div className="bg-black p-10 col-span-3 my-10">
              <div className=" bg-hero bg-cover bg-center h-96 my-auto">
                devup
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
