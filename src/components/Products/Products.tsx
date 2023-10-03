import { useState, useContext } from "react";
import { ProductContext } from "../../utils/API";
import { useParams } from "react-router-dom";




  export const ProductsPage: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const {products} = useContext(ProductContext)
  const  {id} = useParams()
  

  const product = products.find((product)=> product.id === id)

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  

  return (
    <div className="product">
      {product && (
        <>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h5 className="product-artist">{product.artist}</h5>
            <h1 className="product-title">{product.name}</h1>
            <h5 className="product-price">${product.price}</h5>
            <div className="product-add-to-cart">
              <button onClick={handleIncrease}>Add to Cart</button>
              <p className="product-counter">{counter}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
