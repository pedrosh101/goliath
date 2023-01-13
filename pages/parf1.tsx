import React from "react";
import NavBar from "../src/NavBar";
import ProductPage from "../src/ProductPage";

const Parf1 = () => {
  const data = {
    title: "Oceanic Pearl",
    price: 400,
    description:
      "Donec eleifend ligula et nisi pellentesque pharetra. Fusce vestibulum tortor sit amet lectus dignissim, in sodales augue semper. Sed tincidunt lorem ex, ut semper orci ornare odales. Vivamus nec ex in tortor aliquet dapibus eget in justo. Vivamus sollicitudin sapien eget dictum accumsan. Etiam pellentesque, justo ac tincidunt elementum, velit ex vulputate purus, ac luctus velit sem nec eros. Nam at nisl non lectus egestas cursus mollis sit amet nisl.",
    image: "/img1.jpg",
    tones: "Fennel, Clary Sage, Tuberose and Seaweed Absolute"
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

export default Parf1;
