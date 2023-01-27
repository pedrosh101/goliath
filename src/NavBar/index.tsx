import Link from "next/link";
import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { IShoppingCartItem } from "../@types/main";

const NavBar = () => {
  const { totalCart, shoppingCart }: any = useContext(CartContext);
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="grid grid-cols-3 py-1 bg-black text-white gap-3">
        <Link className="justify-self-center col-start-2 py-2" href="/">
          <img src="./goliath-logo.png" width={100}></img>
        </Link>
        <div className="flex justify-self-end items-center">
          <button
            onClick={handleClick}
            disabled={totalCart == 0}
            className="pr-4 cursor-pointer"
          >
            {click ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 relative"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {totalCart !== 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-1 right-1 bg-red-500 p-1 rounded-md"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </div>
            ) : (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <div className="flex items-center relative">
            {click ? (
              ""
            ) : (
              <div className="flex flex-col bg-red-200 text-black absolute -right-full top-8 p-4 z-20">
                <ul>
                  {shoppingCart.map((item: IShoppingCartItem) => (
                    <li
                      className="flex flex-col p-2 gap-2"
                      key={item.product.id}
                    >
                      <div className="flex p-2 gap-2 w-56">
                        <img
                          src={item.product.image}
                          width={50}
                          className="mr-2"
                        ></img>
                        <div>
                          <p className="font-medium">{item.product.title}</p>
                          <p>
                            {item.quantity} x €{item.product.price}
                          </p>
                        </div>
                      </div>
                      <div className="h-0.5 bg-neutral-500 w-full"></div>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-3 font-medium">
                  <p>Total:</p>
                  <p>€{totalCart}</p>
                </div>

                <Link href="/" className="w-fit">
                  <div className="border-2 bg-red-200 border-black mt-3 px-6 py-1">
                    <button className="font-bold">Finish</button>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
