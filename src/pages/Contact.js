import React from "react";

const Contact = () => {
  return (
    <div className="h-screen">
      <div className="container grid mx-auto bg-gray-200 rounded-xl ">
        <div className="md:text-xl  bg-gradient-to-b from-green-500 to-green-100 p-2 text-blue-700 font-bold text-center my-10 mt-0 rounded-b-full">
          {/* <!-- this section is about me --> */}
          <p className="md:text-3xl ">
            <i className="far fa-comments text-gray-700 px-2"></i>
            Let's Talk
          </p>
          <hr className="w-48 m-auto" />
          <p className="md:text-lg  text-center text-gray-700 pt-2">
            <i className="fas fa-angle-double-down"></i>{" "}
            <i className="fas fa-angle-double-down"></i>{" "}
            <i className="fas fa-angle-double-down"></i>{" "}
            <i className="fas fa-angle-double-down"></i>{" "}
          </p>
        </div>{" "}
        <div className="bg-gradient-to-r from-gray-900 to-gray-100 rounded-xl text-xl text-gray-100 p-2 m-2 ">
          <i className="fas fa-at  "> </i> Email:{" "}
          <a
            href="mailto:mehdi.mahmud@hotmail.com "
            className="text-yellow-600"
            target="_blank"
          >
            mehdi.mahmud@hotmail.com
          </a>
        </div>
        <div className="bg-gradient-to-r from-gray-900 to-gray-100 rounded-xl text-xl text-gray-100 p-2 m-2">
          <i className="fab fa-github  "> </i> Github:{" "}
          <a
            href="https://github.com/mehdimahmud79"
            className="text-yellow-600"
            target="_blank"
          >
            mehdimahmud79
          </a>
        </div>
        <div className="bg-gradient-to-r from-gray-900 to-gray-100 rounded-xl text-xl text-gray-100 p-2 m-2">
          <i className="fab fa-linkedin  "> </i> Linkedin:{" "}
          <a
            href="https://www.linkedin.com/in/mehdi-mahmud/"
            className="text-yellow-600"
            target="_blank"
          >
            mehdi-mahmud
          </a>
        </div>
        <div className="bg-gradient-to-r from-gray-900 to-gray-100 rounded-xl text-xl text-gray-100 p-2 m-2">
          <i className="fab fa-researchgate"> </i> ResearchGate:{" "}
          <a
            href="https://www.researchgate.net/profile/Mehdi-Mahmud"
            className="text-yellow-600"
          >
            mehdi-mahmud
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
