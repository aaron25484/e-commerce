import { useState, useContext } from "react";
import { ProductContext } from "../../utils/API";
import { useParams } from "react-router-dom";

  export const ProductsPage: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const {products} = useContext(ProductContext)
  const  {id} = useParams()
  
  const product = products.find((product)=> product.id === id)

  const [selectedProduct, setSelectedProduct] = useState(product);

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrease = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    } ;
  };

  return (
    <div className="product text-gray-50">
      {product && (
        <>
          <img src={product.image} alt={product.name} className="product-image justify-center" />
          <div className="product-info">
            <h5 className="product-artist">{product.artist}</h5>
            <h1 className="product-title">{product.name}</h1>
            <h5 className="product-price">${product.price}</h5>
            <div className="product-handle flex">
              <div className="product-plus-minus-counter">
                <button onClick={handleDecrease} disabled={counter <= 0}>-</button>
                <p className="product-counter">{counter}</p>
                <button onClick={handleIncrease}>+</button>
              </div>
              <div className="product-add-to-cart">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
