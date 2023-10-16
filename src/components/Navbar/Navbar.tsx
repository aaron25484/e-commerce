import { useContext, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { CartContext } from "../../context/CartContext"
import Cart from "../Cart/Cart"
import { Link } from "react-router-dom"

const Navbar = () => {
    const {state, dispatch} = useAuth()

    const {cart, removeFromCart} = useContext(CartContext)

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
        localStorage.removeItem('isLogged')
        localStorage.removeItem('username')
        localStorage.removeItem('password')

        cart.forEach((product) => {
            removeFromCart(product.id);
        });
    }
    const totalItemsCart = cart.reduce((total, product) => total + product.quantity, 0);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    return (
    <>   
        <nav className="flex flex-row place-content-around items-center w-full">
            <Link to="/">
                <img className="h-12" src="src/assets/img/fuzz-records-low.png" alt="" />
            </Link>
                {state.isLogged ? (
                    <div className="text-yellow-400 text-sm flex">
                        <p className="pl-8">Welcome</p>
                        <img className="pl-14" src="src/assets/img/logout.png" alt="lock" onClick={handleLogout}/>
                    </div>
                ) : (
                    <i></i>
            
                )}
                <div onClick={() => setIsCartOpen(true)}>
                    <img src="src/assets/img/carros.png" alt="Cart" />
                    <span className="bg-red-500 text-white rounded-full w-5 h-5 text-sm text-center absolute -mt-3 ml-3">
                        {totalItemsCart}
                    </span>
                </div>  
            <Cart isOpen={isCartOpen} onClose={handleCloseCart}/>       
        </nav>
    </>     
    )
}

export default Navbar