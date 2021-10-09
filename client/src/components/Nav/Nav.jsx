import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">DevUp</NavLink>
        <div className="links">
          <NavLink className="link" to="/signup">Sign Up</NavLink>
          <NavLink className="link" to="/signin">Sign In</NavLink>
          <NavLink className="link" to="/products">Products</NavLink>
        </div>
      </div>
    </nav>
  )
}