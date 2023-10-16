import { Product, fetchProducts } from "../utils/API";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const initialProductContext: ProductContextType = {
  products: [],
  setProducts: () => {},
};

export const ProductContext = createContext(initialProductContext);

export const ProductContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
