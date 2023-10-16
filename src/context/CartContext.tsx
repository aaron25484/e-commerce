import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { Product } from "../utils/API";

interface CartContextType {
  cart: Product[];
  totalPrice: number;
  totalQuantity: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, newQuantity: number) => void;
}

const initialCartContext: CartContextType = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
};

export const CartContext = createContext(initialCartContext);

export const CartContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const totalPrice = cart.reduce((total, product) => {
    return total + parseFloat(product.price) * product.quantity;
  }, 0);

  const totalQuantity = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    const addedProduct = cart.findIndex((item) => item.id === product.id);

    if (addedProduct !== -1) {
      const updatedCart = [...cart];
      updatedCart[addedProduct].quantity += product.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const updateCartItemQuantity = (productId: string, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, totalPrice, totalQuantity, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};