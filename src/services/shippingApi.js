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
      console.log(response);
      dispatch(setShippingData(response?.data?.shipments));
    } catch (error) {
      console.log(error, "error");
    }
    dispatch(setLoading(false));
  };
}

export function creteShipment(values, token) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        shipmentEndpoints.CREATE_NEW_SHIPMENT_API,
        values,
        { Authorization: `Bearer ${token}` }
      );
      console.log(response);
      if (response.status === 201) {
        dispatch(getAllShipment(token));
      }
    } catch (error) {
      console.log(error, "error");
      //   dispatch(setShippingData([]))
    }
    dispatch(setLoading(false));
  };
}

export function updateShipment(values, id, token) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "PUT",
        `${shipmentEndpoints.UPDATE_SHIPMENT_API}/${id}`,
        values,
        { Authorization: `Bearer ${token}` }
      );
      console.log(response);
      toast.success(response.data.message);
      if (response.status === 200) {
        dispatch(getAllShipment(token));
      }
    } catch (error) {
      console.log(error, "error");
      //   dispatch(setShippingData([]))
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

        `${shipmentEndpoints.UPDATE_SHIPMENT_API}/${id}`,
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
