import { NavLink } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";

const Nav = () => {
  return (
    <div>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="w-full justify-between flex items-center h-20">
              <NavLink className="h-8" to="/">
                <img className="h-12" src="https://res.cloudinary.com/devupapp/image/upload/v1633852463/devup/logo_byllgp.png" alt="Devup Logo" />{" "}
              </NavLink>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/signup"
                    className="text-purple hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    to="/signin"
                    className="text-purple hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    >
                    Sign In
                  </NavLink>
                  <NavLink 
                    to={{
                      pathname:"/products",
                      state:{
                        cat:""
                      }
                    }}
                    className="text-purple hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Products
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
