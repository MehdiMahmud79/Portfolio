import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logoSm.png";

let date = new Date();
let author = "";
const SingleCard = () => {
  return (
    <>
      <div className="flex-auto rounded-xl flex-wrap overflow-hidden bg-gray-900 text-red-100 opacity-90 m-3 shadow-md ">
        <div className="flex-auto justify-between ">
          <img
            id="cardLogo"
            className="bg-gray-900  rounded-xl m-2 p-2"
            src={logo}
            alt="inquizer logo"
          />
          <div className="p-2 m-2">
            <i className="fas fa-user-edit "> </i>{" "}
            <span className="text-blue-400">hhhh</span>
            <div className="mt-2">
              <i className="far fa-calendar-check "> </i>{" "}
              <span className="text-green-400">hhh2</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-4">
          <h1 className="font-bold text-yellow-200  my-2">
            <i className="fas fa-angle-double-right text-green-500"> </i> Title:{" "}
            hh3
          </h1>
          <h2 className=" text-yellow-200  my-2">
            <i className="fas fa-chart-pie text-green-500"> </i> Difficulty:{" "}
            hhh4
          </h2>
          <h2 className=" text-yellow-200  mb-2">
            <i className="fas fa-list-ul text-green-500"> </i> No. of Questions:{" "}
            hh5
          </h2>
          <h2 className=" text-yellow-200  my-2">
            <i className="fas fa-layer-group text-green-500"> </i> Category:{" "}
            hhh6
          </h2>
          <h2 className="text-yellow-200  my-2">
            <i className="fas fa-check text-green-500"> </i> Quiz Type: hhh7
          </h2>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
