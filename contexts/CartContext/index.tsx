import { createContext, useState } from "react";
import { parfums } from '../../data/parfums';
import {
  IShoppingCartItem,
  CartProviderType,
} from "../../src/@types/main";



export const CartContext = createContext({});

export const CartProvider = ({ children }: CartProviderType) => {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);

  const handleAddToCart = (id: number) => {
    const parfum = parfums.find((parfum) => parfum.id === id);
    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    );

    // if parfum is in the cart already
    if (alreadyInShoppingCart) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
        if (item.product.id === id)
          ({
            ...item,
            quantity: item.quantity++,
          });
        return item;
      });
      setShoppingCart(newShoppingCart);
      return;
    }

    // if parfum isn't in the cart
    const cartItem: IShoppingCartItem = {
      product: parfum!,
      quantity: 1,
    };
    const newShoppingCart: IShoppingCartItem[] = [...shoppingCart, cartItem];
    setShoppingCart(newShoppingCart);
  };

  const handleRemoveFromCart = (id: number) => {
    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    );

    if (alreadyInShoppingCart!.quantity > 1) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
        if (item.product.id === id)
          ({
            ...item,
            quantity: item.quantity--,
          });
        return item;
      });
      setShoppingCart(newShoppingCart);
      return;
    }

    // if there's only one item with the id in the cart
    const newShoppingCart: IShoppingCartItem[] = shoppingCart.filter(
      (item) => item.product.id !== id
    );
    setShoppingCart(newShoppingCart);
  };

  const totalCart = shoppingCart.reduce((total, current) => {
    return total + current.product.price * current.quantity;
  }, 0);

  const handleCleanCart = () => {
    setShoppingCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        handleAddToCart,
        handleRemoveFromCart,
        totalCart,
        handleCleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
