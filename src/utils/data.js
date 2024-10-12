import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
export const countAllStatuses = (shipments) => {
    const statuses = [
        { id: 1, name: "In Transit", icon: DirectionsBoatIcon },
        { id: 2, name: "Pending", icon: HourglassBottomIcon },
        { id: 3, name: "Delayed", icon: WatchLaterIcon },
        { id: 4, name: "Delivered", icon: LocalShippingIcon}
    ];

    const counts = statuses.map(status => {
        const count = shipments.filter(shipment => shipment.status === status.name).length;
        return { id: status.id, status: status.name, icon: status.icon, count };
    });

    return counts;
};