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

const DoctorAppointments = () => {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Completed':
                return '#4CAF50'; // Green for Low priority
            case 'Pending':
                return '#FFC107'; // Yellow for Medium priority
            case 'Rejected':
                return '#F44336'; // Red for High priority
            default:
                return '#000'; // Default color
        }
    };
    const [Appointments, setAppointments] = useState([
        { id: 5, name: 'John Wick', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Fever and cough" },
        { id: 6, name: 'John Snow', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Headache and fatigue" },
        { id: 1, name: 'Sarah', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Stomach pain and nausea" },
        { id: 2, name: 'Harshit', status: 'Completed', date: "03/12/2022", time: "04:30 PM", problem: "Back pain and muscle ache" },
        { id: 3, name: 'Angelica', status: 'Rejected', date: "03/12/2022", time: "04:30 PM", problem: "Skin rash and itching" },
        { id: 7, name: 'Michael', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Joint pain and swelling" },
        { id: 8, name: 'Emma', status: 'Completed', date: "03/12/2022", time: "04:30 PM", problem: "Sore throat and fever" },
        { id: 9, name: 'David', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Chest congestion and cough" },
        { id: 10, name: 'Olivia', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Fatigue and dizziness" },
    ]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [filteredAppointments, setFilteredAppointments] = useState(Appointments);
    const [selectedSpecification, setSelectedSpecification] = useState('All');
    const [specificationMenuAnchorEl, setSpecificationMenuAnchorEl] = useState(null);

    const handleSpecificationMenuClose = () => {
        setSpecificationMenuAnchorEl(null);
    };

    const handleSpecificationMenuClick = (event) => {
        setSpecificationMenuAnchorEl(event.currentTarget);
    };

    const handleSpecificationSelect = (specification) => {
        setSelectedSpecification(specification);
        setSpecificationMenuAnchorEl(null);
    };

    useEffect(() => {
        filterAppointmentsByStatus(selectedSpecification);
    }, [selectedSpecification]);

    const filterAppointmentsByStatus = (status) => {
        if (status === 'All') {
            setFilteredAppointments([...Appointments]);
        } else {
            const filtered = Appointments.filter(appointment => appointment.status === status);
            setFilteredAppointments(filtered);
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
                    }}>Doctor Appointments</Typography>

                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            color="inherit"
                            to="/doctors"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}>
                            Doctor
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            to="/doctor-profile"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 5px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}
                        >Doctor Profile
                        </Link>
                        <Typography color="#189ab4">Doctor Appointments</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={6} style={{ marginTop: "30px" }}>
                <Grid container justifyContent="space-between" alignItems="center" style={{ backgroundColor: "#fff", }}>
                    <Typography variant="h5" gutterBottom style={{ fontFamily: "sans-serif", fontSize: "22px", color: "#04374d", padding: "20px 0 0 20px", fontWeight: "600" }}>Appointments</Typography>
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
                    <Menu
                        anchorEl={specificationMenuAnchorEl}
                        open={Boolean(specificationMenuAnchorEl)}
                        onClose={handleSpecificationMenuClose}
                    >
                        <MenuItem onClick={() => handleSpecificationSelect('All')}>All</MenuItem>
                        <MenuItem onClick={() => handleSpecificationSelect('Completed')}>Completed</MenuItem>
                        <MenuItem onClick={() => handleSpecificationSelect('Rejected')}>Rejected</MenuItem>
                    </Menu>
                </Grid>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Date-Time</TableCell>
                                <TableCell>Problem</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredAppointments.map((request) => (
                                <TableRow key={request.id}>
                                      <TableCell>{request.id}</TableCell>
                                    <TableCell>{request.name}</TableCell>
                                    <TableCell>{request.date} - {request.time}</TableCell>
                                    <TableCell>{request.problem}</TableCell>
                                    <TableCell>
                                        {request.status}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}
export default DoctorAppointments;