import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Portfolio
        </h1>

        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;