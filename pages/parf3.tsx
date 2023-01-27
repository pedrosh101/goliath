import React from "react";
import NavBar from "../src/NavBar";
import ProductPage from "../src/ProductPage";

const Parf2 = () => {
  const data = {
    title: "Nautic",
    description:
      "Phasellus dui tortor, tempus in feugiat sit amet, venenatis vitae nisl. Donec ante leo, maximus et mi sed, dictum aliquam elit. Quisque ac suscipit elit. Nam et urna ullamcorper, semper tellus semper, elementum lorem. Integer rutrum auctor mauris. Nulla nibh odio, fermentum non quam in, tincidunt bibendum mi. In ultricies elit id ligula volutpat finibus. Phasellus tincidunt vitae leo non commodo.",
    image: "/img3.jpg",
    tones: "Ginger, Sage, Lemon Cedrat, Vetiver and Patchouli"
  };

  return (
    <>
      <NavBar />
      <ProductPage
        title={data.title}
        description={data.description}
        image={data.image}
        tones={data.tones}
      />
    </>
  );
};

export default Parf2;
