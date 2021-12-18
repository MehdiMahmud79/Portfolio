import React from "react";
import contactUs from "../images/contact-us.jpg";
import ContactCard from "../components/ContactCard";
const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-900 to-gray-100 ">
      <div className="container  mx-auto bg-gray-200 rounded-xl ">
        <div className="header">
          {/* <!-- this section is about me --> */}
          <p className="md:text-3xl ">
            <i className="far fa-comments text-gray-700 px-2"></i>
            Let's Talk
          </p>
          <hr className="w-48 m-auto" />
        </div>{" "}
      </div>{" "}
      <div className="md:flex m-2 flex-wrap gap-2 ">
        <ContactCard
          title="Email"
          icon={"fas fa-at text-3xl p-2 text-green-600 "}
          content={"mehdi.mahmud@hotmail.com"}
          hrefTo={"mailto:mehdi.mahmud@hotmail.com "}
        />
        <ContactCard
          title="Github"
          icon={"fab fa-github  text-3xl p-2 text-green-600 "}
          content={"mehdimahmud79"}
          hrefTo={"https://github.com/mehdimahmud79"}
        />
        <ContactCard
          title="Linkedin"
          icon={"fab fa-linkedin  text-3xl p-2 text-green-600 "}
          content={"mehdi-mahmud"}
          hrefTo={"https://www.linkedin.com/in/mehdi-mahmud/"}
        />
        <ContactCard
          title="ResearchGate"
          icon={"fab fa-researchgate  text-3xl p-2 text-green-600 "}
          content={"mehdi-mahmud"}
          hrefTo={"https://www.researchgate.net/profile/Mehdi-Mahmud"}
        />
        <ContactCard
          title="Mobile"
          icon={"fas fa-phone-alt  text-3xl p-2 text-green-600 "}
          content={+447511118806}
          hrefTo={""}
        />
      </div>
    </div>
  );
};

export default Contact;
