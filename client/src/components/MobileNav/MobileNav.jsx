import { NavLink } from "react-router-dom";

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <div className={
      isOpen ? "" : "hidden"
    }
      onClick={toggle}>
      <NavLink
        className="text-white px-3 py-2 text-sm block"
        to="/signup">
        Sign Up
      </NavLink>
      <NavLink
        className="text-white px-3 py-2 text-sm block"
        to="/signin">
        Sign In
      </NavLink>
      <NavLink
        className="text-white px-3 py-2 text-sm block"
        to="/products">
        Products
      </NavLink>
    </div>
  );
};

export default MobileNav;
