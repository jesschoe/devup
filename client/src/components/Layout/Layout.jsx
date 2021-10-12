
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
    <div className="flex flex-col w-screen min-h-screen">
      <div className="">
        <Nav toggle={toggle} />
        <MobileNav isOpen={isOpen} toggle={toggle} />
      </div>
      <div className="flex-col justify-center overflow-hidden align-center items-center bg-background">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
