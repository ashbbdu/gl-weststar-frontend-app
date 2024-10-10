
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import ShpmentDetails from '../pages/ShpmentDetails'
import Signup from '../pages/Signup'
import PrivateRoute from './PrivateRoutes'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/dashboard' element={ <PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path='/shipmentdetails' element={ <PrivateRoute><ShpmentDetails /></PrivateRoute>} />
       
           
       
    </Routes>
  )
}

export default Routing