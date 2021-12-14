import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import spinner from "../images/spinner.gif";
import SingleCard from "../components/SingleCard";
import "./home.css";
import { fetchApi } from "../utils/fetchProjects";

import OtherSkills from "../components/OtherSkills";
const Projects = () => {
  const projectsUrl = `https://api.github.com/users/MehdiMahmud79/repos`;
  const [mydata, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const data = await fetchApi(projectsUrl);
    setdata(data);
    setLoading(false);
  }, []);

  return (
    <div className="">
      <div className="md:text-xl  bg-yellow-600 p-2 text-blue-700 font-bold text-center my-10 rounded-b-full">
        {/* <!-- this section is about me --> */}
        <p className="md:text-3xl ">
          <i className="fas fa-user-graduate text-gray-700 px-2"></i>
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
