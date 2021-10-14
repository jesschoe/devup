import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

      <footer className="pt-2 mb-20 bottom-0 text-2 flex flex-col justify-center items-center ">
        <img className="self-center h-10" src="https://res.cloudinary.com/devupapp/image/upload/v1633852463/devup/logo_byllgp.png" alt="DevUp Logo" />
        <p className="text-xs tracking-wider mb-8">copyright 2021</p>
        <div className="flex items-center justify-center mb-8">
          <Link to="/aboutus" className="hover:text-white px-4 text-xs">Team</Link>
          <Link to="/" className="hover:text-white text-xs">Resources</Link>
          <Link to="/" className="hover:text-white px-4 text-xs">Blog</Link>
        </div>
        <a href="https://github.com/jesschoe/devup">
          <img 
            src="https://res.cloudinary.com/devupapp/image/upload/v1634063230/devup/GitHub-Mark-Light-64px_sks3fy.png" 
            alt="github icon" 
            className="h-6 self-center mb-10"
          />
        </a>
      </footer>
  );
};

export default Footer;
