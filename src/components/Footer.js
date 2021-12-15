import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-gray-100 to-gray-900 static
         text-3xl text-white text-center
         border-t-4 border-gray-500
     
         p-4
         "
    >
      <div
        className="
          flex
          justify-content-center justify-between
          p-4
          text-gray-100
        "
      >
        <div className="mx-5 ">
          <h1 className="text-xl text-gray-800">
            Get connected with me on social networks:
          </h1>
        </div>
        <div className="text-3xl">
          <a
            target="_blank"
            href="https://www.researchgate.net/profile/Mehdi-Mahmud"
            className="mx-4  text-decoration-none hover:text-red-600"
          >
            <i className="fab fa-researchgate"></i>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/mehdi-mahmud/"
            className="mx-4  text-decoration-none hover:text-red-600 m-2"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/mehdimahmud79"
            className="mx-4  text-decoration-none hover:text-red-600 m-2"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>{" "}
    </footer>
  );
};

export default Footer;
