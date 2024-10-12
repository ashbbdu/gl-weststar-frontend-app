import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ConfirmationModal from "../components/ConfirmationModal";
import ShipmentFormModal from "../components/ShipmentFormModal";

const DataTable = ({ data, shipmetTableHeader }) => {
  const [shipments, setShipments] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedShipment, setSelectedShipment] = useState(null); 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 

  const handleEdit = (shipment) => {
    setSelectedShipment(shipment);
    setIsEditModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setSelectedShipment(null);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer component={Paper} style={{height : 500 , whiteSpace : "nowrap"}}>
        <Table>
          <TableHead variant="primary">
            <TableRow sx={{ backgroundColor: "#1976d2", color: "#fff" }}>
              {shipmetTableHeader.map((res) => (
                <TableCell
                  sx={{ backgroundColor: 'primary.main' , top: 0, zIndex: 1 }}
                  key={res.id}
                >
                  <Typography variant="subtitle2" fontSize={12} fontWeight="bold" color="#fff">
                    {res.title}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
           
            {data.length > 0 ? data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((shipment, index) => (
                <TableRow key={index}>
                  <TableCell>{shipment.shipmentNumber}</TableCell>
                  <TableCell>{shipment.transportType}</TableCell>
                  <TableCell>{shipment.portOfLoading}</TableCell>
                  <TableCell>{shipment.portOfDischarge}</TableCell>
                  <TableCell>
                    {new Date(
                      shipment.estimatedTimeOfDeparture
                    ).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {new Date(shipment.actualTimeOfDeparture).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {new Date(shipment.estimatedTimeOfArrival).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {new Date(shipment.actualTimeOfArrival).toLocaleString()}
                  </TableCell>
                  <TableCell>{shipment.status}</TableCell>
                  <TableCell style={{display : "flex"}}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(shipment)} 
                    >
                      Edit
                    </Button>
                    <ConfirmationModal
                      actionTitle={"Delete"}
                      title={"Are you sure you want to delete this shipment?"}
                      id={shipment._id}
                    />
                  </TableCell>
                </TableRow>
              )) : <div>No Records Found !</div>}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) =>
          setRowsPerPage(parseInt(event.target.value, 10))
        }
      />

   
      {isEditModalOpen && (
        <ShipmentFormModal
          open={isEditModalOpen}
          onClose={handleCloseModal}
          shipmentData={selectedShipment} 
        />
      )}
    </Box>
  );
};

export default DataTable;
