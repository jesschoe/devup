import React from "react";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-max flex items-center justify-center ">
        <div className="grid grid-cols-3">
          <div className="bg-white p-3">1</div>
          <div className="bg-white p-3">2</div>
          <div className="bg-white p-3">3</div>
          <div className="bg-white p-3">4</div>
          <div className="bg-white p-3">5</div>
          <div className="bg-white p-3">6</div>
          <div className="bg-white p-3">7</div>
          <div className="bg-white p-3">8</div>
          <div className="bg-white p-3">9</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
