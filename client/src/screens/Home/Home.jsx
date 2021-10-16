
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer"

const Home = (props) => {
  return (
    <Layout user={props.user} setUser={props.setUser} admin={props.admin} >
      <div className="container-home" >
        <div className="section">
          <div className="bg-black py-20 md:my-24 my-20">
            <div className="bg-hero bg-cover bg-right h-72 flex items-center justify-end md:h-96 md:bg-cover lg:bg-contain lg:bg-no-repeat md:bg-center">
              <div className="pr-12 md:pr-24">
                <h1 className="text-orange text-5xl text-left font-serif">
                  DevUp
                </h1>
                <h1 className="text-orange text-5xl text-left font-serif mb-4">
                  your space
                </h1>
                <h2 className="text-white text-2xl">
                  A quality setup
                  <br />
                  leads to quality code
                </h2>
                <Link to={{
                  pathname: "/products",
                  state: {
                    cat: "",
                    keyword: ""
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
          <div className="bg-black py-20 lg:my-36 my-20">
            <div className="bg-setup bg-cover md:bg-center h-96 flex items-center justify-start">
              <div className="pl-24">
                <h1 className="text-orange text-5xl text-left font-serif mb-2">Set Up</h1>
                <h2 className="text-white text-lg mt-4">
                  Customize your space
                  <br />
                  for comfort and style
                </h2>
                <Link to={{
                  pathname: "/products",
                  state: {
                    cat: "Furniture",
                    keyword: ""
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
          <div className="bg-black py-20 lg:my-36 my-20">
            <div className=" bg-gearup bg-cover bg-center h-96 flex items-center justify-end">
              <div className="pr-20">
                <h1 className="text-orange text-5xl text-left font-serif mb-2">Gear Up</h1>
                <h2 className="text-white text-lg mt-4">
                  Maximize your productivity
                  <br />
                  with the latest tech gear
                </h2>
                <Link to={{
                  pathname: "/products",
                  state: {
                    cat: "Gear",
                    keyword: ""
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
          <div className="bg-black py-20 lg:my-36 my-20">
            <div className=" bg-levelup bg-cover bg-center h-96 flex items-center justify-start">
              <div className="pl-20">
                <h1 className="text-orange text-5xl text-left font-serif mb-2">Level Up</h1>
                <h2 className="text-white text-lg mt-4">
                  Optimize your space
                  <br />
                  for efficiency and convienience
                </h2>
                <Link to={{
                  pathname: "/products",
                  state: {
                    cat: "Accessories",
                    keyword: ""
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
        <div className="section my-20" >
          <Footer />
        </div>
      </div>

    </Layout>
  );
};

export default Home;
