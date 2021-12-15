import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Ticker from "react-ticker";
import { fetchApi } from "../utils/fetchProjects";

const Header = () => {
  const projectsUrl = `https://api.github.com/users/MehdiMahmud79/repos`;
  const [mydata, setdata] = useState([" "]);
  const [myProjects, setMyProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const data = await fetchApi(projectsUrl);

    setdata(data);
    setLoading(false);
    if (!mydata) return;
    // console.log("all", mydata.projects);
    const Projects = mydata.projects.map((project) => {
      return project.projectName + " | " + project.created_at.split("T")[0];
    });
    setMyProjects(Projects);
  }, [loading]);
  console.log("my pro", myProjects);
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-r from-gray-900 to-gray-600 static -mt-4 p-2 ">
        <div className="bg-gradient-to-r from-gray-100 to-gray-600 text-gray-900 px-4 font-bold h-12 py-3 w-32 absolute rounded-r shadow-lg z-50">
          PROJECTS
        </div>

        <Ticker offset="run-in" speed={10}>
          {({ index }) => (
            <div className="">
              <p className="bg-green-400 p-2 mx-1 rounded-xl whitespace-no-wrap">
                {" "}
                <i className="fas fa-project-diagram 0 text-yellow-900 p-2"></i>
                {myProjects[index % myProjects.length]}
              </p>
            </div>
          )}
        </Ticker>
      </div>
    </>
  );
};

export default Header;
