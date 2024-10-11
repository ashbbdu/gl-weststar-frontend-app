import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import ShipmentForm from "./ShipmentForm";

const ShipmentFormModal = ({ open, onClose, shipmentData }) => {
    console.log(shipmentData);
    
  const style = {
    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: 400,
  width: "600px",
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto', 
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          {shipmentData ? "Edit Shipment" : "Create Shipment"}
        </Typography>
        <ShipmentForm initialValues={shipmentData} onClose={onClose} />
        <Button onClick={onClose} variant="contained" color="secondary" sx={{ mt: 2 }}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default ShipmentFormModal;
