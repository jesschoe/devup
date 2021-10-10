import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">
      <div class="flex items-center justify-between h-16">
      <div class="w-full justify-between flex items-center">
        <
      </div>
        <NavLink className="logo" to="/">
          <img src="../../../public/logo.png" alt="Devup Logo" />
        </NavLink>
        <div className="links">
          <NavLink className="link" to="/signup">
            Sign Up
          </NavLink>
          <NavLink className="link" to="/signin">
            Sign In
          </NavLink>
          <NavLink className="link" to="/products">
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
