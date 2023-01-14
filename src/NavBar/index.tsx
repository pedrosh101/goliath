import Link from "next/link";
import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ReduceReturnType } from "../@types/main";

const NavBar = () => {
  const { totalCart }: ReduceReturnType = useContext(CartContext);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="grid grid-cols-3 py-1 bg-black text-white gap-3">
        <Link className="justify-self-center col-start-2 py-2" href="/">
          <img src="./goliath-logo.png" width={100}></img>
        </Link>
        <div className="flex justify-self-end items-center pr-4">
          <div onClick={handleClick}>{click ? <p>X</p> : <p>Abrir</p>}</div>
          {/* <div className="flex items-center relative">
            {click ? (
              <div className="flex bg-slate-600 absolute w-56 h-40 -right-full top-8">
                NEno
              </div>
            ) : (
              <div className="flex bg-slate-400 absolute w-56 h-40 r-0 top-8">
                NOno
              </div>
            )}
          </div> */}
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
          </svg>
          <p className="">€{totalCart}</p>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
