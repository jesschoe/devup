import { NavLink } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";

const Nav = () => {
  return (
    <div>
      <nav className="bg-black dark:bg-gray-800  shadow ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <NavLink className="h-8 w-8" to="/">
                <img src="../../../public/logo.png" alt="Devup Logo" />{" "}
              </NavLink>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
                    to="/signin"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="md:hidden">
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
