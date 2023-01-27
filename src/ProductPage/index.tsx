import React from "react";
import Link from "next/link";
import { IProduct } from "../@types/main";
import { Footer } from "../Footer";

const ProductPage = ({ title, description, image, tones }: IProduct) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-clr1 font-avenir px-6 pt-10">
        <div className="flex flex-col md:pl-40 text-end justify-center">
          <h1 className="text-5xl md:text-6xl mb-5">{title}</h1>
          <p className="text-2xl">{description}</p>
          <p className="text-1xl md:text-2xl italic mt-4 mb-2">
            Main Tones: {tones}
          </p>
          <Link href="/buy-section">
            <h3 className="text-3xl font-bold text-red-200 mt-2 hover:text-red-300 mb-8">
              Buy It
            </h3>
          </Link>
        </div>
        <div className="md:w-7/12">
          <img
            src={image}
            alt="parfum"
            className="md:object-left md:ml-28 md:12 shadow-lg shadow-gray-700"
          ></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
