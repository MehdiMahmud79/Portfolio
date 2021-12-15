import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "@material-tailwind/react/tailwind.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

import { fetchApi } from "./utils/fetchProjects";

function App() {
  const projectsUrl = `https://api.github.com/users/MehdiMahmud79/repos`;
  const [mydata, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const data = await fetchApi(projectsUrl);
    setdata(data);
    setLoading(false);
  }, [loading]);

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header mydata={mydata} />

        <Routes>
          <Route
            exact={true}
            path="/"
            element={<Home mydata={mydata} loading={loading} />}
          />
          <Route
            exact={true}
            path="/projects"
            element={<Projects mydata={mydata} loading={loading} />}
          />
          <Route exact={true} path="/contact" element={<Contact />} />

          {/* <Route render={() => <h1 className="display-2">Wrong page!</h1>} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
