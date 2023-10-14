import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { Product } from "./API";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, newQuantity: number) => void;

}

const initialCartContext: CartContextType = {
  cart: [],
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

  useEffect(() => {  //Salva lo guardado en carrito
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
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
