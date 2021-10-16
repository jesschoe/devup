
import Nav from "../Nav/Nav";
import { useState, useEffect } from "react";
import MobileNav from "../MobileNav/MobileNav";

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
  });
  return (
    <div className="flex-auto flex flex-col w-screen min-h-screen">
      <div className="">
        <Nav user={props.user} setUser={props.setUser} admin={props.admin} toggle={toggle} />
        <MobileNav isOpen={isOpen} toggle={toggle} user={props.user} admin={props.admin}/>
      </div>
      <div className="flex-1 flex-col justify-center overflow-hidden align-center items-center">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
