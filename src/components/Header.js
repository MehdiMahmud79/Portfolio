import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Ticker from "react-ticker";
import { fetchApi } from "../utils/fetchProjects";

const Header = () => {
  const projectsUrl = `https://api.github.com/users/MehdiMahmud79/repos`;
  const [mydata, setdata] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const data = await fetchApi(projectsUrl);

    setdata(data);
    setLoading(false);
    if (!mydata) return;
    // console.log("all", mydata.projects);
    const Projects = mydata.projects.map((project) => {
      return project.projectName;
    });
    setMyProjects(Projects);
  }, [loading]);
  console.log("my pro", myProjects);
  return (
    <div className="bg-blue-400 static py-4 ">
      <Navbar />
      <div className="bg-red-600 text-red-200 px-4 font-bold h-12 p-3 w-32 absolute rounded-r-xl z-50">
        PROJECTS
      </div>

      <Ticker offset="run-in" speed={10}>
        {({ index }) => (
          <div className="">
            <p className="bg-green-400 p-2 mx-1 rounded-xl whitespace-no-wrap">
              {" "}
              <i className="fas fa-project-diagram 0 text-yellow-900 p-2"></i>
              {myProjects.join("+")}
            </p>
          </div>
        )}
      </Ticker>
    </div>
  );
};

export default Header;
