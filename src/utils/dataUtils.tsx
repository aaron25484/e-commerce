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
    fetch('src/assets/albums.json')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => {
        console.error('Error loading JSON data:', error);
      });
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

    return categorizedData;
  };

  const categorizedData = categorizeProducts(jsonData);

  return { categorizedData };
};
