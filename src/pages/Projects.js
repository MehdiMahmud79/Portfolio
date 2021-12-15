import React from "react";
import spinner from "../images/spinner.gif";
import SingleCard from "../components/SingleCard";
import "./home.css";

import OtherSkills from "../components/OtherSkills";

const Projects = ({ mydata, loading }) => {
  return (
    <div className="">
      <div className="md:text-xl  bg-gradient-to-b from-green-500 to-green-100 p-2 text-blue-700 font-bold text-center  rounded-b-full">
        {/* <!-- this section is about me --> */}
        <p className="md:text-3xl ">
          <i className="fas fa-project-diagram text-gray-700 px-2"></i>
          All Projects
        </p>

        <hr className="w-48 m-auto" />
        <p className="md:text-lg  text-center text-gray-700 pt-2">
          <i className="fas fa-angle-double-left"></i> Other Projects{" "}
          <i className="fas fa-angle-double-right"></i>
        </p>
      </div>
      <OtherSkills />

      <div className="flex flex-wrap justify-center bg-gray-100  gap-4  p-2 rounded-xl shadow-md my-10 ">
        {loading ? (
          <div>
            <img src={spinner} alt="" />
          </div>
        ) : (
          mydata.oldProjects.map((project) => {
            return <SingleCard data={project} key={project.projectName} />;
          })
        )}
      </div>
    </div>
  );
};

export default Projects;
