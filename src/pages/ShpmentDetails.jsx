import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommonModal from '../components/CommonModal';
import DataTable from '../components/DataTable';
import ShipmentForm from '../components/ShipmentForm';
import { shippigDetailsTableHeader } from '../constants';
import { getAllShipment } from '../services/shippingApi';

const ShpmentDetails = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const { shippingData } = useSelector(state => state.shipping)
    
        useEffect(() => {
            dispatch(getAllShipment(token))
        },[])
 
  return (
    <div>
        <div className='modal-container'>
          <CommonModal title="Add a new Shipment" component={ShipmentForm} action={"+ New Shipment"} />
        </div>
        <div >
            <DataTable data={shippingData} shipmetTableHeader={shippigDetailsTableHeader} />
        </div>
    </div>
  )
}

export default ShpmentDetails