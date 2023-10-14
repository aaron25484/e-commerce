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
                <div>
                    Welcome
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <i>C</i>

            )}
        </nav>
    )
}

export default Navbar