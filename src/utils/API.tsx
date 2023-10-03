import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

export interface Product {
  id: string;
  name: string;
  image: string;
  artist: string;
  price: string;
  category: string;
}

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const initialProductContext: ProductContextType = {
  products: [],
  setProducts: () => {},
};

export const ProductContext = createContext(initialProductContext)

export const ProductContextProvider:FC<PropsWithChildren> = ({children}) => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const url = 'http://localhost:3000/albums';
    const fetchProductsData = async () =>{
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data)
    }
    fetchProductsData()
  }, [])

  return (
    <ProductContext.Provider value={{products, setProducts}}>
      {children}
    </ProductContext.Provider>
  )
}