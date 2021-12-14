import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-blue-400
         text-3xl text-white text-center
         border-t-4 border-gray-500
         
         bottom-0
         p-4
         "
    >
      <div
        className="
          flex
          justify-content-center justify-between
          p-4
          text-gray-800
        "
      >
        <div className="mx-5 ">
          <p className="text-lg">Get connected with me on social networks:</p>
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
