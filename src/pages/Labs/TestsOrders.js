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



const TestsOrders = () => {
    const [testOrders, setTestOrders] = useState([
        {
            id: 1,
            testName: 'Blood Test',
            patientName: 'John Doe',
            status: 'Pending',
            date: '03/12/2022',
            time: '10:00 AM'
        },
        {
            id: 2,
            testName: 'Urine Test',
            patientName: 'Jane Smith',
            status: 'Completed',
            date: '03/12/2022',
            time: '11:30 AM'
        },
        {
            id: 3,
            testName: 'X-ray',
            patientName: 'Michael Johnson',
            status: 'Pending',
            date: '03/12/2022',
            time: '12:45 PM'
        },
        {
            id: 4,
            testName: 'MRI Scan',
            patientName: 'Emily Brown',
            status: 'Completed',
            date: '03/12/2022',
            time: '02:00 PM'
        },
        {
            id: 5,
            testName: 'Ultrasound',
            patientName: 'William Wilson',
            status: 'Rejected',
            date: '03/12/2022',
            time: '03:15 PM'
        },
        {
            id: 6,
            testName: 'ECG',
            patientName: 'Emma Garcia',
            status: 'Pending',
            date: '03/12/2022',
            time: '04:30 PM'
        },
        {
            id: 7,
            testName: 'Stool Test',
            patientName: 'David Rodriguez',
            status: 'Pending',
            date: '03/12/2022',
            time: '05:45 PM'
        },
        // Add more test orders here
    ]);



    // Handler to close the specification menu

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return '#c98908'; // Yellow
            case 'Completed':
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
                    }}>Lab Tets</Typography>

                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            color="inherit"
                            to="/labs"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}>
                            Labs
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            to="/lab-profile"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 5px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}
                        >Lab Profile
                        </Link>
                        <Typography color="#189ab4">Lab Tests</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>
            <Grid style={{ marginTop: "20px" }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>Test Name</TableCell>
                                <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>Patient Name</TableCell>
                                <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>Status</TableCell>
                                <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>Date</TableCell>
                                <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>Time</TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {testOrders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell>{order.testName}</TableCell>
                                    <TableCell>{order.patientName}</TableCell>
                                    <TableCell style={{ color: getStatusColor(order.status) }}>{order.status}</TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>{order.time}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Grid>
        </Grid>
    )
}
export default TestsOrders;