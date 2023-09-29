import { useEffect, useState } from 'react';

export interface Product {
  id: string;
  name: string;
  image: string;
  artist: string;
  price: string;
}

export const useCategorizedData = () => {
  const [jsonData, setJsonData] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch('src/assets/db/albums.json')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      })
  }, []);

  const categorizeProducts = (products: Product[]) => {
    const categories = ['New Arrivals', 'Classics', 'Sales', 'Best Sellers', 'Back in Catalogue'];
    const categorizedData: Record<string, Product[]> = {};

    categories.forEach((category) => {
      categorizedData[category] = [];
    });

    products.forEach((product) => {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      categorizedData[randomCategory].push(product);
    });

    console.log(categorizedData)
    return categorizedData;

    
  };

  const categorizedData = categorizeProducts(jsonData);

  return { categorizedData };
};
