// src/components/HeroSection.js

import React from "react";

function HeroSection() {
  return (
    <div className="relative w-full h-[80vh]">
      <img
        src="/assets/trail-5726987_1280.jpg"
        alt="Forest"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Smart Forest Management</h1>
        <p className="text-lg md:text-2xl text-center max-w-2xl">
          Preserving nature through technology. Monitor, analyze, and act for a sustainable future.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;

