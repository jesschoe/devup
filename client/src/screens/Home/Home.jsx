
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <Layout>
      <div className="container-home" >
        <div className="section">
          <div className="bg-black py-20 my-24">
            <div className=" bg-hero bg-cover bg-center h-96 flex items-center bg-opacity-50 justify-end lg:bg-contain lg:bg-no-repeat">
              <div className="pr-20">
                <h1 className="text-orange text-5xl text-left font-serif">
                  DevUp
                </h1>
                <h1 className="text-orange text-5xl text-left font-serif mb-4">
                  your space
                </h1>
                <h2 className="text-white text-2xl">
                  A better setup
                  <br />
                  leads to better code
                </h2>
                <Link to={{
                  pathname:"/products",
                  state:{
                    cat:""
                    }
                }}>
                  <button className="flex items-center px-6 py-2 text-xl my-6 rounded text-white bg-orange ">
                    Browse All
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section" >
          <div className="bg-black py-20 my-24">
            <div className=" bg-setup bg-cover bg-center h-80 flex items-center justify-start">
              <div className="pl-20">
                <h1 className="text-orange text-5xl text-left font-serif mb-2">Set Up</h1>
                <h2 className="text-white text-lg mt-4">
                  Customize your space
                  <br />
                  for comfort and style
                </h2>
                <Link to={{
                  pathname:"/products",
                  state:{
                    cat:"furniture"
                    }
                }}>
                  <button className="flex items-center px-6 py-2 text-xl my-4 rounded text-white bg-orange">
                    Browse Furniture
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="bg-black py-20  my-24">
            <div className=" bg-gearup bg-cover bg-center h-80 flex items-center justify-end">
              <div className="pr-20">
                <h1 className="text-orange text-5xl text-left font-serif mb-2">Gear Up</h1>
                <h2 className="text-white text-lg mt-4">
                  Maximize your productivity
                  <br />
                  with the latest tech gear
                </h2>
                <Link to={{
                  pathname:"/products",
                  state:{
                    cat:"gear"
                    }
                }}>
                  <button className="flex items-center px-6 py-2 text-xl my-4 rounded text-white bg-orange">
                    Browse Gear
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section" >
          <div className="bg-black py-20  my-24">
            <div className=" bg-levelup bg-cover bg-center h-80 flex items-center justify-start">
              <div className="pl-20">
                <h1 className="text-orange text-5xl text-left font-serif mb-2">Level Up</h1>
                <h2 className="text-white text-lg mt-4">
                  Optimize your space
                  <br />
                  for efficiency and convienience
                </h2>
                <Link to={{
                  pathname:"/products",
                  state:{
                    cat:"accessories"
                    }
                }}>
                  <button className="flex items-center px-6 py-2 text-xl my-4 rounded text-white bg-orange">
                    Browse Accessories
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section" >
        <Footer />
      </div>
      </div>
      
    </Layout>
  );
};

export default Home;
