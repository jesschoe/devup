import { NavLink } from "react-router-dom";

const Nav = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center h-20 bg-black shadow-lg z-10 w-screen">
      <NavLink className="h-20 p-2" to="/">
        <img
          className="h-16 mx-8"
          src="https://res.cloudinary.com/devupapp/image/upload/v1633852463/devup/logo_byllgp.png"
          alt="Devup Logo"/>
      </NavLink>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="h-8 w-8"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
          </path>
        </svg>
      </div>

      <div className="px-8 md:block hidden">
        <NavLink
          className="text-purple hover:text-white px-3 py-2 text-md font-medium"
          to="/signup">
          Sign Up
        </NavLink>
        <NavLink
          className="text-purple hover:text-white px-3 py-2 text-md font-medium"
          to="/signin">
          Sign In
        </NavLink>
        <NavLink
          className="text-purple hover:text-white px-3 py-2 text-md font-medium"
          to="/products">
          Products
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
