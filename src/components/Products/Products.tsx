import { FC, useState } from "react";

export type ProductsProps = {
  album: {
    id: string;
    name: string;
    image: string;
    artist: string;
    price: string;
  };
};

export const Products: FC<ProductsProps> = ({ album }) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="product">
      <img src={album.image} alt={album.name} className="product-image" />
      <div className="product-info">
        <h5 className="product-artist">{album.artist}</h5>
        <h1 className="product-title">{album.name}</h1>
        <h5 className="product-price">${album.price}</h5>
        <div className="product-add-to-cart">
          <button onClick={handleIncrease}>Add to Cart</button>
          <p className="product-counter">{counter}</p>
        </div>
      </div>
    </div>
  );
};
