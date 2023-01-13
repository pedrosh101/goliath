import React from "react";
import NavBar from "../src/NavBar";
import ProductPage from "../src/ProductPage";

const Parf4 = () => {
  const data = {
    title: "Hidden Meadow",
    price: 700,
    description:
      "Proin aliquam, est non pellentesque sodales, felis nibh molestie tortor, ac vehicula elit sapien eget lorem. Morbi vel lacinia mauris. Maecenas scelerisque, ligula sed gravida maximus, magna enim sollicitudin eros, in molestie turpis erat nec odio. Nulla sit amet consectetur enim. Donec malesuada, elit eget varius lobortis, nibh urna venenatis dui, ut varius odio ante id dui. Proin porta facilisis risus, vitae aliquam enim scelerisque eu. Proin nec nisl eget nibh aliquam venenatis. Maecenas a rhoncus orci, eget ornare est.",
    image: "/img4.jpg",
    tones: "Yuzu, Tobacco Flower, Sage, Cedarwood, Musk and White Fir"
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

export default Parf4;
