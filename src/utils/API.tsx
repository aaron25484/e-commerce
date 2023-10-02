
export interface Product {
  id: string;
  name: string;
  image: string;
  artist: string;
  price: string;
  category: string;
}

export const getProducts = async () => {
  const url = 'src/assets/db/albums.json';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
