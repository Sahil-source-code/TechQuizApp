import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { addUser } from "../state/authSlice";
import {useDispatch} from "react-redux"

export const useAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  let dispatch=useDispatch()

  const navigate = useNavigate();

  const loginFormSubmit = (data) => {
    console.log("Login Data:", data);
    dispatch(addUser(data))

    // API call ke baad
    // navigate("/dashboard");
  };

  const registerFormSubmit = (data) => {
    console.log("Register Data:", data);

    // API call ke baad
    // navigate("/login");
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    registerFormSubmit,
    loginFormSubmit,
    navigate,
  };
};