import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white py-4 px-8 flex items-center justify-between z-50">
      <div className="flex items-center space-x-2">
        <img src="/assets/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-lg">S.F.M.</span>
      </div>
      <nav className="flex space-x-6">
        <a href="#green-cover" className="hover:text-green-400 transition">Green Cover</a>
        <a href="#tree-count" className="hover:text-green-400 transition">Tree Count</a>
        <a href="#tree-species" className="hover:text-green-400 transition">Tree Species</a>
        <a href="#forest-laws" className="hover:text-green-400 transition">Forest Laws</a>
        <a href="#contact" className="hover:text-green-400 transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

