
export interface Product {
  quantity: number;
  id: string;
  name: string;
  image: string;
  artist: string;
  price: string;
  category: string;
}
export async function fetchProducts(): Promise<Product[]> {
  const url = 'http://localhost:3000/albums';
  const response = await fetch(url);
  const data = await response.json();
  return data
}