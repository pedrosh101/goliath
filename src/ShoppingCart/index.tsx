import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/index";
import { parfums } from "../../data/parfums";
import { IParfum, IShoppingCartItem } from "../@types/main";

export const ShoppingCart = () => {
  const {
    shoppingCart,
    handleAddToCart,
    handleRemoveFromCart,
    totalCart,
    handleCleanCart,
  }: any = useContext(CartContext);

  return (
    <>
      <section className="bg-clr1 flex flex-col min-h-screen font-avenir p-6 md:p-16">
        <h1 className="text-4xl">Our Parfum Collection</h1>
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {parfums.map((parfum: IParfum) => (
            <li
              className="flex flex-col md:flex-row text-center my-6"
              key={parfum.id}
            >
              <Link href={parfum.route}>
                <img src={parfum.image} className="p-4 md:p-0 md:w-32" />
              </Link>
              <div className="flex flex-col md:pr-14 md:pl-8 justify-center items-center">
                <p className="font-semibold">{parfum.title}</p>
                <div className="flex justify-center items-center">
                  <p>€{parfum.price}&nbsp;</p>
                  <p className="text-sm">({parfum.ml}ml)</p>
                </div>
                <button
                  className="bg-red-200 mt-2 py-1 px-4 w-fit shadow-lg"
                  onClick={() => handleAddToCart(parfum.id)}
                >
                  Add To Cart
                </button>
              </div>
            </li>
          ))}
        </ul>

        <h1 className="text-4xl mt-4">Shopping Cart</h1>
        <ul className="grid my-6 md:w-1/2">
          <div className="grid grid-cols-4 gap-16">
            <p>Product</p>
            <p className="ml-4">Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          {shoppingCart.map((item: IShoppingCartItem) => (
            <li className="mt-3 " key={item.product.id}>
              <div className="grid grid-cols-4 gap-16 items-center">
                <p className="font-semibold">{item.product.title}</p>
                <p className="ml-4">€{item.product.price}</p>
                <div className="gap-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleRemoveFromCart(item.product.id)}
                    >
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
                    <p>{item.quantity}</p>
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
                  </div>
                </div>
                <p>€{item.quantity * item.product.price}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 mt-2">
          <div className="border-2 bg-red-200 border-black px-6 py-1">
            <Link href="/">
              <button className="font-bold">Finish</button>
            </Link>
          </div>

          <div className="flex border-2 border-black px-6 items-center">
            <button
              onClick={handleCleanCart}
              className="font-bold text-red-200 hover:text-red-300 "
            >
              Clean Cart
            </button>
          </div>
          <h2 className="flex items-center md: ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p>(€{totalCart})</p>
          </h2>
        </div>
      </section>
    </>
  );
};
