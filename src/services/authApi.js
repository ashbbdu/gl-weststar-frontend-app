import { toast } from "react-toastify";
import { setLoading, setToken } from "../redux/slices/authSlice";
import { apiConnector } from "./apiConnector";
import { authEndpoints } from "./apis";

export function signUp(firstName, lastName, email, password , navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", authEndpoints.SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
      });
      if(response.status === 200) {
        toast.success("Signup Successful");
        navigate("/");
      }
    } catch (error) {     
        console.log(error ,"error");
           
      toast.error(error.response.data.msg);
    }
    dispatch(setLoading(false));
  };
}


export function login(email, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", authEndpoints.LOGIN_API, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        toast.success("Login Successful")
        console.log(response.data.token , "login token")
        dispatch(setToken(response.data.token))
      
        // dispatch(setUser({ ...response.data.user, image: userImage }))
         localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/dashboard")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
