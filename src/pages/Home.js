import React from "react";

import SingleCard from "../components/SingleCard";
import "./home.css";
import spinner from "../images/spinner.gif";
import About from "../components/About";
const Home = ({ mydata, loading }) => {
  return (
    <div className=" md:container mx-auto  shadow-sm  text-center rounded-3xl  ">
      <About />
      <div className="md:text-xl  bg-gradient-to-b from-green-500 to-green-100 p-2 text-blue-700 font-bold text-center my-10 rounded-b-full">
        <p className="md:text-3xl ">
          <i className="fas fa-user-graduate text-gray-700 px-2"></i>
          Projects
        </p>

        <hr className="w-48 m-auto" />
        <p className="md:text-lg  text-center text-gray-700 pt-2">
          <i className="fas fa-angle-double-left"></i> Recent Projects{" "}
          <i className="fas fa-angle-double-right"></i>
        </p>
      </div>

      <div className="flex flex-wrap justify-center bg-gray-100  gap-4  p-2 rounded-xl shadow-md my-10 ">
        {loading ? (
          <div>
            <img src={spinner} alt="" />
          </div>
        ) : (
          mydata.favProjects.map((project) => {
            return <SingleCard data={project} key={project.projectName} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
