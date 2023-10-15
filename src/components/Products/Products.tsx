import { useState, useContext } from "react";
import { ProductContext } from "../../utils/API";
import { useParams } from "react-router-dom";
import Cart from "../Cart/Cart";

import { CartContext } from "../../utils/CartContext";


  export const ProductsPage: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const {products} = useContext(ProductContext)
  const  {id} = useParams()
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { addToCart } = useContext(CartContext);
  
  const product = products.find((product)=> product.id === id)

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrease = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    } ;
  };

  const handleAddToCart = () => {
    if (product && counter > 0) {
      addToCart({...product, quantity: counter})
      setIsCartOpen(true); 
    }
  };

  const handleCloseCart = () => {
    setIsCartOpen(false); 
  };

  return (
    <div className="product text-gray-50">
      {product && (
        <>
          <img src={product.image} alt={product.name} className="product-image inline mt-6" />
          <div className="product-info mt-4 text-left">
            <h5 className="product-artist">{product.artist}</h5>
            <h1 className="product-title">{product.name}</h1>
            <h5 className="product-price">{product.price}€</h5>
            <div className="product-handle flex">
              <div className="product-plus-minus-counter flex  space-x-5 me-auto items-center">
                <button onClick={handleDecrease} disabled={counter <= 0}>-</button>
                <p className="product-counter text-white">{counter}</p>
                <button onClick={handleIncrease}>+</button>
              </div>
              <div className="product-add-to-cart flex justify-items-center bg-yellow-500 text-black p-10 mb-2 py-2 cursor-pointer">
                <button onClick={handleAddToCart} disabled={counter <= 0}>+ Add to Cart</button>
              </div>
            </div>
          </div>
        </>
      )}
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
    </div>
  );
};
