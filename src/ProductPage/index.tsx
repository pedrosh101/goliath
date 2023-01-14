import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../@types/main";
import { Footer } from "../Footer";

const ProductPage = ({ title, description, image, tones }: IProduct) => {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 min-h-screen bg-clr1 font-avenir p-6">
        <div className="flex flex-col md:pl-40 text-end justify-center">
          <h1 className="text-6xl mb-5">{title}</h1>
          <p className="text-2xl">{description}</p>
          <p className="text-2xl italic mt-4 mb-2">Main Tones: {tones}</p>
          <Link href="/novo-produto">
            <h3 className="text-3xl font-bold text-red-200 mt-2 hover:text-red-300">Buy It</h3>
          </Link>
        </div>
        <div className="md:relative">
          <img
            src={image}
            alt="parfum"
            className="py-28 md:object-left md:pl-28 p-12"
            style={{ objectFit: "contain" }}
          ></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
