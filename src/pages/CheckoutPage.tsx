import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import CheckoutForm from "../components/Form/FormCheckout";

const Checkout: React.FC = () => {

  console.log("rendering checkout");

  const { cart } = useContext(CartContext);

  console.log("Cart data:", cart);

  return (
    <div>
      <div>
        <h2 className=" bg-yellow-500">Checkout</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
          <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
              {product.name} - Quantity: {product.quantity} - Price: ${product.price}
            </li>
          ))}
        </ul>
      </div>  
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
