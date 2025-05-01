import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white py-4 px-8 flex items-center justify-between z-50">
      <NavLink to="/" className="flex items-center space-x-2 cursor-pointer">
        <img src="/assets/leaf.png" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-lg">S.F.M.</span>
      </NavLink>
      <nav className="flex space-x-6">
        <NavLink
          to="/green-cover"
          className={({ isActive }) =>
            isActive ? 'text-green-400 font-semibold' : 'hover:text-green-400 transition'
          }
        >
          Green Cover
        </NavLink>
        <NavLink
          to="/tree-count"
          className={({ isActive }) =>
            isActive ? 'text-green-400 font-semibold' : 'hover:text-green-400 transition'
          }
        >
          Tree Count
        </NavLink>
        <NavLink
          to="/tree-species"
          className={({ isActive }) =>
            isActive ? 'text-green-400 font-semibold' : 'hover:text-green-400 transition'
          }
        >
          Tree Species
        </NavLink>
        <NavLink
          to="/forest-laws"
          className={({ isActive }) =>
            isActive ? 'text-green-400 font-semibold' : 'hover:text-green-400 transition'
          }
        >
          Forest Laws
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-green-400 font-semibold' : 'hover:text-green-400 transition'
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

