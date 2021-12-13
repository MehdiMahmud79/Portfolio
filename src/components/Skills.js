import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

const Skills = () => {
  return (
    <div>
      <span>
        <i className="fas fa-user 0 text-yellow-900 p-2"> </i> I am
        <span className=" text-green-600 font-bold p-2">
          {/* Style will be inherited from the parent element */}
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
      </span>
    </div>
  );
};

export default Skills;
