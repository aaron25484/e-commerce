import { useContext } from "react"
import { useAuth } from "../../utils/AuthContext"
import { CartContext } from "../../utils/CartContext"


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
    
    return (
        <nav className="flex flex-row place-content-around w-full">
            <i>M</i>
            <img className="h-12" src="src/assets/img/fuzz-records-low.png" alt="" />
            <i>W</i>
            {state.isLogged ? (
                <div className="text-yellow-400">
                    Welcome
                    <button className="ml-3" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <i></i>

            )}

            <img src="" alt="User" />
            <div>
                <img src="src/assets/img/carros.png" alt="Cart" />
                <span className="bg-red-500 text-white rounded-full w-5 h-5 text-sm text-center absolute -mt-3 -mr-2">
                    {cart.length}
                </span>

            </div>

            
            
        </nav>
    )
}

export default Navbar