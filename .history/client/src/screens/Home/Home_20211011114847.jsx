import React from "react";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-max flex items-center justify-center ">
        <div className="grid grid-cols-3 gap-y-2">
          <div className="bg-white p-3 rounded col-span-3">hero</div>
          <div className="bg-white p-3 rounded">Setup</div>
          <div className="bg-white p-3 rounded">Gearup</div>
          <div className="bg-white p-3 rounded">levelup</div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Home;
