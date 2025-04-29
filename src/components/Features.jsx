import React from "react";

const features = [
    {
      title: "Tree Count",
      image: "/assets/tree_cnt.jpg",
      description: "Upload the satellite image to know the number of trees in one click. 🌟",
    },
    {
      title: "Tree Species",
      image: "/assets/tree_specie_image.jpg",
      description: "Learn about the different plant and tree species to explore nature.",
    },
    {
      title: "Green Cover Estimation",
      image: "/assets/green-cover-agencies.webp",
      description: "Learn the importance and percentage of greenery today!",
    },
  ];
  
  const Features = () => {
    return (
      <section className="bg-white py-12 px-8 flex flex-wrap justify-center gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-md w-72 p-4">
            <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="font-semibold mt-4">{feature.title}</h3>
            <p className="text-sm mt-2">{feature.description}</p>
            <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded">Read More</button>
          </div>
        ))}
      </section>
    );
  };
  
  export default Features;
  