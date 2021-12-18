import React from "react";
import logo from "../images/logoSm.png";
import "./style.css";

const ContactCard = ({ title, icon, content, hrefTo }) => {
  return (
    <div className=" conta_ctcard  ">
      <div className="flex justify-center md:justify-end   -mt-14 ">
        <img
          className="w-24 h-24object-cover rounded-full border-2 border-gray-500 p-2 "
          src={logo}
        />
      </div>

      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">
          <i className={icon} aria-hidden="true"></i>
          {title}
        </h2>
        <p className="mt-2 text-gray-600">{content}</p>
      </div>
      <div className="flex justify-end mt-4">
        <a
          target="_blank"
          type="button"
          href={hrefTo}
          className="md:text-xl font-medium text-indigo-500"
        >
          {hrefTo}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
