import { setLoading } from "../redux/slices/authSlice";
import { setShippingData } from "../redux/slices/shippingSlice";
import { apiConnector } from "./apiConnector";
import { shipmentEndpoints } from "./apis";

export function getAllShipment(token) {
   
    return async (dispatch) => {
      dispatch(setLoading(true));
      try {
        const response = await apiConnector("GET", shipmentEndpoints.GET_ALL_SHIPMENT_API, null , { Authorization : `Bearer ${token}`} );
        console.log(response);
        dispatch(setShippingData(response?.data?.shipments))
        
      } catch (error) {     
          console.log(error ,"error");
        //   dispatch(setShippingData([]))
      }
      dispatch(setLoading(false));
    };
  }