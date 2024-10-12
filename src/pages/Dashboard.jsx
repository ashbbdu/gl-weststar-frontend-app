import { Box, Card, CardContent, ListItemIcon, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShipmentsChart from '../components/ShipmentsChart';
import { getAllShipment } from '../services/shippingApi';
import { countAllStatuses } from '../utils/data';
const Dashboard = () => {
  
    
    const { shippingData } = useSelector(state => state.shipping)
    const { token } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    let val = countAllStatuses(shippingData)
  
    useEffect(() => {
       dispatch(getAllShipment(token))
    },[])

  return (
    <Box>

      <Box
        display="flex"
        flexDirection={{ xs: 'column', md : 'row' }}
        justifyContent="space-between"
        
      >
        {val.map((res) => {
            
            return (
                <Card key={res.id} sx={{ mb: 2, flex: 1, mx: { sm: 1 }, backgroundColor : "card.default" }}>
                <CardContent sx={{display : "flex" , alignItems : "center" , justifyContent : "center"}}>
                <ListItemIcon sx={{color : "primary.main"}}>{<res.icon />}</ListItemIcon> 
                 
                <Box>
                <Typography color="text.secondary">{res.count}</Typography>
                <Typography variant="p" sx={{fontWeight : "bold"}}>{res.status}</Typography>
                </Box>
                </CardContent>
              </Card>
            )
        })}
      </Box>

      {/* Shipments Chart */}
      <ShipmentsChart shipmentData={shippingData} />
    </Box>
  );
};

export default Dashboard;
