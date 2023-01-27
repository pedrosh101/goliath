import React from "react";
import NavBar from "../src/NavBar";
import ProductPage from "../src/ProductPage";

const Parf5 = () => {
  const data = {
    title: "Fresco",
    description:
      "Morbi vel condimentum sem, non lacinia justo. Sed pulvinar ut nisi in congue. Cras quam odio, laoreet eget ornare quis, tempor eleifend purus. Etiam mollis purus purus. Ut euismod est urna, id rhoncus magna ultricies non. Nunc lorem leo, suscipit in quam porta, vehicula pellentesque nibh. Nam magna nunc, dapibus id commodo in, malesuada ut lacus. Sed malesuada pharetra facilisis. Cras eros tellus, aliquam nec tortor ac, venenatis dictum enim.",
    image: "/img5.jpg",
    tones: "Bergamot, Jasmine, Oakmoss, Amber and White Fir"
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

export default Parf5;
