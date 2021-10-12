import React from "react";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen min-w-max flex items-center justify-center ">
        <div className="grid grid-cols-3">
          <div className="bg">1</div>
          <div className="bg">2</div>
          <div className="bg">3</div>
          <div className="bg">4</div>
          <div className="bg">5</div>
          <div className="bg">6</div>
          <div className="bg">7</div>
          <div className="bg">8</div>
          <div className="bg">9</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
