import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";

import "./nav.css";
import logo from "../images/logo.png";

export default function MainNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar className="bg-gradient-to-r from-gray-100 to-gray-900 ">
      <NavbarWrapper>
        <NavbarBrand>
          <img src={logo} className="w-48" alt="logo" />
        </NavbarBrand>
        <NavbarToggler
          color="white"
          onClick={() => setOpenNavbar(!openNavbar)}
          ripple="light"
        />
      </NavbarWrapper>

      <NavbarCollapse open={openNavbar}>
        <Nav rightSide>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 font-bold p-2 px-4 mx-2 hover:text-blue-500 hover:bg-blue-200 rounded-3xl bg-green-600 shadow-lg"
                : " hover:text-blue-500 hover:bg-blue-200 rounded-3xl bg-blue-200 p-2 px-4 shadow-lg mx-2"
            }
          >
            <i className="fas fa-user text-xl  cursor-pointer"></i> Profile
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 font-bold p-2 px-4 mx-2 hover:text-blue-500 hover:bg-blue-200 rounded-3xl bg-green-600 shadow-lg"
                : " hover:text-blue-500 hover:bg-blue-200 rounded-3xl bg-blue-200 p-2 px-4 shadow-lg mx-2"
            }
          >
            <i className="fas fa-laptop-code text-xl  cursor-pointer"></i>{" "}
            Projects
          </NavLink>
          <NavLink
            exact="true"
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 font-bold p-2 px-4 mx-2 hover:text-blue-500 hover:bg-blue-200 rounded-3xl bg-green-600 shadow-lg"
                : " hover:text-blue-500 hover:bg-blue-200 rounded-3xl bg-blue-200 p-2 px-4 shadow-lg mx-2"
            }
          >
            <i className="fas fa-envelope-open-text text-xl  cursor-pointer"></i>{" "}
            Contact
          </NavLink>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}
