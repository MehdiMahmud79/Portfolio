import React from "react";
import Navbar from "./Navbar";
import Ticker from "react-ticker";

const Header = () => {
  const projects = [
    "This is the Headline of element 1!",
    "This is the Headline of element 2!",
    "This is the Headline of element 3!",
  ];

  return (
    <div className="bg-blue-400 static py-4 ">
      <Navbar />
      <div className="bg-red-600 text-red-200 font-bold h-12 p-3 w-24 absolute rounded-r-xl z-50">
        PROJECTS
      </div>

      <Ticker offset="run-in" speed={10}>
        {({ index }) => (
          <div className="">
            <h1 className="bg-green-400 p-2 mx-1 rounded-xl">
              {" "}
              <i className="fas fa-project-diagram 0 text-yellow-900 p-2"></i>
              {projects[0] + projects[1]}
            </h1>
          </div>
        )}
      </Ticker>
    </div>
  );
};

export default Header;
