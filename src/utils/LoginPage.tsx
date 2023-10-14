import { useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Product } from "./API"


type LoginInputs = {
    username: string,
    password: string,
}


const LoginPage = () => {
    const navigate = useNavigate();

    const { dispatch } = useAuth()

    const { register, handleSubmit, formState: { errors },} = useForm<LoginInputs>()

    const { addToCart } = useContext(CartContext);

    
    const onSubmit: SubmitHandler<LoginInputs> = (data) => {

        if (data.username.length < 8 || !/\d/.test(data.password) || !/[A-Z]/.test(data.password)) {
                console.log('invalid')
        } else {
            dispatch({type: 'LOGIN', username: data.username});
            localStorage.setItem('isLogged', 'true')
            localStorage.setItem('username', data.username)
            localStorage.setItem('password', data.password)
            console.log(localStorage.setItem('username', data.username))
            
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
              const userCart = JSON.parse(savedCart);
              userCart.forEach((product: Product) => {
                addToCart(product);
              });
            }

            navigate("/Checkout");
        }
    }

    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input type="text"  
                {...register('username', { required: true, minLength: 8 })}
                />
                {errors.username && errors.username.type === 'required' && (
          <p className=" bg-yellow-400">Username is required.</p>
        )}
        {errors.username && errors.username.type === 'minLength' && (
          <p className=" bg-yellow-400">Username must be at least 8 characters long.</p>
        )}
                <label htmlFor="password">Password</label>
                <input type="password"
                {...register('password', { required: true, minLength: 8 })}
                />
                {errors.password && errors.password.type === 'required' && (
                  <p className=" bg-yellow-400">Password is required.</p>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                  <p className=" bg-yellow-400">Password must be at least 8 characters long.</p>
                )}

                <button className=" bg-yellow-400" type="submit">Login</button>
            </form>

        </div>

    )


}

export default LoginPage