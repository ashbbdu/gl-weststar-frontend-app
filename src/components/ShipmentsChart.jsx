import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Typography,
} from "@mui/material";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";
import React, { useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";

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
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";
  return date.toISOString().split("T")[0];
};

const getUniqueYears = (shipmentData) => {
  return Array.from(
    new Set(
      shipmentData.map((shipment) => new Date(shipment.createdAt).getFullYear())
    )
  );
};

const getMonthNames = () => {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const ShipmentsChart = ({ shipmentData }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; 

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const uniqueYears = useMemo(
    () => getUniqueYears(shipmentData),
    [shipmentData]
  );
  const monthNames = getMonthNames();
  const filteredShipmentData = useMemo(() => {
    return shipmentData.filter((shipment) => {
      const shipmentDate = new Date(shipment.createdAt);
      const yearMatches =
        selectedYear === "All" ||
        shipmentDate.getFullYear() === Number(selectedYear);
      const monthMatches =
        selectedMonth === "All" ||
        shipmentDate.getMonth() + 1 === Number(selectedMonth);
      return yearMatches && monthMatches;
    });
  }, [shipmentData, selectedYear, selectedMonth]);

  const shipmentCountsByDate = filteredShipmentData.reduce((acc, shipment) => {
    const date = formatDate(shipment.createdAt);
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const labels = useMemo(() => {
    if (selectedYear === "All" && selectedMonth === "All") {
      return uniqueYears.map(String);
    } else if (selectedYear !== "All" && selectedMonth === "All") {
      return monthNames;
    } else {
      const daysInMonth = getDaysInMonth(
        Number(selectedYear),
        Number(selectedMonth)
      );
      return Array.from({ length: daysInMonth }, (_, i) => `${i + 1}`);
    }
  }, [selectedYear, selectedMonth, uniqueYears, monthNames]);

  const dataValues = useMemo(() => {
    if (selectedYear === "All" && selectedMonth === "All") {
      return uniqueYears.map((year) => {
        return shipmentData.filter(
          (shipment) => new Date(shipment.createdAt).getFullYear() === year
        ).length;
      });
    } else if (selectedYear !== "All" && selectedMonth === "All") {
      return monthNames.map((_, monthIndex) => {
        return shipmentData.filter(
          (shipment) =>
            new Date(shipment.createdAt).getFullYear() ===
              Number(selectedYear) &&
            new Date(shipment.createdAt).getMonth() === monthIndex
        ).length;
      });
    } else {
      return labels.map((day) => {
        const dateString = `${selectedYear}-${String(selectedMonth).padStart(
          2,
          "0"
        )}-${String(day).padStart(2, "0")}`;
        return shipmentCountsByDate[dateString] || 0;
      });
    }
  }, [
    selectedYear,
    selectedMonth,
    shipmentData,
    uniqueYears,
    monthNames,
    shipmentCountsByDate,
    labels,
  ]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Number of Shipments",
        data: dataValues,
        backgroundColor: "rgba(33, 150, 243, 0.8)",
        borderColor: "rgba(33, 150, 243, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text:
          selectedYear === "All" && selectedMonth === "All"
            ? "Shipments by Year"
            : selectedYear !== "All" && selectedMonth === "All"
            ? `Shipments in ${selectedYear} by Month`
            : `Shipments by Created Date (Year: ${selectedYear}, Month: ${
                monthNames[selectedMonth - 1]
              })`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text:
            selectedYear === "All" && selectedMonth === "All"
              ? "Year"
              : selectedYear !== "All" && selectedMonth === "All"
              ? "Month"
              : "Day of the Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Shipments",
        },
        beginAtZero: true,
      },
    },
    barThickness: 20,
    maintainAspectRatio: false,
  };

  return (
    <Box sx={{ p: 2, width: "100%" }}>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Filter Shipments by Year and Month
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <FormControl sx={{ flex: 1, minWidth: 100 }}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>Year</InputLabel>
            <Select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              label="Year"
              sx={{ fontSize: "0.875rem" }}
            >
              <MenuItem value="All">All</MenuItem>
              {uniqueYears.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ flex: 1, minWidth: 100 }}>
            <InputLabel sx={{ fontSize: "0.875rem" }}>Month</InputLabel>
            <Select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              label="Month"
              sx={{ fontSize: "0.875rem" }}
            >
              <MenuItem value="All">All</MenuItem>
              {monthNames.map((month, index) => (
                <MenuItem key={index} value={index + 1}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Shipments by Created Date
        </Typography>
        <Box sx={{ height: { xs: 300, sm: 400, md: 500 }, width: "100%" }}>
          <Bar data={data} options={options} />
        </Box>
      </Paper>
    </Box>
  );
};

export default ShipmentsChart;
