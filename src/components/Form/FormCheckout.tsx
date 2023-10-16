import {useForm} from "react-hook-form"

const CheckoutForm: React.FC = () => {
    
    const { register, handleSubmit, reset, formState: {errors} } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
        reset()
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", {required: true})} placeholder="First Name" type="text" className="block mx-auto w-60 mt-3 mb-1"/>
                <input {...register("lastName")} placeholder="Last Name" type="text" className="block w-60 mx-auto mb-1"/>
                <input {...register("streetAndNumber")} placeholder="Street and house number" type="text" className="block w-60 mx-auto mb-1"/>
                <input {...register("postalCode", {
                    required: true, 
                    minLength: {
                        value: 5, 
                        message: 'Minimum 5 numbers',
                        },
                        })} placeholder="Postal Code" className="block w-60 mx-auto mb-1"/>
                <p>{errors.postalCode && typeof errors.postalCode.message}</p>
                <input {...register("email")} placeholder="Email" type="email" className="block w-60 mx-auto mb-1"/>
                <input {...register("city")} placeholder="City" type="text" className="block w-60 mx-auto mb-1"/>
                <input {...register("phone")} placeholder="Phone" type="text" className="block w-60 mx-auto mb-1"/>
                <button className="bg-yellow-600 text-black px-3 py-2 rounded mt-4" type="submit">SUBMIT</button>
                </form>               
        </>
    )
}

export default CheckoutForm