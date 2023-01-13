import React from "react";
import NavBar from "../src/NavBar";
import ProductPage from "../src/ProductPage";

const Parf2 = () => {
  const data = {
    title: "Montmartre's Pride",
    price: 420,
    description:
      "Vivamus sollicitudin sapien eget dictum accumsan. Etiam pellentesque, justo ac tincidunt elementum, velit ex vulputate purus, ac luctus velit sem nec eros. Nam at nisl non lectus egestas cursus mollis sit amet nisl. In tortor aliquet dapibus eget in justo.",
    image: "/img2.jpg",
    tones: "Bergamot, Tea Notes, Saldalwood, Hedione and Cardamom"
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
