import React from "react";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-max flex items-center justify-center ">
        <div className="grid grid-cols-3 gap-y-16 w-10/12 mx-10">
          <div className="bg-black p-3 col-span-3">
              <div className="grid grid-cols-2 bg-white">
                  .col-
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
