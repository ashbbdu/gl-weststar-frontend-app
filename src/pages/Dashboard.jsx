import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import ShipmentsChart from '../components/ShipmentsChart';

const Dashboard = () => {
  const shipmentData = [
    {
      shipmentNumber: 'SHP001',
      status: 'Pending',
      transportType: 'Air',
      portOfLoading: 'New York',
      portOfDischarge: 'London',
      estimatedTimeOfDeparture: '2024-10-15T09:30:00',
      actualTimeOfDeparture: null,
      estimatedTimeOfArrival: '2024-10-18T14:00:00',
      actualTimeOfArrival: null
    },
    {
      shipmentNumber: 'SHP002',
      status: 'In Transit',
      transportType: 'Sea',
      portOfLoading: 'Shanghai',
      portOfDischarge: 'Los Angeles',
      estimatedTimeOfDeparture: '2024-10-05T06:00:00',
      actualTimeOfDeparture: '2024-10-05T06:00:00',
      estimatedTimeOfArrival: '2024-12-20T08:00:00',
      actualTimeOfArrival: null
    },
    {
      shipmentNumber: 'SHP003',
      status: 'Delayed',
      transportType: 'Land',
      portOfLoading: 'Berlin',
      portOfDischarge: 'Paris',
      estimatedTimeOfDeparture: '2024-10-01T12:00:00',
      actualTimeOfDeparture: '2024-10-01T13:30:00',
      estimatedTimeOfArrival: '2024-21-02T16:00:00',
      actualTimeOfArrival: null
    },
    {
      shipmentNumber: 'SHP004',
      status: 'Delivered',
      transportType: 'Air',
      portOfLoading: 'Tokyo',
      portOfDischarge: 'Sydney',
      estimatedTimeOfDeparture: '2024-09-25T05:00:00',
      actualTimeOfDeparture: '2024-09-25T05:00:00',
      estimatedTimeOfArrival: '2024-09-27T10:00:00',
      actualTimeOfArrival: '2024-09-27T09:45:00'
    },
    // Add more shipments as needed
  ];

  return (
    <Box sx={{ p: 2 }}>

      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        mb={2}
        height={200}
        
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} sx={{ mb: 2, flex: 1, mx: { sm: 1 } }}>
            <CardContent>
              <Typography variant="h6">Card {index + 1}</Typography>
              <Typography color="text.secondary">Details for card {index + 1}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Shipments Chart */}
      <ShipmentsChart shipmentData={shipmentData} />
    </Box>
  );
};

export default Dashboard;
