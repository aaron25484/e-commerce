import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginInputs = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const { dispatch } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    if (
      data.username.length < 8 ||
      !/\d/.test(data.password) ||
      !/[A-Z]/.test(data.password)
    ) {
    } else {
      dispatch({ type: "LOGIN", username: data.username });
      localStorage.setItem("isLogged", "true");
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);

      navigate("/Checkout");
    }
  };

  return (
    <div className=" text-xl text-yellow-500">
      <img
        className=" h-45 w-70 mb-24 mt-10"
        src="/src/assets/img/fuzz-records-low.png"
        alt="fuzz records logo"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username" className=" font-slackey text-sm">
          USERNAME
        </label>
        <input
          type="text"
          className="block mx-auto mt-3 mb-6"
          {...register("username", { required: true, minLength: 8 })}
        />
        {errors.username && errors.username.type === "required" && (
          <p className="text-yellow-400 text-sm -mt-3 mb-3">
            Username is required
          </p>
        )}
        {errors.username && errors.username.type === "minLength" && (
          <p className="text-yellow-400 text-sm -mt-3 mb-3">
            Username must be at least 8 characters long
          </p>
        )}
        <label htmlFor="password" className=" font-slackey text-sm">
          PASSWORD
        </label>
        <input
          className="block mx-auto mt-3 mb-6"
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p className="text-yellow-400 text-sm -mt-3 mb-3">
            Password is required.
          </p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p className="text-yellow-400 text-sm -mt-3 mb-3">
            Password must be at least 8 characters long
          </p>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <p className="text-yellow-400 text-sm -mt-3 mb-3">
            Password must contain at least one digit and one uppercase letter
          </p>
        )}
        <button
          className=" bg-yellow-500 mb-10 px-11 py-2 mt-3 text-black"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
