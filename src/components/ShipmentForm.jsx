import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object().shape({
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

const transportTypes = [
  { value: "Air", label: "Air" },
  { value: "Sea", label: "Sea" },
  { value: "Land", label: "Land" },
];

const statusOptions = [
  { value: "In Transit", label: "In Transit" },
  { value: "Delivered", label: "Delivered" },
  { value: "Pending", label: "Pending" },
  { value: "Delayed", label: "Delayed" }
];

export default function ShipmentForm() {
  return (
    <Formik
      initialValues={{
        shipmentNumber: "",
        transportType: "Air",
        portOfLoading: "",
        portOfDischarge: "",
        estimatedTimeOfDeparture: "",
        actualTimeOfDeparture: "",
        estimatedTimeOfArrival: "",
        actualTimeOfArrival: "",
        status: "In Transit",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values, "values");
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form>
          {/* Flexbox Container */}
          <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="space-between"
          >
            {/* Shipment Number Field */}
            <Box m={1}>
              <Field
                as={TextField}
                name="shipmentNumber"
                label="Shipment Number"
                fullWidth
                margin="normal"
                onChange={handleChange}
                error={touched.shipmentNumber && !!errors.shipmentNumber}
                helperText={touched.shipmentNumber && errors.shipmentNumber}
              />
            </Box>

            {/* Transport Type Field */}
            <Box m={1}>
              <Field
                as={TextField}
                name="transportType"
                label="Transport Type"
                fullWidth
                margin="normal"
                select
                onChange={handleChange}
                error={touched.transportType && !!errors.transportType}
                helperText={touched.transportType && errors.transportType}
              >
                {transportTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>

            {/* Port of Loading Field */}
            <Box m={1}>
              <Field
                as={TextField}
                name="portOfLoading"
                label="Port of Loading"
                fullWidth
                margin="normal"
                onChange={handleChange}
                error={touched.portOfLoading && !!errors.portOfLoading}
                helperText={touched.portOfLoading && errors.portOfLoading}
              />
            </Box>

            {/* Port of Discharge Field */}
            <Box m={1}>
              <Field
                as={TextField}
                name="portOfDischarge"
                label="Port of Discharge"
                fullWidth
                margin="normal"
                onChange={handleChange}
                error={touched.portOfDischarge && !!errors.portOfDischarge}
                helperText={touched.portOfDischarge && errors.portOfDischarge}
              />
            </Box>

            {/* Estimated Time of Departure */}
            <Box m={1}>
              <Field
                as={TextField}
                name="estimatedTimeOfDeparture"
                label="Estimated Time of Departure"
                type="datetime-local"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
                error={touched.estimatedTimeOfDeparture && !!errors.estimatedTimeOfDeparture}
                helperText={touched.estimatedTimeOfDeparture && errors.estimatedTimeOfDeparture}
              />
            </Box>

            {/* Actual Time of Departure */}
            <Box m={1}>
              <Field
                as={TextField}
                name="actualTimeOfDeparture"
                label="Actual Time of Departure"
                type="datetime-local"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
                error={touched.actualTimeOfDeparture && !!errors.actualTimeOfDeparture}
                helperText={touched.actualTimeOfDeparture && errors.actualTimeOfDeparture}
              />
            </Box>

            {/* Estimated Time of Arrival */}
            <Box m={1}>
              <Field
                as={TextField}
                name="estimatedTimeOfArrival"
                label="Estimated Time of Arrival"
                type="datetime-local"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
                error={touched.estimatedTimeOfArrival && !!errors.estimatedTimeOfArrival}
                helperText={touched.estimatedTimeOfArrival && errors.estimatedTimeOfArrival}
              />
            </Box>

            {/* Actual Time of Arrival */}
            <Box m={1}>
              <Field
                as={TextField}
                name="actualTimeOfArrival"
                label="Actual Time of Arrival"
                type="datetime-local"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
                error={touched.actualTimeOfArrival && !!errors.actualTimeOfArrival}
                helperText={touched.actualTimeOfArrival && errors.actualTimeOfArrival}
              />
            </Box>

            {/* Status Field (Dropdown) */}
            <Box m={1}>
              <Field
                as={TextField}
                name="status"
                label="Status"
                fullWidth
                margin="normal"
                select
                onChange={handleChange}
                error={touched.status && !!errors.status}
                helperText={touched.status && errors.status}
              >
                {statusOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>
          </Box>

          {/* Submit Button */}
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
