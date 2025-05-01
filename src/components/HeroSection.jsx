// src/components/HeroSection.js

import React from "react";

function HeroSection() {
  return (
    <div className="relative w-full h-[100vh]">
      <img
        src="/assets/green_tree.jpg"
        alt="Forest"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start text-white px-4 pl-48">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 ">Smart Forest Management</h1>
        <p className="text-lg md:text-2xl text-start max-w-3xl pb-7">
          Preserving nature through technology. 
        </p>
        <a href="#featured">
          <button type= "button" class="bg-white hover:bg-slate-400 text-gray-800 font-semibold py-4 px-5 border border-gray-400 rounded shadow ">
            Get Started
          </button>
        </a>     
        
      </div>
    </div>
  );
}

export default HeroSection;

