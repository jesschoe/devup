import React from "react";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-max flex items-center justify-center ">
        <div className="grid grid-cols-3">
          <div className="bg-white p">1</div>
          <div className="bg-white p">2</div>
          <div className="bg-white p">3</div>
          <div className="bg-white p">4</div>
          <div className="bg-white p">5</div>
          <div className="bg-white p">6</div>
          <div className="bg-white p">7</div>
          <div className="bg-white p">8</div>
          <div className="bg-white p">9</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
