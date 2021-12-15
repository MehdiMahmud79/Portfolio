import React from "react";
import { Typewriter } from "react-simple-typewriter";

const OtherSkills = () => {
  return (
    <div>
      <h1 className="md:text-3xl m-0 my-4 text-blue-600 font-bold text-center">
        <i className="fas fa-laptop-code p-2"></i>
        Other Skills:
        <span className=" text-green-600 font-bold p-2">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "HTML",
              "JavaScript",
              "ReactJs",
              "MongoDB",
              "GraphQl",
              "JWT",
              "Apollo Server",
              "JQuery",
              "MySQL",
              "Sequelize ORM",
              "Handlebars MVC",
              "NodeJs",
              "Express",
              "Git",
              "CSS",
              "BootStrap",
              "Git",
              "Fortran",
              "Visual Basic",
              "Microsoft office",
              "Matlab",
              "Adobe Premier",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default OtherSkills;
