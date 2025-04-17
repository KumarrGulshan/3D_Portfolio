import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="w-full bg-transparent p-4">
      <nav className="flex flex-row sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-lg font-medium max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-black' : 'text-white'}>
          <p className="hover:text-violet-700 px-3 py-1 bg-red-700 border border-red-800 rounded-xl w-fit">
            Home
          </p>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black' : 'text-white'}>
          <p className="hover:text-violet-700 px-3 py-1 bg-fuchsia-900 border border-fuchsia-900 rounded-xl w-fit">
            About
          </p>
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-black' : 'text-white'}>
          <p className="hover:text-violet-700 px-3 py-1 bg-indigo-600 border border-indigo-600 rounded-xl w-fit">
            Projects
          </p>
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-black' : 'text-white'}>
          <p className="hover:text-violet-700 px-3 py-1 bg-emerald-600 border border-emerald-600 rounded-xl w-fit">
            Contact
          </p>
        </NavLink>

      </nav>
    </header>
  );
}

export default Navbar;

