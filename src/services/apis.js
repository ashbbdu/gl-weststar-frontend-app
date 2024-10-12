

const BASE_URL = "https://gl-weststar-backend-app-production.up.railway.app/api/v1"
// Auth Endpoints
export const authEndpoints = {
    SIGNUP_API:`${BASE_URL}/auth/signup`,
    LOGIN_API: `${BASE_URL}/auth/signin`,
  }

  export const shipmentEndpoints = {
    GET_ALL_SHIPMENT_API : `${BASE_URL}/shipment/allShipments`,
    CREATE_NEW_SHIPMENT_API : `${BASE_URL}/shipment/addShipment`,
    UPDATE_SHIPMENT_API : `${BASE_URL}/shipment/updateShipment`,
    DELETE_SHIPMENT_API : `${BASE_URL}/shipment/deleteShipment`
  }
