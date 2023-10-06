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
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {  //Carga lo guardado en carrito
    
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      console.log("Cart data loaded from localStorage:", JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {  //Salva lo guardado en carrito
    
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart data saved to localStorage:", cart);
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const updateCartItemQuantity = (productId: string, newQuantity: number) => {
    // Find the product in the cart
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
