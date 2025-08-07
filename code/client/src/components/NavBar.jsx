import { NavLink } from "react-router-dom";
import IhsLogo from "../assets/ihs_logo.webp"
import { useState } from "react";

export default function Navbar() {
  const [openDropdowns, setOpenDropdowns] = useState({
    about: false,
    research: false,
    learningAcademy: false,
    partnerships: false,
    ihsMedia: false,
  })
  return (
    <div>
      <nav className="flex justify-between items-center mb-6 bg-inherit p-4">
        <NavLink to="/">
          <img alt="IHS Company Logo" className="inline" src={IhsLogo} height="150"></img>
        </NavLink>
        <ul className="flex space-x-4">
          <li className="relative p-4 border-1 border-red-500 rounded-lg">
            About
          </li>
          <li className="relative p-4 border-1 border-red-500 rounded-lg">
            Research
          </li>
          <li className="relative p-4 border-1 border-red-500 rounded-lg">
            Learning Academy
          </li>
          <li className="relative p-4 border-1 border-red-500 rounded-lg">
            Partnerships
          </li>
          <li className="relative p-4 border-1 border-red-500 rounded-lg">
            IHS Media
          </li>
        </ul>
      </nav>
    </div>
  );
}