import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "@material-tailwind/react/tailwind.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { initialProjects } from "./utils/initialProjects";
import { fetchApi } from "./utils/fetchProjects";

function App() {
  const projectsUrl = `https://api.github.com/users/MehdiMahmud79/repos`;
  const [mydata, setdata] = useState(initialProjects);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    // if there is no new projects to the initial projects dont call the Api to save the Limit reuqest
    if (mydata.projects.length >= initialProjects.projects.length) {
      setLoading(false);
      return;
    }

    const data = await fetchApi(projectsUrl);
    if (data) setdata(data);
    if (data) setLoading(false);
  }, [loading]);
  return (
    <div className="flex flex-col min-h-screen ">
      <Router>
        <Header mydata={mydata} />

        <Routes>
          <Route
            exact="true"
            path="/professional-portfolio-v2"
            element={<Home mydata={mydata} loading={loading} />}
          />
          <Route
            exact="true"
            path="/professional-portfolio-v2/projects"
            element={<Projects mydata={mydata} loading={loading} />}
          />
          <Route
            exact="true"
            path="/professional-portfolio-v2/contact"
            element={<Contact />}
          />

          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
