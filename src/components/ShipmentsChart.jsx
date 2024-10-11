import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js';
import React, { useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'; 
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date'; 
  return date.toISOString().split('T')[0]; 
};

// Helper function to get unique years from shipment data
const getUniqueYears = (shipmentData, dateType) => {
  return Array.from(
    new Set(shipmentData.map((shipment) => new Date(shipment[dateType]).getFullYear()))
  );
};

// Helper function to get month names
const getMonthNames = () => {
  return [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
};

// Helper function to get unique months (1-12)
const getUniqueMonths = () => getMonthNames().map((_, i) => i + 1);

const ShipmentsChart = ({ shipmentData }) => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [dateType, setDateType] = useState('estimatedTimeOfArrival'); // Default to filtering by estimatedTimeOfArrival

  const uniqueYears = useMemo(() => getUniqueYears(shipmentData, dateType), [shipmentData, dateType]);
  const uniqueMonths = getMonthNames();

  // Filter shipments by selected year, month, and date type (arrival or departure)
  const filteredShipmentData = useMemo(() => {
    return shipmentData.filter((shipment) => {
      const shipmentDate = new Date(shipment[dateType]);
      const yearMatches = selectedYear === 'All' || shipmentDate.getFullYear() === Number(selectedYear);
      const monthMatches = selectedMonth === 'All' || shipmentDate.getMonth() + 1 === Number(selectedMonth);
      return yearMatches && monthMatches;
    });
  }, [shipmentData, selectedYear, selectedMonth, dateType]);

  // Count the number of shipments by date
  const shipmentCountsByDate = filteredShipmentData.reduce((acc, shipment) => {
    const date = formatDate(shipment[dateType]);
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(shipmentCountsByDate); // Extract unique dates
  const dataValues = Object.values(shipmentCountsByDate); // Extract counts for each date

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Shipments',
        data: dataValues,
        backgroundColor: 'rgba(33, 150, 243, 0.8)', // Color for the bars
        borderColor: 'rgba(33, 150, 243, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: `Shipments by ${dateType === 'estimatedTimeOfArrival' ? 'Estimated Time of Arrival' : 'Estimated Time of Departure'}`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Shipments',
        },
        beginAtZero: true,
      },
    },
    // Reduce the bar thickness
    barThickness: 20,
    maintainAspectRatio: false, // Ensures it adapts better to smaller screens
  };

  return (
    <Box sx={{ p: 2, width: '100%' }}>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Filter Shipments by Year, Month, and Date Type
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {/* Year Selector */}
          <FormControl sx={{ flex: 1, minWidth: 100 }}>
            <InputLabel sx={{ fontSize: '0.875rem' }}>Year</InputLabel>
            <Select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              label="Year"
              sx={{ fontSize: '0.875rem' }}
            >
              <MenuItem value="All">All</MenuItem>
              {uniqueYears.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Month Selector */}
          <FormControl sx={{ flex: 1, minWidth: 100 }}>
            <InputLabel sx={{ fontSize: '0.875rem' }}>Month</InputLabel>
            <Select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              label="Month"
              sx={{ fontSize: '0.875rem' }}
            >
              <MenuItem value="All">All</MenuItem>
              {uniqueMonths.map((month, index) => (
                <MenuItem key={index} value={index + 1}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Date Type Selector (Arrival or Departure) */}
          <FormControl sx={{ flex: 1, minWidth: 120 }}>
            <InputLabel sx={{ fontSize: '0.875rem' }}>Date Type</InputLabel>
            <Select
              value={dateType}
              onChange={(e) => setDateType(e.target.value)}
              label="Date Type"
              sx={{ fontSize: '0.875rem' }}
            >
              <MenuItem value="estimatedTimeOfArrival">Estimated Time of Arrival</MenuItem>
              <MenuItem value="estimatedTimeOfDeparture">Estimated Time of Departure</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Shipments by {dateType === 'estimatedTimeOfArrival' ? 'Estimated Time of Arrival' : 'Estimated Time of Departure'}
        </Typography>
        {/* Ensure the chart is responsive */}
        <Box sx={{ height: { xs: 300, sm: 400, md: 500 }, width: '100%' }}>
          <Bar data={data} options={options} />
        </Box>
      </Paper>
    </Box>
  );
};

export default ShipmentsChart;
