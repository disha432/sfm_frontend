import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-sm">
      <div className="flex flex-col md:flex-row items-start px-8 py-6 bg-green-800 space-y-6 md:space-y-0 md:space-x-12">
        {/* Logo */}
        <div>
          <img src="/assets/sfm_logo.jpg" alt="Logo" className="h-8 mb-2" />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-3 text-yellow-200">Quick Links</h4>
          <ul className="space-y-2 text-base">
            <li className="font-bold text-green-100 hover:text-white cursor-pointer">● Green Cover</li>
            <li className="font-bold text-green-100 hover:text-white cursor-pointer">● Tree Count</li>
            <li className="font-bold text-green-100 hover:text-white cursor-pointer">● Tree Species</li>
            <li className="font-bold text-green-100 hover:text-white cursor-pointer">● Laws and Regulation</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4 text-sm">
        Copyright © 2025 Sustainable Forest Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


