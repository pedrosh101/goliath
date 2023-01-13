import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/index";
import { IParfum } from "../@types/main";
import NavBar from "../NavBar";
import { Footer } from '../Footer/index';

export const ShoppingCart = () => {
  const {
    parfums,
    shoppingCart,
    handleAddToCart,
    handleRemoveFromCart,
    totalCart,
    handleCleanCart,
  }: any = useContext(CartContext);

  return (
    <>
      <NavBar />
      <section className="bg-clr1 flex flex-col min-h-screen font-avenir p-16">
        <h1 className="text-4xl">Our Parfum Collection</h1>
        <ul className="flex">
          {parfums.map((parfum: IParfum) => (
            <li className="flex flex-col w-40 text-center pb-8">
              <Link href={parfum.route}>
                <img src={parfum.image} className="scale-75" />
                <p>{parfum.title}</p>
              </Link>
              <p>€{parfum.price}</p>
              <button
                className="bg-slate-200 mx-2"
                onClick={() => handleAddToCart(parfum.id)}
              >
                Add To Cart
              </button>
            </li>
          ))}
        </ul>
        <h1 className="text-4xl">Shopping Cart</h1>
        <ul>
          {shoppingCart.map((item: any) => (
            <li className="flex justify-center bg-fuchsia-200 m-3 gap-4 p-3">
              <p>Perfume: {item.product.title}</p>
              <p>Price: {item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.product.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
              <button onClick={() => handleAddToCart(item.product.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
              <p>Total: {item.quantity * item.product.price}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col">
          <h2 className="text-2xl flex">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>{" "}
            ({totalCart})
          </h2>
          <button onClick={handleCleanCart} className="w-28">
            Clean Cart
          </button>
        </div>
        <Link
          className="text-3xl font-bold text-red-200 mt-2 hover:text-red-300 max-w-0"
          href="/"
        >
          <h1>finish</h1>
        </Link>
      </section>
      <Footer />
    </>
  );
};