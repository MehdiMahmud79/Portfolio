import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

const Skills = () => {
  return (
    <p className="p-2 md:text-2xl float-left">
      I'm <span className="text-red-600  ">MEHDI </span>and
      <i className="fas fa-code text-yellow-900 p-2"> </i> I am
      <span className=" text-green-600 font-bold p-2">
        <Typewriter
          words={[
            "A Web Developer...✔️",
            "A Problem Solver...✔️",
            "A Programmer...✔️",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </p>
  );
};

export default Skills;
