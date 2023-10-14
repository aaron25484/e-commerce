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
                <input {...register("firstName", {required: true})} placeholder="First Name" type="text" />
                <input {...register("lastName")} placeholder="Last Name" type="text" />
                <input {...register("streetAndNumber")} placeholder="Street and house number" type="text" />
                <input {...register("postalCode", {
                    required: true, 
                    minLength: {
                        value: 5, 
                        message: 'Minimum 5 numbers',
                        },
                        })} placeholder="Postal Code" />
                <p>{errors.postalCode && typeof errors.postalCode.message}</p>
                <input {...register("email")} placeholder="Email" type="email" />
                <input {...register("city")} placeholder="City" type="text" />
                <label htmlFor="">Country</label>
                <select name="" id=""></select>
                <input {...register("phone")} placeholder="Phone" type="text" />
                <button type="submit">SUBMIT</button>
                </form>               
        </>
    )
}

export default CheckoutForm