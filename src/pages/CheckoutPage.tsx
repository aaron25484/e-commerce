import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import CheckoutForm from "../components/Form/FormCheckout";


const Checkout: React.FC = () => {

  console.log("rendering checkout");

  const { cart, totalAmount } = useContext(CartContext);
  
  console.log("Cart data:", cart);

  return (
    <div>
      <h2 className="bg-yellow-500">Checkout</h2>
      <ul className="flex flex-col items-start">
        {cart.map((product) => (
          <li key={product.id} className="flex items-center mb-4">
            <img src={product.image} alt={product.name} className="product-image w-16 h-16" />
            <div className="ml-4 text-left">
              <p className="text-sm">{product.name}</p>
              <p className="text-sm">Quantity: {product.quantity}</p>
              <p className="text-sm">Price: ${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Price: {totalAmount.toFixed(2)}€</p>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
