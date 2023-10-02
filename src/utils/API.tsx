
export interface Product {
  id: string;
  name: string;
  image: string;
  artist: string;
  price: string;
  category: string;
}

export const getProducts = async () => {
  const url = 'http://localhost:3000/records';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
