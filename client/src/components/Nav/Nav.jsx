import { NavLink } from "react-router-dom";


const Nav = ({ toggle, user, admin }) => {
  const authenticatedOptionsBasic = (
    <>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-md font-medium" to={user ? `/${user.id}/wishlist` : "/"}>Wishlist</NavLink>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-md font-medium" to="/signout">Sign Out</NavLink>
    </>
  )
  const authenticatedOptionsAdmin = (
    <>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-md font-medium" to="/add-product">Add Product</NavLink>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-md font-medium" to="/signout">Sign Out</NavLink>
    </>
  )

  const unauthenticatedOptions = (
    <>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-md font-medium" to="/signup">Sign Up</NavLink>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-md font-medium" to="/signin">Sign In</NavLink>
    </>
  )

  const alwaysOptions = (
    <>
      <NavLink className="text-purple hover:text-white pr-6 py-2 text-md font-medium" to="/products">Products</NavLink>
    </>
  )
  return (
    <nav className="flex justify-between items-center h-24 bg-black shadow-lg z-10 w-screen pr-8">
      <NavLink className="h-20 p-2 mt-4" to="/">
        <img
          className="h-12 mx-8"
          src="https://res.cloudinary.com/devupapp/image/upload/v1633852463/devup/logo_byllgp.png"
          alt="Devup Logo" />
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

      <div className="md:flex md:flex-col hidden">
        {user && <div className="text-white font-black text-right pr-6 pb-2">Welcome, {user.username}!</div>}
        <div>
        {alwaysOptions}
        {user ? (admin ? authenticatedOptionsAdmin : authenticatedOptionsBasic) : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
