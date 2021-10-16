import { NavLink } from "react-router-dom";

const MobileNav = ({ isOpen, toggle, user, admin }) => {
  const authenticatedOptionsBasic = (
    <>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-sm font-medium" to={user ? `/${user.id}/wishlist` : "/"}>Wishlist</NavLink>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-sm font-medium" to="/signout">Sign Out</NavLink>
    </>
  )
  const authenticatedOptionsAdmin = (
    <>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-sm font-medium" to="/add-product">Add Product</NavLink>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-sm font-medium" to="/signout">Sign Out</NavLink>
    </>
  )

  const unauthenticatedOptions = (
    <>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-sm font-medium" to="/signup">Sign Up</NavLink>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-sm font-medium" to="/signin">Sign In</NavLink>
    </>
  )

  const alwaysOptions = (
    <>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-sm font-medium" to="/products">Products</NavLink>
    </>
  )

  return (
    <div 
      className={isOpen ? "" : "hidden"}
      onClick={toggle}
    >
      <div className="flex flex-col items-center bg-black">
        {user && <div className="text-white font-black text-right pr-6 pb-2">Welcome, {user.username}!</div>}
        <div className="flex flex-col items-center">
        {alwaysOptions}
        {user ? (admin ? authenticatedOptionsAdmin : authenticatedOptionsBasic) : unauthenticatedOptions}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
