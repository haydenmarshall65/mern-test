import { NavLink } from "react-router-dom";
import IhsLogo from "../assets/ihs_logo.webp"
import { useState } from "react";
import { ChevronDown, ChevronUp, Menu } from "lucide-react"

export default function Navbar() {
  const [openAboutDropdown, setOpenAboutDropdown] = useState(false);
  const [openResearchDropdown, setOpenResearchDropdown] = useState(false);
  const [openLearningDropdown, setOpenLearningDropdown] = useState(false);
  const [openPartnershipsDropdown, setOpenPartnershipsDropdown] = useState(false);
  const [openIhsMediaDropdown, setOpenIhsMediaDropdown] = useState(false);

  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  function updateDropdowns(dropdownName) {
    switch (dropdownName) {
      case "about":
        setOpenAboutDropdown(!openAboutDropdown);
        break;
      case "research":
        setOpenResearchDropdown(!openResearchDropdown);
        break;
      case "learning":
        setOpenLearningDropdown(!openLearningDropdown);
        break;
      case "partnerships":
        setOpenPartnershipsDropdown(!openPartnershipsDropdown);
        break;
      case "ihsMedia":
        setOpenIhsMediaDropdown(!openIhsMediaDropdown);
        break;
      default:
        throw new Error('dropdownName given is not an existing option. Please pick between "about", "research", "learning", "partnerships", or "ihsMedia"')
        break;
    }
  }
  return (
    <div>
      <nav className="flex justify-between items-end mb-6 bg-inherit p-4">
        <NavLink to="/" className="focus:border focus:border-[#003A63] transition-[border-color] duration-[0.25s]">
          <img alt="IHS Company Logo" src={IhsLogo} height="150" className="inline"/>
        </NavLink>
        <button className="md:hidden block p-4 rounded-full" onClick={() => setOpenMobileDropdown(!openMobileDropdown)}>
          <Menu size={44}/>
        </button>
        <ul className={`${openMobileDropdown ? 'flex' : 'hidden'} md:flex md:flex-row flex-col justify-center items-center space-x-4 mr-8`}>
          <li className="relative p-4 mb-[2px] hover:mb-0 hover:border-b-2 border-b-[#003A63]" onMouseEnter={() => updateDropdowns("about")} onMouseLeave={() => updateDropdowns("about")}>
            <span className="flex justify-about"><p className="font-semibold">About</p>{openAboutDropdown ? <ChevronUp/> : <ChevronDown/>}</span>
              <ul className={`absolute top-[58px] bg-white border divide-y w-[150px] max-w-[200px] shadow-xl rounded font-semibold ${openAboutDropdown ? 'block' : 'hidden'}`}>
                <li className="p-4">Mission & Vision</li>
                <li className="p-4">Staff</li>
              </ul>
          </li>
          <li className="relative p-4 mb-[2px] hover:mb-0 hover:border-b-2 border-b-[#003A63]" onMouseEnter={() => updateDropdowns("research")} onMouseLeave={() => updateDropdowns("research")}>
            <span className="flex justify-about"><p className="font-semibold">Research</p>{openResearchDropdown ? <ChevronUp/> : <ChevronDown/>}</span>
              <ul className={`absolute top-[58px] bg-white border divide-y w-[150px] max-w-[200px] shadow-xl rounded font-semibold ${openResearchDropdown ? 'block' : 'hidden'}`}>
                <li className="p-4">Reseach Papers</li>
              </ul>
          </li>
          <li className="relative p-4 mb-[2px] hover:mb-0 hover:border-b-2 border-b-[#003A63]" onMouseEnter={() => updateDropdowns("learning")} onMouseLeave={() => updateDropdowns("learning")}>
            <span className="flex justify-about"><p className="font-semibold">Learning Academy</p>{openLearningDropdown ? <ChevronUp/> : <ChevronDown/>}</span>
              <ul className={`absolute top-[58px] bg-white border divide-y w-[150px] max-w-[200px] shadow-xl rounded font-semibold ${openLearningDropdown ? 'block' : 'hidden'}`}>
                <li className="p-4">CI Protection for Executive Leaders</li>
                <li className="p-4">Crisis &amp; Emergency Management (SimTable)</li>
                <li className="p-4">Emerging Technology</li>
                <li className="p-4">Incident Command System for Water Operators</li>
                <li className="p-4">Crisis and Emergency Management Tools</li>
              </ul>
          </li>
          <li className="relative p-4 mb-[2px] hover:mb-0 hover:border-b-2 border-b-[#003A63]" onMouseEnter={() => updateDropdowns("partnerships")} onMouseLeave={() => updateDropdowns("partnerships")}>
            <span className="flex justify-about"><p className="font-semibold">Partnerships</p>{openPartnershipsDropdown ? <ChevronUp/> : <ChevronDown/>}</span>
              <ul className={`absolute top-[58px] bg-white border divide-y w-[150px] max-w-[200px] shadow-xl rounded font-semibold ${openPartnershipsDropdown ? 'block' : 'hidden'}`}>
                <li className="p-4">Partnership for Healthcare &amp; Emergency Management</li>
                <li className="p-4">CICA (Center for Intelligence and Crime Analysis)</li>
                <li className="p-4">Energy Infrastructure Security and Resilience</li>
                <li className="p-4">Transportation Critcal Infrastructure Exchange</li>
                <li className="p-4">Water/ WasteWater Critical Infrastructure Exchange</li>
              </ul>
          </li>
          <li className="relative p-4 mb-[2px] hover:mb-0 hover:border-b-2 border-b-[#003A63]" onMouseEnter={() => updateDropdowns("ihsMedia")} onMouseLeave={() => updateDropdowns("ihsMedia")}>
            <span className="flex justify-about"><p className="font-semibold">IHS Media</p>{openIhsMediaDropdown ? <ChevronUp/> : <ChevronDown/>}</span>
              <ul className={`absolute top-[58px] bg-white border divide-y w-[150px] max-w-[200px] shadow-xl rounded font-semibold ${openIhsMediaDropdown ? 'block' : 'hidden'}`}>
              <li className="p-4">Podcast</li>
              <li className="p-4">Newsletter</li>
              <li className="p-4">IHS Journal</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}