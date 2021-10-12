import React from "react";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-max flex items-center justify-center ">
        <div className="grid grid-cols-3">
          <div className="bg-white">1</div>
          <div className="bg-white">2</div>
          <div className="bg-white">3</div>
          <div className="bg-white">4</div>
          <div className="bg-white">5</div>
          <div className="bg-white">6</div>
          <div className="bg-white">7</div>
          <div className="bg-white">8</div>
          <div className="bg-white">9</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
