import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLink
          className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium block"
          to="/signup"
        >
          Sign Up
        </NavLink>
        <NavLink
          className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium block"
          to="/signin"
        >
          Sign In
        </NavLink>
        <NavLink
          className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium block"
          to="/products"
        >
          Products
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
