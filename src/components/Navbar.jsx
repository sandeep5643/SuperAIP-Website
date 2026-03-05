// src/components/Navbar.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/super_aip1.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const solutions = [
    { name: "Analytics", description: "Understand traffic", icon: ChartPieIcon },
    { name: "Engagement", description: "Talk with customers", icon: CursorArrowRaysIcon },
    { name: "Security", description: "Customer data protection", icon: FingerPrintIcon },
    { name: "Integrations", description: "Connect third-party tools", icon: SquaresPlusIcon },
    { name: "Automation", description: "Build conversion funnels", icon: ArrowPathIcon },
  ];

  const navLinkClass = ({ isActive }) =>
    `text-lg transition ${
      isActive ? "text-blue-500 font-semibold" : "text-white/80 hover:text-white"
    }`;

  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-28" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <Popover className="relative">

            <PopoverButton className="flex items-center gap-1 text-blue-700 hover:text-blue-700" >
              Enterprise
              <ChevronDownIcon className="w-5 h-5" />
            </PopoverButton>

            <PopoverPanel className="absolute left-1/2 -translate-x-1/2 mt-6 w-80 rounded-xl bg-gray-800 shadow-xl">

              <div className="p-4 space-y-3">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer"
                  >
                    <item.icon className="w-6 h-6 text-gray-400" />

                    <div>
                      <p className="text-blue-400 font-semibold">{item.name}</p>
                      {/* <p className="text-sm text-gray-400">{item.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>

            </PopoverPanel>

          </Popover> 
          <NavLink to="/Educationsolutions" className={navLinkClass}>Education</NavLink>
          <NavLink to="/Industries" className={navLinkClass}>Industries</NavLink>
          <NavLink to="/Partners" className={navLinkClass}>Partners</NavLink>

          {/* Dropdown */}
          

          {/* Contact */}
          <NavLink
            to="/contact"
            className="px-5 py-2 bg-blue-700 text-blue-700 rounded-lg hover:bg-blue-600" style={{border:"1px solid #0d6efd"}}
          >
            Contact
          </NavLink>

        </div>

        {/* Mobile Button */}
        <div className="md:hidden text-black">

          {showMenu ? (
            <FaXmark
              onClick={closeMenu}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer"
            />
          )}

        </div>

      </div>

      {/* Mobile Menu */}
      {showMenu && (

        <div className="md:hidden bg-black flex flex-col items-center gap-6 py-10">

          <NavLink to="/" onClick={closeMenu} className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>About</NavLink>
          <NavLink to="/EnterprisesSolutions" onClick={closeMenu} className={navLinkClass}>Enterprise</NavLink>
          <NavLink to="/Educationsolutions" onClick={closeMenu} className={navLinkClass}>Education</NavLink>
          <NavLink to="/Industries" onClick={closeMenu} className={navLinkClass}>Industries</NavLink>
          <NavLink to="/Partners" onClick={closeMenu} className={navLinkClass}>Partners</NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="px-6 py-3 bg-blue-700 text-blue-700  rounded-lg"
          >   
            Contact
          </NavLink>

        </div>

      )}

    </nav>
  );
}