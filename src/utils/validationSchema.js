import * as Yup from 'yup';

export const loginSchema = {
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}

export const signupSchema = {
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
}

export const shippingSchema = Yup.object().shape({
    shipmentNumber: Yup.string().required("Shipment Number is required"),
    transportType: Yup.string().required("Transport Type is required"),
    portOfLoading: Yup.string().required("Port of Loading is required"),
    portOfDischarge: Yup.string().required("Port of Discharge is required"),
    estimatedTimeOfDeparture: Yup.date().required("ETD is required"),
    actualTimeOfDeparture: Yup.date().required("ATD is required"),
    estimatedTimeOfArrival: Yup.date().required("ETA is required"),
    actualTimeOfArrival: Yup.date().required("ATA is required"),
    status: Yup.string().required("Status is required"),
  });
  