import { toast } from "react-toastify";
import { setLoading, setToken, setUser } from "../redux/slices/authSlice";
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
           
      toast.error(error.response.data.msg);
    }
    dispatch(setLoading(false));
  };
}


export function login(email, password, navigate) {
    return async (dispatch) => {
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", authEndpoints.LOGIN_API, {
          email,
          password,
        })
  
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        dispatch(setUser({ ...response.data.user}))
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/dashboard")
      } catch (error) {
        toast.error(error.response.data.message)
      }
      dispatch(setLoading(false))
    
    }
  }


  export function logout(navigate) {
    return (dispatch) => {
      dispatch(setLoading(true))
      dispatch(setToken(null))
      dispatch(setUser(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
      dispatch(setLoading(false))
    }
  }
  
