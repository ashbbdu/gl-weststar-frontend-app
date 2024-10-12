import { toast } from "react-toastify";
import { setLoading } from "../redux/slices/authSlice";
import { setShippingData } from "../redux/slices/shippingSlice";
import { apiConnector } from "./apiConnector";
import { shipmentEndpoints } from "./apis";

export function getAllShipment(token) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "GET",
        shipmentEndpoints.GET_ALL_SHIPMENT_API,
        null,
        { Authorization: `Bearer ${token}` }
      );
      dispatch(setShippingData(response?.data?.shipments));
    } catch (error) {
      console.log(error, "error");
    }
    dispatch(setLoading(false));
  };
}

export function creteShipment(values, token , onClose) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        shipmentEndpoints.CREATE_NEW_SHIPMENT_API,
        values,
        { Authorization: `Bearer ${token}` }
      );
      if (response.status === 201) {
        toast.success(response.data.message)
        dispatch(getAllShipment(token));
        onClose()
      }
    } catch (error) {
    toast.error(error.response.data.message)
      console.log(error, "error");
    }
    dispatch(setLoading(false));
  };
}

export function updateShipment(values, id, token , onClose) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "PUT",
        `${shipmentEndpoints.UPDATE_SHIPMENT_API}/${id}`,
        values,
        { Authorization: `Bearer ${token}` }
      );
      toast.success(response.data.message);
      if (response.status === 200) {
        dispatch(getAllShipment(token));
        onClose()
      }
    } catch (error) {
      console.log(error, "error");
    }
    dispatch(setLoading(false));
  };
}

export function deleteShipment(id, token) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "DELETE",

        `${shipmentEndpoints.DELETE_SHIPMENT_API}/${id}`,
        null,
        { Authorization: `Bearer ${token}` }
      );
      toast.success(response.data.msg);
      if (response.status === 200) {
        dispatch(getAllShipment(token));
      }
    } catch (error) {
      console.log(error, "error");
      toast.error("Something went wrong !");
    }
    dispatch(setLoading(false));
  };
}
