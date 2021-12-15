import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logoSm.png";

let date = new Date();
let author = "";
const SingleCard = ({ data }) => {
  return (
    <>
      <div className="max-w-md py-2 px-4 bg-gray-300 shadow-lg rounded-t-3xl my-5  relative ">
        <div className="flex justify-center md:justify-end my-4">
          <img
            className="w-100 h-100 object-cover my-6 rounded-3xl border-2 border-gray-500 shadow-lg "
            src={data.project_img}
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-xl font-semibold">
            {data.projectName} |{" "}
            <i className="far fa-calendar-times text-green-800"> </i>{" "}
            <span className="font-mono text-blue-800">
              {data.created_at.split("T")[0]}{" "}
            </span>
          </h2>
          <p className="mt-2 text-gray-800">{data.description}</p>
        </div>

        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-gray-900 to-blue-400   text-blue-200 flex justify-between px-4 py-1 rounded-t-3xl ">
          <a
            target="_blank"
            type="button"
            href={data.gitHub_Url}
            className=" text-decoration-none hover:text-red-600"
          >
            <i className="fab fa-github-alt"></i> Github
          </a>
          <div className="flex justify-center md:justify-end -mt-4">
            <img
              className="w-12 h-12 object-cover rounded-full border-2 border-gray-500 p-2 "
              src={logo}
            />
          </div>
          <a
            target="_blank"
            type="button"
            href={data.homepage}
            className=" text-decoration-none hover:text-red-600 "
          >
            <i className="fab fa-edge"></i> Live
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
