import React from "react";

const About = () => {
  return (
    <section className="bg-green-950 text-white pt-28 pb-28 px-8 flex flex-col lg:flex-row items-start justify-between">
      <div className="max-w-xl pl-20">
        <h2 className="text-7xl font-bold mb-6 text-grey-400">Who Are We?</h2>
        <p className="text-xl leading-relaxed text-green-100 font-medium text-justify">
          We are a team passionate about leveraging technology to enhance forest management and conservation.
          By integrating geospatial analysis, data-driven insights, and automation, we aim to simplify tree enumeration,
          species identification, and legal compliance.
          <br /><br />
          Our goal is to provide smart and accessible tools that help researchers, conservationists, and policymakers
          make informed decisions for a sustainable future.
        </p>
      </div>

      <div className="relative w-6/12 h-96 pt-48 lg:mt-0 group overflow-hidden rounded shadow-lg ">
        <img
          src="/assets/abt_image1.jpg"
          alt="Forest 1"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        />
        <img
          src="/assets/abt_image2.jpg"
          alt="Forest 2"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />
      </div>
    </section>
  );
};

export default About;

  