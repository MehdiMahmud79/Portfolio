import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logoSm.png";

let date = new Date();
let author = "";
const SingleCard = ({ data }) => {
  return (
    <>
      <div className="max-w-md py-2 px-4 bg-gray-300 shadow-lg rounded-t-3xl my-5  relative ">
        <div className="flex justify-center md:justify-end -mt-4">
          <img
            className="w-12 h-12 object-cover rounded-full border-2 border-gray-500 p-2 z-30"
            src={logo}
          />
        </div>
        <div className="flex justify-center md:justify-end my-4">
          <img
            className="w-100 h-100 object-cover rounded-3xl border-2 border-gray-500 shadow-lg z-40"
            src={data.project_img}
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-xl font-semibold">
            {data.projectName}
          </h2>
          <p className="mt-2 text-gray-800">{data.description}</p>
        </div>

        <div className="absolute top-0 left-0 w-full bg-blue-900 z-0  text-blue-200 flex justify-between px-4 py-1 rounded-t-3xl ">
          <a
            type="button"
            href={data.gitHub_Url}
            className=" text-decoration-none hover:text-red-600"
          >
            <i className="fab fa-github-alt"></i> Github
          </a>
          <a
            type="button"
            href={data.homepage}
            className=" text-decoration-none hover:text-red-600 "
          >
            <i className="fab fa-internet-explorer"></i> Live
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
