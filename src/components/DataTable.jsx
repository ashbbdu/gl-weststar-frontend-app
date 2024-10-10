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

const DataTable = ({ data, shipmetTableHeader }) => {
  const [shipments, setShipments] = useState(data);
  console.log(shipments, "shipmentsssssss");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleDelete = (shipmentNumber) => {
    console.log(shipmentNumber, "ship number");
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1976d2", color: "#fff" }}>
              {shipmetTableHeader.map((res) => {
                return (
                  <TableCell
                    sx={{ position: "sticky", top: 0, zIndex: 1 }}
                    key={res.id}
                  >
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      color="#fff"
                    >
                      {res.title}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
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
                  <TableCell style={{ display: "flex" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(shipment.shipmentNumber)}
                    >
                      Edit
                    </Button>
                    {/* <CommonModal  title="Are you sure you want to delete this shipmenet ?" component={DeletePrompt} action="Delete" /> */}
                    <ConfirmationModal
                      actionTitle={"Delete"}
                      title={"Are you sure you want to delete this shipmenet ?"}
                      id={shipment._id}
                      // action={handleDelete(shipment._id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default DataTable;
