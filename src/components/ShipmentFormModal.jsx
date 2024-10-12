import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import ShipmentForm from "./ShipmentForm";

const ShipmentFormModal = ({ open, onClose, shipmentData }) => {
  console.log(shipmentData);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "600px",
    maxHeight: "80vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
  };
  
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2" style={{display : "flex" , justifyContent : "space-between"}}>
          <div>{shipmentData ? "Edit Shipment" : "Create Shipment"}</div>
          <div onClick={onClose} style={{ cursor: "pointer" }}>
            <CloseIcon />
          </div>
        </Typography>
        <ShipmentForm
          action={shipmentData ? "Edit Shipment" : "Create Shipment"}
          initialValues={shipmentData}
          onClose={onClose}
          id={shipmentData._id}
        />

      </Box>
    </Modal>
  );
};

export default ShipmentFormModal;
