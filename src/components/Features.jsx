import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    id: 1,
    title: "Tree Count",
    image: "/assets/treeCount.jpg",
    description: "Upload the satellite image to know the number of trees in one click. 🌟",
    link: "/tree-count"
  },
  {
    id: 2,
    title: "Tree Species",
    image: "/assets/tree_specie_image.jpg",
    description: "Learn about the different plant and tree species to explore nature.",
    link: "/tree-species"
  },
  {
    id: 3,
    title: "Green Cover Estimation",
    image: "/assets/greenCover.jpg",
    description: "Learn the importance and percentage of greenery today!",
    link: "/green-cover"
  },
];

const Features = () => {
  return (
    <section
      id="featured"
      className="bg-white min-w-full py-12 px-14 flex flex-wrap justify-around gap-6"
    >
      {features.map((feature) => (
        <div key={feature.id} className="bg-white shadow-lg rounded-md w-80 p-4">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-60 object-cover rounded-md"
          />
          <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
          <p className="text-lg mt-2">{feature.description}</p>
          <Link to={feature.link}>
            <button
              type="button"
              className="mt-6 px-4 py-2 bg-black text-white text-sm rounded"
            >
              Read More
            </button>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Features;
