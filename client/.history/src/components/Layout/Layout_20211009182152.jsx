import React from 'react'

const Layout = () => {
  return (
    
  )
}

export default Layout


import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}
export default Layout