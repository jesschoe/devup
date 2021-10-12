import React from "react";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-max flex items-center justify-center ">
        <div className="grid grid-cols-3 gap-y">
          <div className="bg-white p-3 rounded">1</div>
          <div className="bg-white p-3 rounded">2</div>
          <div className="bg-white p-3 rounded">3</div>
          <div className="bg-white p-3 rounded">4</div>
          <div className="bg-white p-3 rounded">5</div>
          <div className="bg-white p-3 rounded">6</div>
          <div className="bg-white p-3 rounded">7</div>
          <div className="bg-white p-3 rounded">8</div>
          <div className="bg-white p-3 rounded">9</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
