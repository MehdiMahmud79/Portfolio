import React from "react";
import Navbar from "./Navbar";
import Ticker from "react-ticker";

const Header = () => {
  return (
    <div className="bg-green-900">
      <Navbar />
      <Ticker>
        {({ index }) => (
          <>
            <h1 className="bg-green-400 p-2">
              {" "}
              <i className="fas fa-user 0 text-yellow-900 p-2"> </i>This is the
              Headline of element 5!
            </h1>
          </>
        )}
      </Ticker>
    </div>
  );
};

export default Header;
