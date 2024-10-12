import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

export const themes = {
    light: {
      palette: {
        mode: 'light',
        primary: { main: 'rgba(25, 118, 210, 0.85)' }, 
        secondary: { main: 'rgba(255, 193, 7, 0.85)' }, // Bright amber as secondary
        background: { default: '#f0f2f5' }, 
        text: { primary: '#333' },
        card : {default : "#ffffff" }
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: { main: 'rgba(144, 202, 249, 0.85)' }, 
        secondary: { main: 'rgba(255, 64, 129, 0.85)' }, // Pink as secondary
        background: { default: '#1e1e1e' }, 
        text: { primary: '#e0e0e0' },
        card : {default : "#252525" }
      },
    },
    red: {
      palette: {
        mode: 'light',
        primary: { main: 'rgba(244, 67, 54, 0.85)' }, // Red
        secondary: { main: 'rgba(255, 152, 0, 0.85)' }, // Deep orange as secondary
        background: { default: '#ffebee' }, 
        text: { primary: '#b71c1c' },
        card : {default : "#ffffff" }
      },
    },
    blue: {
      palette: {
        mode: 'light',
        primary: { main: 'rgba(33, 150, 243, 0.85)' }, // Blue
        secondary: { main: 'rgba(0, 188, 212, 0.85)' }, // Teal as secondary
        background: { default: '#e3f2fd' }, 
        text: { primary: '#0d47a1' },
        card : {default : "#ffffff" }
      },
    },
    green: {
      palette: {
        mode: 'light',
        primary: { main: 'rgba(76, 175, 80, 0.85)' }, // Green
        secondary: { main: 'rgba(255, 235, 59, 0.85)' }, // Yellow as secondary
        background: { default: '#e8f5e9' }, 
        text: { primary: '#1b5e20' },
        card : {default : "#ffffff" }
      },
    },
  };
  
  

export const sideBarMenuItems = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    icon : DashboardIcon
  },
  {
    id: 2,
    title: "Shipment Details",
    url: "/shipmentdetails",
    icon : DirectionsBoatIcon
  },
  
];

export const shippigDetailsTableHeader = [
  {
    id: 1,
    title: "Shipment Number",
  },
  {
    id: 2,
    title: "Transport Type",
  },
  {
    id: 3,
    title: "Port of Loading",
  },
  {
    id: 4,
    title: "Port of Discharge",
  },
  {
    id: 5,
    title: "Estimated Time of Departure",
  },
  {
    id: 6,
    title: "Actual Time of Departure",
  },
  {
    id: 7,
    title: "Estimated Time of Arrival",
  },
  {
    id: 8,
    title: "Actual Time of Arrival",
  },
  {
    id: 9,
    title: "Status",
  },
  {
    id: 10,
    title: "Action",
  },
];


export const transportTypes = [
    { value: "Air", label: "Air" },
    { value: "Sea", label: "Sea" },
    { value: "Land", label: "Land" },
  ];
  
export const statusOptions = [
    { value: "In Transit", label: "In Transit" },
    { value: "Delivered", label: "Delivered" },
    { value: "Pending", label: "Pending" },
    { value: "Delayed", label: "Delayed" },
  ];