import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import CheckoutForm from "../components/Form/FormCheckout";

const Checkout: React.FC = () => {
  const { cart, totalPrice, totalQuantity } = useContext(CartContext);

  return (
    <div>
      <h2 className="bg-yellow-500">Checkout</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id} className="flex items-center text left">
            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
            {product.name} - Quantity: {product.quantity} - Price: ${product.price} each
          </li>
        ))}
      </ul>

      <div>
        <p>Total Items: {totalQuantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>

      <CheckoutForm />
    </div>
  );
};

export default Checkout;
