import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartPage: React.FC = () => {
    const { cart } = useContext(CartContext);
  
    // Calculate total quantity and total amount
    let totalQuantity = 0;
    let totalAmount = 0;
  
    for (const item of cart) {
      totalQuantity += item.quantity;
      totalAmount += parseFloat(item.price) * item.quantity;
    }
  
    return (
      <div className="cart-page">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        {cart.map((product) => (
          <div className="flex" key={product.id}>
            <div className="">
              <img
                src={product.image}
                alt={product.name}
                className="product-image w-28 h-28"
              />
            </div>
            <div className="justify-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm">{product.artist}</p>
              <p className="text-sm">${product.price}</p>
              <div className="flex">
                <p>Quantity: {product.quantity}</p>
              </div>
            </div>
          </div>
        ))}
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    );
  };
  
  export default CartPage;
  