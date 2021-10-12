import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer className="bg-background text-2 flex flex-col justify-center items-center relative">
        <img className="self-center w-20" src="https://res.cloudinary.com/devupapp/image/upload/v1633852463/devup/logo_byllgp.png" alt="DevUp Logo" />
        <div className="flex items-center justify-center">
          <Link to="/aboutus" className="hover:text-white p-5">Team</Link>
          <Link to="/" className="hover:text-white p-5">Resources</Link>
          <Link to="/" className="hover:text-white p-5">Blog</Link>
        </div>
        <a href="https://github.com/jesschoe/devup">
          <img 
            src="https://res.cloudinary.com/devupapp/image/upload/v1634063230/devup/GitHub-Mark-Light-64px_sks3fy.png" 
            alt="github icon" 
            className="h-8 self-center"
          />
        </a>
      </footer>
  );
};

export default Footer;
