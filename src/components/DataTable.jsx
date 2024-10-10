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
} from '@mui/material';
import React, { useState } from 'react';

// Sample shipment data
const initialShipments = [
  {
    shipmentNumber: "SHP1e23411510111",
    transportType: "Air",
    portOfLoading: "JFK International Airport",
    portOfDischarge: "Heathrow Airport",
    estimatedTimeOfDeparture: "2024-10-15T14:30:00Z",
    actualTimeOfDeparture: "2024-10-15T15:00:00Z",
    estimatedTimeOfArrival: "2024-10-16T10:00:00Z",
    actualTimeOfArrival: "2024-10-16T11:00:00Z",
    status: "In Transit",
  },
  {
    shipmentNumber: "SHP1e23411510112",
    transportType: "Sea",
    portOfLoading: "Los Angeles",
    portOfDischarge: "Shanghai",
    estimatedTimeOfDeparture: "2024-10-10T14:30:00Z",
    actualTimeOfDeparture: "2024-10-10T15:00:00Z",
    estimatedTimeOfArrival: "2024-10-20T10:00:00Z",
    actualTimeOfArrival: "2024-10-20T11:00:00Z",
    status: "In Transit",
  },
  // Add more shipments if needed
];

const DataTable = ({data}) => {
  const [shipments, setShipments] = useState(data);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleDelete = (shipmentNumber) => {
    setShipments(shipments.filter((shipment) => shipment.shipmentNumber !== shipmentNumber));
  };

  const handleEdit = (shipmentNumber) => {
    console.log(`Edit shipment: ${shipmentNumber}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
              
              <TableCell sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="#fff">
                  Shipment Number
                </Typography>
              </TableCell>
              <TableCell sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="#fff">
                  Transport Type
                </Typography>
              </TableCell>
              <TableCell sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="#fff">
                  Port of Loading
                </Typography>
              </TableCell>
              <TableCell sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="#fff">
                  Port of Discharge
                </Typography>
              </TableCell>
              <TableCell sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="#fff">
                  Estimated Time of Departure
                </Typography>
              </TableCell>
              <TableCell sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="#fff">
                  Actual Time of Departure
                </Typography>
              </TableCell>
              <TableCell sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="#fff">
                  Estimated Time of Arrival
                </Typography>
              </TableCell>
              <TableCell sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="#fff">
                  Actual Time of Arrival
                </Typography>
              </TableCell>
              <TableCell sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="#fff">
                  Status
                </Typography>
              </TableCell>
              <TableCell sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="#fff">
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((shipment, index) => (
              <TableRow key={index}>
                <TableCell>{shipment.shipmentNumber}</TableCell>
                <TableCell>{shipment.transportType}</TableCell>
                <TableCell>{shipment.portOfLoading}</TableCell>
                <TableCell>{shipment.portOfDischarge}</TableCell>
                <TableCell>{new Date(shipment.estimatedTimeOfDeparture).toLocaleString()}</TableCell>
                <TableCell>{new Date(shipment.actualTimeOfDeparture).toLocaleString()}</TableCell>
                <TableCell>{new Date(shipment.estimatedTimeOfArrival).toLocaleString()}</TableCell>
                <TableCell>{new Date(shipment.actualTimeOfArrival).toLocaleString()}</TableCell>
                <TableCell>{shipment.status}</TableCell>
                <TableCell style={{display : "flex"}}>
                  <Button variant="contained" color="primary" onClick={() => handleEdit(shipment.shipmentNumber)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(shipment.shipmentNumber)} style={{ marginLeft: '8px' }}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={shipments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default DataTable;
