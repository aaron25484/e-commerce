import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { Product } from "../utils/API";

interface WishlistContextType {
  wish: Product[];
  addToWish: (product: Product) => void;
  removeFromWish: (productId: string) => void;
}

const initialWishlistContext: WishlistContextType = {
  wish: [],
  addToWish: () => {},
  removeFromWish: () => {},
};

export const WishContext = createContext(initialWishlistContext);

export const WishContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [wish, setWish] = useState<Product[]>(() => {
    const savedWish = localStorage.getItem("wishlist");
    return savedWish ? JSON.parse(savedWish) : [];
  });

  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wish));
  }, [wish]);

  const addToWish = (product: Product) => {
    const addedProduct = wish.findIndex((item) => item.id === product.id);

    if (addedProduct === -1) {
      setWish([...wish, product]);
    }
  };

  const removeFromWish = (productId: string) => {
    const updatedWishlist = wish.filter((product) => product.id !== productId);
    setWish(updatedWishlist);
  };

  return (
    <WishContext.Provider value={{ wish, addToWish, removeFromWish }}>
      {children}
    </WishContext.Provider>
  );
};
