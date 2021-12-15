import React from "react";

import About from "../components/About";
import Projects from "../components/Projects";

const Home = ({ mydata, loading }) => {
  return (
    <div className=" md:container mx-auto  shadow-sm  text-center rounded-3xl  ">
      <About />
      <Projects mydata={mydata} loading={loading} />
    </div>
  );
};

export default Home;
