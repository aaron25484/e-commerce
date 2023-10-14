import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../utils/CartContext";

export interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
    const navigate = useNavigate()  


    let totalQuantity = 0;
    let totalAmount = 0;

    for (const item of cart) {
        totalQuantity += item.quantity;
        totalAmount += parseFloat(item.price) * item.quantity;
      }

      const handleCheckout = () => {
        
        const isLogged = localStorage.getItem('isLogged') === 'true';
        
        if (isLogged) {
          navigate("/Checkout")
          onClose()
        } else {
          navigate("/Login")
          onClose()
        }

      }

    return (
        <div
        className={`fixed inset-0 z-50 transition-all duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        >
        <div
            className="fixed inset-0 bg-black opacity-80"
            onClick={onClose}
        ></div>
        <div className="bg-white w-80 h-screen p-4 absolute top-0 right-0 rounded-l shadow-lg overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Cart</h2>
            {cart.map((product) => (
            <div className="flex" key={product.id}>
                <div className="">
                    <img src={product.image} alt={product.name} className="product-image w-28 h-28" />
                </div>
                <div className="justify-center">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm">{product.artist}</p>
                    <p className="text-sm">${product.price}</p>
                    <p className="text-sm">Quantity: {product.quantity}</p>
                    <button
                        className="bg-gray-200 text-gray-800 px-3 py-2 rounded"
                        onClick={() => removeFromCart(product.id)}>Remove
                    </button>
                    <div className="flex items-center ml-2">
                  <button
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-l"
                    onClick={() => updateCartItemQuantity(product.id, product.quantity - 1)}
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <p className="px-2">{product.quantity}</p>
                  <button
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-r"
                    onClick={() => updateCartItemQuantity(product.id, product.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                </div>
            </div>
            ))}

            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            <button
            className="bg-gray-200 text-gray-800 px-3 py-2 rounded"
            onClick={onClose}
            >
            x
            </button>
            
            <button
            className="bg-yellow-600 text-black px-3 py-2 rounded"
            onClick={handleCheckout}>
              Checkout
            </button>
            
        </div>
        </div>
    );
    };

    export default Cart;
