import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../utils/CartContext";

export interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, totalPrice, totalQuantity, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const isLogged = localStorage.getItem('isLogged') === 'true';

    if (isLogged) {
      navigate("/Checkout");
      onClose();
    } else {
      navigate("/Login");
      onClose();
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
        <div className=" bg-gray-200 w-80 h-screen p-4 absolute top-0 right-0 rounded-l shadow-lg overflow-auto">
            <button
              className="bg-gray-200 text-gray-800 px-2 py-0 rounded"
              onClick={onClose}
              >
              x
              </button>
            <h2 className="text-xl font-semibold text-black mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
              <p>Your shopping cart is empty</p>
            ) : (
              cart.map((product) => (
                <div className="flex mb-5" key={product.id}>
                  <div className="">
                    <img src={product.image} alt={product.name} className="product-image w-22 h-22" />
                  </div>
                  <div className="flex flex-col justify-between ml-5">
                    <div>
                      <h5 className="text-md text-black font-semibold">{product.name}</h5>
                      <p className="text-sm">{product.artist}</p>
                      <p className="text-sm">{product.price}€</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <button
                        className="bg-gray-200 text-gray-800 px-3 py-0 text-sm"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove
                      </button>
                      <div className="flex items-center">
                        <button
                          className="bg-gray-200 text-gray-800 px-3 py-0 text-sm"
                          onClick={() => updateCartItemQuantity(product.id, product.quantity - 1)}
                          disabled={product.quantity <= 1}
                        >
                          -
                        </button>
                        <p className="text-sm px-2">{product.quantity}</p>
                        <button
                          className="bg-gray-200 text-gray-800 px-3 py-0 text-sm"
                          onClick={() => updateCartItemQuantity(product.id, product.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

          {cart.length > 0 && (
            <>
              <p className="text-sm mb-2">Total Items: {totalQuantity}</p>
              <p>Total Price: {totalPrice.toFixed(2)}€</p>
              
              <button
              className="bg-yellow-600 text-black px-3 py-2 rounded mt-4"
              onClick={handleCheckout}>
                Checkout
              </button>
            </>
          )}            
        </div>
      </div>
    );
  };

    export default Cart;
