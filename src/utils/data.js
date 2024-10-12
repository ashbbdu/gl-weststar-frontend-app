import DashboardIcon from '@mui/icons-material/Dashboard';
export const countAllStatuses = (shipments) => {
    const statuses = [
        { id: 1, name: "In Transit", icon: DashboardIcon },
        { id: 2, name: "Pending", icon: DashboardIcon },
        { id: 3, name: "Delayed", icon: DashboardIcon },
        { id: 4, name: "Delivered", icon: DashboardIcon}
    ];

    const counts = statuses.map(status => {
        const count = shipments.filter(shipment => shipment.status === status.name).length;
        return { id: status.id, status: status.name, icon: status.icon, count };
    });

    return counts;
};