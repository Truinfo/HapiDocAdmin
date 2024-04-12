import {
    Container, Grid, Typography, Divider, Card, CardContent, Button, TableCell, TableRow, TableBody, Paper,
    TableContainer,
    TableHead,
    Table,
    TextField,
    IconButton,
    Menu,
    MenuItem,
    Box,
    Avatar,
    Breadcrumbs
} from '@mui/material'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const MedicineOrders = () => {
    const [Orders, setOrders] = useState([
        {
            id: 1,
            medicine: 'Paracetamol',
            quantity: 2,
            status: 'Pending',
            date: "03/12/2022",
            time: "04:30 PM",
            customer: {
                name: 'John Doe',
                address: '123 Main Street',
                contact: '123-456-7890'
            }
        },
        {
            id: 2,
            medicine: 'Aspirin',
            quantity: 1,
            status: 'Delivered',
            date: "03/12/2022",
            time: "04:30 PM",
            customer: {
                name: 'Jane Smith',
                address: '456 Elm Street',
                contact: '987-654-3210'
            }
        },
        {
            id: 3,
            medicine: 'Cough Syrup',
            quantity: 3,
            status: 'Pending',
            date: "03/12/2022",
            time: "04:30 PM",
            customer: {
                name: 'Michael Johnson',
                address: '789 Oak Avenue',
                contact: '234-567-8901'
            }
        },
        {
            id: 4,
            medicine: 'Antibiotics',
            quantity: 1,
            status: 'Delivered',
            date: "03/12/2022",
            time: "04:30 PM",
            customer: {
                name: 'Emily Brown',
                address: '987 Pine Road',
                contact: '543-210-9876'
            }
        },
        {
            id: 5,
            medicine: 'Allergy Medication',
            quantity: 2,
            status: 'Rejected',
            date: "03/12/2022",
            time: "04:30 PM",
            customer: {
                name: 'William Wilson',
                address: '654 Maple Lane',
                contact: '876-543-2109'
            }

        },
        {
            id: 6,
            medicine: 'Allergy Medication',
            quantity: 2,
            status: 'Rejected',
            date: "03/12/2022",
            time: "04:30 PM",
            customer: {
                name: 'William Wilson',
                address: '654 Maple Lane',
                contact: '876-543-2109'
            }
        }

        // Add more orders with customer details as needed
    ]);

    const [filteredAppointments, setFilteredAppointments] = useState(Orders);
    const [selectedSpecification, setSelectedSpecification] = useState('All');
    const [specificationMenuAnchorEl, setSpecificationMenuAnchorEl] = useState(null);

    // Handler to close the specification menu
    const handleSpecificationMenuClose = () => {
        setSpecificationMenuAnchorEl(null);
    };

    // Handler to open the specification menu
    const handleSpecificationMenuClick = (event) => {
        setSpecificationMenuAnchorEl(event.currentTarget);
    };

    // Handler for selecting a specification (status)
    const handleSpecificationSelect = (specification) => {
        setSelectedSpecification(specification);
        setSpecificationMenuAnchorEl(null);
    };

    // Filter appointments based on the selected status
    useEffect(() => {
        filterAppointmentsByStatus(selectedSpecification);
    }, [selectedSpecification]);

    const filterAppointmentsByStatus = (status) => {
        if (status === 'All') {
            // If 'All' is selected, show all orders
            setFilteredAppointments([...Orders]);
        } else {
            // Filter orders based on the selected status
            const filtered = Orders.filter(order => order.status === status);
            setFilteredAppointments(filtered);
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return '#c98908'; // Yellow
            case 'Delivered':
                return '#093819'; // Green
            case 'Rejected':
                return '#ab2405'; // Red
            default:
                return '#FFFFFF'; // White (or any other default color)
        }
    };
    return (
        <Grid>
            <Grid style={{
                backgroundColor: "#ffffff", height: "60px", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            }} >
                <Grid style={{
                    display: "flex", flexDirection: "column", justifyContent: "flex"
                }} >
                    <Typography variant="h5" style={{
                        fontFamily: "Poppins, sans-serif", fontSize: "22px", fontWeight: 600,
                        padding: "0 0 0 10px", color: "#05445E"
                    }}>Medicine Orders</Typography>

                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            color="inherit"
                            to="/medicalstore"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}>
                            Medical Store
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            to="/store-profile"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 5px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}
                        >Store Profile
                        </Link>
                        <Typography color="#189ab4">Medicine Orders</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>
            <Grid container spacing={1.5} style={{ marginTop: "2%" }}>
                <Grid item xs={12} sm={12} md={12} >
                    <Grid container justifyContent="flex-end" alignItems="center" style={{ backgroundColor: "#fff", }}>
                        {/* Filter text field */}
                        <TextField
                            label="Filter"
                            variant="outlined"
                            size="small"
                            style={{ width: "auto", margin: "15px 15px 0 0" }}
                            value={selectedSpecification}
                            onClick={handleSpecificationMenuClick}
                            InputProps={{
                                endAdornment: (
                                    <IconButton size="small" onClick={handleSpecificationMenuClick}>
                                        <ArrowDropDownIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {/* Specification (status) menu */}
                        <Menu
                            anchorEl={specificationMenuAnchorEl}
                            open={Boolean(specificationMenuAnchorEl)}
                            onClose={handleSpecificationMenuClose}
                        >
                            <MenuItem onClick={() => handleSpecificationSelect('All')}>All</MenuItem>
                            <MenuItem onClick={() => handleSpecificationSelect('Delivered')}>Delivered</MenuItem>
                            <MenuItem onClick={() => handleSpecificationSelect('Rejected')}>Rejected</MenuItem>
                        </Menu>
                    </Grid>
                    {/* Table displaying filtered appointments */}
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Date - Time</TableCell>
                                    <TableCell>Customer</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Contact</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredAppointments.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell>{order.medicine}</TableCell>
                                        <TableCell align="center">{order.quantity}</TableCell>
                                        <TableCell>{order.date} - {order.time}</TableCell>
                                        <TableCell>{order.customer.name}</TableCell>
                                        <TableCell>{order.customer.address}</TableCell>
                                        <TableCell>{order.customer.contact}</TableCell>
                                        <TableCell style={{ color: getStatusColor(order.status)  }}>{order.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default MedicineOrders;