/* import { useState } from "react";
import { Parfum } from "../src/@types/main"; */
import { Footer } from "../src/Footer";
import NavBar from "../src/NavBar";
import { ShoppingCart } from "../src/ShoppingCart/index";
/* import { parfum } from "../data/parfum"; */

const BuySection = () => {
/*   const [parfums, setParfums] = useState<Parfum>([]);

  const fetchParfum = async () => {
    const res = await fetch("/api/parfum");
    const data = await res.json();
    setParfums(data);
  }; */

  return (
    <>
      <NavBar />
      <ShoppingCart />
      <Footer />
 {/*      <button onClick={fetchParfum} className="bg-slate-300">
        get button
      </button>
      {parfums.map((parfum) => {
        return (
          <div key={parfum.id}>
            <a>
              <h3>{parfum.title}</h3>
            </a>
          </div>
        );
      })}
      <h3>
        {parfum.map((parfum) => {
          return (
            <div key={parfum.id}>
              <a>
                <h3>{parfum.title}</h3>
              </a>
            </div>
          );
        })}
      </h3> */}
    </>
  );
};

export default BuySection;
