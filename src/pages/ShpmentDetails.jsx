import React from 'react';
import CommonModal from '../components/CommonModal';
import DataTable from '../components/DataTable';
import ShipmentForm from '../components/ShipmentForm';

const ShpmentDetails = () => {
    const shipments = [
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
            shipmentNumber: "SHP1e23411510111",
            transportType: "Air",
            portOfLoading: "JFK International Airport",
            portOfDischarge: "Heathrow Airport",
            estimatedTimeOfDeparture: "2024-10-15T14:30:00Z",
            actualTimeOfDeparture: "2024-10-15T15:00:00Z",
            estimatedTimeOfArrival: "2024-10-16T10:00:00Z",
            actualTimeOfArrival: "2024-10-16T11:00:00Z",
            status: "In Transit",
          }
      ];
  return (
    <div>
        <div className='modal-container'>
          <CommonModal component={ShipmentForm} />
        </div>
        <div >
            <DataTable data={shipments} />
        </div>
    </div>
  )
}

export default ShpmentDetails