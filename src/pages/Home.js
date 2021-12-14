import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import profileImage from "../images/profile.jpg";
import Skills from "../components/Skills";
import CV from "./cv.pdf";
import { fetchApi } from "../utils/fetchProjects";
import SingleCard from "../components/SingleCard";
import "./home.css";
import spinner from "../images/spinner.gif";

const Home = () => {
  const projectsUrl = `https://api.github.com/users/MehdiMahmud79/repos`;
  const [mydata, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const data = await fetchApi(projectsUrl);
    setdata(data);
    setLoading(false);
  }, []);

  console.log(mydata.favProjects);
  return (
    <div className=" container mx-auto shadow-lg my-2 bg-gray-200 text-center rounded-3xl mt-4 h-100">
      <div className="md:text-xl  bg-yellow-600 p-2 text-blue-700 font-bold text-center rounded-b-full">
        {/* <!-- this section is about me --> */}
        <p className="md:text-3xl ">
          <i className="fas fa-user-graduate text-gray-700 px-2"></i>
          About me
        </p>
        <hr className="w-48 m-auto" />
        <p className="md:text-lg  text-center text-gray-700 pt-2">
          <i className="fas fa-angle-double-left"></i> who I'm{" "}
          <i className="fas fa-angle-double-right"></i>
        </p>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  items-center  justify-self-center">
        <img
          className="m-2 rounded-3xl  p-1 col-span-1  outline outline-1  outline-offset-1 outline-yellow-500 auto-cols-max"
          src={profileImage}
          alt="my photo"
        />
        <div className="md:col-span-3 flex flex-wrap">
          <h1 className=" p-2 md:text-3xl text-gray-800 font-bold text-left  ">
            <Skills />
          </h1>{" "}
          <div className=" m-2 md:text-2xl font-sans  text-justify md:leading-10 ">
            <p className="p-4">
              A skilled programmer can adapt to all stages of advanced
              programming. Capable of coding, user interface, testing, and
              debugging procedures. Full-stack developer with a passion for
              coding and problem solving situated in Birmingham. I hold a PhD in
              applied mathematics from the University of Birmingham and since
              2001, I have been experienced in doing research, teaching, IT, and
              video editing. Currently expanding my expertise by enrolling in an
              intense Full-Stack Bootcamp at the University of Birmingham, which
              will be completed in November 2021.
            </p>
          </div>
          <div className="relative flex-auto items-center  justify-self-center m-2">
            <Link
              target="_blank"
              className="flex-1 px-4 py-2 bg-red-800 text-red-100 rounded-xl "
              to={CV}
            >
              <i
                className="fa fa-download  text-gray-400 "
                aria-hidden="true"
              ></i>{" "}
              Higher Me
              <span className="absolute  bottom-0 left-90   rounded-full p-1 m-2 bg-yellow-400 text-gray-800 hover:bg-red-900 hover:text-red-100">
                CV
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:text-xl  bg-yellow-600 p-2 text-blue-700 font-bold text-center my-10 rounded-b-full">
        {/* <!-- this section is about me --> */}
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
      <div className="flex flex-wrap justify-center bg-gray-100 m-2 p-2 rounded-xl shadow-md">
        {loading ? (
          <div>
            <img src={spinner} alt="" />
          </div>
        ) : (
          mydata.favProjects.map((project) => {
            return <SingleCard key={project.projectName} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
