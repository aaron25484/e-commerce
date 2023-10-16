import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "../components/Form/FormCheckout";

const Checkout: React.FC = () => {
  const { cart, totalPrice, totalQuantity } = useContext(CartContext);
  
  return (
    <div>
     
      <h2 className="text-yellow-500 font-bold text-2xl my-5 font-slackey">Checkout</h2>
      <ul>
        {cart.map((product) => (
          <>
            <li key={product.id} className="flex items-center mb-1 text-white">
              <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
              {product.name} - Quantity: {product.quantity} - {product.price} € each
            </li>
            <hr />
          </>
        ))}
      </ul>
      <div>
        <p className="text-yellow-200" >Total Items: {totalQuantity}</p>
        <p className="text-yellow-500">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;