import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Grid, Typography, Breadcrumbs, IconButton, Paper, Avatar, Dialog, DialogTitle, DialogContent, DialogContentText, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs"; import { MdOutlineSupportAgent } from "react-icons/md";
import CloseIcon from '@mui/icons-material/Close';
import woman from "../../assets/icons/woman.png"
import { FaCircleDot } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FaTimesCircle } from 'react-icons/fa';
import apple from "../../assets/icons/apple_cider.jpg"
import doctor from "../../assets/icons/doctor.png"

import Carousel from 'react-material-ui-carousel';
const theme = createTheme({
    palette: {
        primary: {
            main: '#75E6DA', // Blue Green for the rest of the table
        },
    },
    typography: {
        fontFamily: [
            'Forum',
            'Arial',
            'sans-serif',
        ].join(','),
        h4: {
            fontSize: '20px',
        },
    },
});
const PatientProfile = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handlePaperClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog1 = () => {
        setOpenDialog(false);
    };
    const medicinesOrders = [
        { orderId: 'ORD123', product: 'Medicine A', deliveryDateTime: '2024-03-28', orderedDateTime: '2024-03-25', quantity: 2, deliveryStatus: 'Delivered' },
        { orderId: 'ORD456', product: 'Medicine B', deliveryDateTime: '2024-03-29', orderedDateTime: '2024-03-26', quantity: 1, deliveryStatus: 'Cancelled' },
        // Add more sample data as needed
    ];
    //   const formatDateAndTime = (dateTimeString) => {
    //     const dateTime = new Date(dateTimeString);
    //     return dateTime.toLocaleString();
    //   };
    const [open, setOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null); // State to hold selected order details

    // Function to handle click and open dialog with order details
    const handleClick = (order) => {
        setSelectedOrder(order);
        setOpen(true);
    };

    // Function to handle dialog close
    const handleClose = () => {
        setOpen(false);
    };
    const sampleData = [
        { id: 1, name: 'Aarav ', age: 10, gender: 'Male', relation: 'Son', phoneNumber: '123-456-7890', },
        { id: 2, name: 'Isha', age: 15, gender: 'Female', relation: 'Daughter', phoneNumber: '987-654-3210', },
        { id: 3, name: 'Aradhya', age: 20, gender: 'Female', relation: 'Daughter', phoneNumber: '555-123-4567', },
        { id: 4, name: 'Vihaan', age: 50, gender: 'Male', relation: 'Husband', phoneNumber: '555-987-6543', },]
    const sampleAppointmentData = [
        { id: 1, name: 'Aarav', age: 10, gender: 'Male', relation: 'Son', doctor: 'Dr.Natasha', specialization: 'Orthopedic', issue: "Sports injury: pain, swelling, limited motion.", date: "20-03-2024", status: 'Completed', followup: 'Follow Up' },
        { id: 2, name: 'Vihaan', age: 50, gender: 'Female', relation: 'Husband', doctor: 'Dr.Kishore', specialization: 'Cardiologist', issue: "Chest pain .", date: "20-01-2024", status: 'Completed' },
    ]
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleChipClick = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: '10px' }}>
                <Grid style={{
                    backgroundImage: 'linear-gradient(to right, #fff, #36c0d3)', height: "60px", display: "flex", width: "100%",
                    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                }} >
                    <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
                        fontFamily: "sans-serif", fontSize: "24px", fontWeight: 600,
                        color: "#05445E"
                    }}>Customer Details</Typography>
                        <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
                            <Link underline="hover" color="inherit" to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
                                Home
                            </Link>
                            <Link underline="hover" color="inherit" to="/patients" style={{ textDecoration: "none", color: "inherit" }}>
                                Customers
                            </Link>
                            <Typography color="#189ab4">Customer Details</Typography>
                        </Breadcrumbs>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                    <Grid item md={3} sx={{ position: 'relative' }}>
                        <Paper sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "#d1f1f4", alignItems: "center", flexDirection: 'column', padding: "10px" }}>
                            <Box sx={{ paddingBottom: 1, paddingTop: 1 }}><Avatar alt="woman" src={woman} style={{ width: "100px", height: "100px", backgroundColor: "#05445e" }} />
                                <Typography variant="h5" style={{ color: "#05445e", fontWeight: "600", textAlign: "center" }}>
                                    Anisha
                                </Typography>
                                <Typography variant="subtitle1" style={{ color: "#05445e", fontWeight: "500", textAlign: "center" }}>
                                    32 Years
                                </Typography>
                            </Box>
                            <Divider sx={{ border: "1px solid #05445e", width: "100%" }} />
                            <Box sx={{ paddingTop: 1 }}>
                                <Box style={{ display: "flex", justifyContent: 'space-between', width: '100%', marginBottom: "10px" }}>
                                    <Typography style={{ fontSize: '16px', color: '#05445e', fontWeight: "600" }}>
                                        Gender
                                    </Typography>
                                    <Typography style={{ fontSize: '16px', textAlign: "end", color: '#05445e' }}>
                                        Female
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", justifyContent: 'space-between', width: '100%', marginBottom: "10px", }}>
                                    <Typography style={{ fontSize: '16px', color: '#05445e', fontWeight: "600" }}>
                                        DOB
                                    </Typography>
                                    <Typography style={{ fontSize: '16px', textAlign: "end", color: '#05445e' }}>
                                        25 March 2001
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", justifyContent: 'space-between', gap: 20, width: '100%', marginBottom: "10px", }}>
                                    <Typography style={{ fontSize: '16px', color: '#05445e', fontWeight: "600" }}>
                                        Contact No.
                                    </Typography>
                                    <Typography style={{ fontSize: '16px', textAlign: "end", color: '#05445e' }}>
                                        7998125641
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", justifyContent: 'space-between', width: '100%', marginBottom: "10px", }}>
                                    <Typography style={{ fontSize: '16px', color: '#05445e', fontWeight: "600" }}>
                                        Address
                                    </Typography>
                                    <Typography style={{ fontSize: '16px', textAlign: "end", color: '#05445e' }}>
                                        Bangalore
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", justifyContent: 'space-between', width: '100%', marginBottom: "10px", }}>
                                    <Typography style={{ fontSize: '16px', color: '#05445e', fontWeight: "600" }}>
                                        Blood Group
                                    </Typography>
                                    <Typography style={{ fontSize: '16px', textAlign: "end", color: '#05445e' }}>
                                        A+
                                    </Typography>
                                </Box>
                                <Box style={{ display: "flex", justifyContent: 'space-between', width: '100%', marginBottom: "10px", }}>
                                    <Typography style={{ fontSize: '16px', color: '#05445e', fontWeight: "600" }}>
                                        Health Credits
                                    </Typography>
                                    <Typography style={{ fontSize: '16px', textAlign: "end", color: '#05445e' }}>
                                        500
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={9}>
                        <Paper sx={{ padding: '10px' }}>
                            <Typography variant="h5" sx={{ margin: '10px', fontWeight: "600", color: '#05445e' }}>
                                Family Member
                            </Typography>
                            <TableContainer component={Paper} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow style={{ backgroundColor: '#f3fbfd' }}>
                                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Id</TableCell>
                                            <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Name</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Age</TableCell>
                                            <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Gender</TableCell>
                                            <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Relation</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Phone Number</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }} >Details</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {sampleData.map((row) => (
                                            <TableRow key={row.id} >
                                                <TableCell align="center" >{row.id}</TableCell>
                                                <TableCell sx={{ fontWeight: "600", fontSize: "17px", color: "#189ab4" }} >{row.name}</TableCell>
                                                <TableCell align="center"  >{row.age}</TableCell>
                                                <TableCell   >{row.gender}</TableCell>
                                                <TableCell   >{row.relation}</TableCell>
                                                <TableCell align="center"  >{row.phoneNumber}</TableCell>
                                                <TableCell align="center"  > <Button
                                                    style={{ color: '#189ab4' }}
                                                >
                                                    <BsFillInfoCircleFill style={{ fontSize: '20px' }} />
                                                </Button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography variant="h5" sx={{ margin: '10px', fontWeight: "600", color: '#05445e' }}>
                                Appointment Scheduled
                            </Typography>
                            <TableContainer component={Paper} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow style={{ backgroundColor: '#f3fbfd' }}>
                                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Id</TableCell>
                                            <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Paitent Name</TableCell>

                                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Age & Gender</TableCell>

                                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Doctor</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Date</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Issue</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {sampleAppointmentData.map((row) => (
                                            <TableRow key={row.id} >
                                                <TableCell align="center" >{row.id}</TableCell>
                                                <TableCell ><Typography variant="subtitle1" sx={{ fontWeight: "600", color: "#189ab4" }}>{row.name}</Typography><Typography variant="body2" sx={{ color: "#777" }}>{row.relation}</Typography></TableCell>

                                                <TableCell align="center"  >{row.age},{row.gender}</TableCell>

                                                <TableCell align="center"  ><Typography variant="subtitle1" sx={{ fontWeight: "500" }}>{row.doctor}</Typography><Typography variant="body2" sx={{ color: "#777" }}>{row.specialization}</Typography></TableCell>
                                                <TableCell align="center"  >{row.date}</TableCell>
                                                <TableCell align="center"  >{row.issue}</TableCell>

                                                <TableCell align="center"  >  <Chip
                                                    label={row.status}
                                                    style={{
                                                        fontSize: '14px',
                                                        backgroundColor:
                                                            row.status === 'Completed' ? '#d2f8d2' :
                                                                row.status === 'Cancelled' ? '#ffe4e1' :
                                                                    row.status === 'Pending' ? '#ffe8cc' : '', // Light orange for Pending
                                                        color:
                                                            row.status === 'Completed' ? 'green' :
                                                                row.status === 'Cancelled' ? 'red' :
                                                                    row.status === 'Pending' ? '#FFA500' : '' // Orange text for Pending
                                                    }}
                                                />
                                                    {row.followup === 'Follow Up' && (
                                                        <Chip
                                                            label={row.followup}
                                                            style={{ fontSize: '14px', marginTop: '5px' }}
                                                            onClick={handleChipClick}
                                                        />
                                                    )}
                                                    <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                                                        <DialogTitle>Follow-up Details</DialogTitle>
                                                        <IconButton
                                                            sx={{
                                                                position: 'absolute',
                                                                right: 8,
                                                                top: 8,
                                                                color: 'inherit',
                                                            }}
                                                            onClick={handleCloseDialog}
                                                        >
                                                            <CloseIcon />
                                                        </IconButton>
                                                        <DialogContent>
                                                            <DialogContentText>
                                                                <strong>Patient Name:</strong> John Doe<br />
                                                                <strong>Patient ID:</strong> PAT12345<br />
                                                                <strong>Doctor Name:</strong> Dr. Smith<br />
                                                                <strong>Doctor ID:</strong> DOC67890<br />
                                                                <strong>Follow-up Reason:</strong> Regular check-up<br />
                                                                <strong>Follow-up Date:</strong> 2024-03-28<br />
                                                                <strong>Follow-up Time:</strong> 10:00 AM<br />
                                                                <strong>Follow-up Method:</strong> Video call<br />
                                                                <strong>Follow-up Status:</strong> Scheduled<br />
                                                            </DialogContentText>
                                                        </DialogContent>

                                                    </Dialog>

                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography variant="h5" sx={{ margin: '10px', fontWeight: "600", color: '#05445e' }}>
                                Consulted Doctors
                            </Typography>
                            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
                                <Grid item md={4}>
                                    <Paper sx={{ display: 'flex', flexDirection: 'row', paddingTop: 1, paddingBottom: 1, paddingRight: 1, backgroundColor: "#eaf7f9" }}>
                                        <Avatar alt='doctor' sx={{ width: 90, height: 100 }} src={doctor} />
                                        <Box > <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: "600" }}>Dr. Alia Reddy</Typography>
                                            <Typography variant="body1" sx={{ color: "#777" }}>Psychotherapy</Typography>
                                            <Typography variant="body2" sx={{ fontSize: "12px", color: "#777" }}>4 Years Experienced</Typography>
                                            <Typography variant="body2" sx={{ fontSize: "13px", color: "#777" }}>Consulted On: 21-02-2024</Typography></Box>
                                    </Paper>
                                </Grid>
                                <Grid item md={4} >
                                    <Paper sx={{ display: 'flex', flexDirection: 'row', paddingTop: 1, paddingBottom: 1, paddingRight: 1, backgroundColor: "#eaf7f9" }}>
                                        <Avatar alt='doctor' sx={{ width: 90, height: 100 }} src={doctor} />
                                        <Box > <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: "600" }}>Dr. Alia Reddy</Typography>
                                            <Typography variant="body1" sx={{ color: "#777" }}>Psychotherapy</Typography>
                                            <Typography variant="body2" sx={{ fontSize: "12px", color: "#777" }}>4 Years Experienced</Typography>
                                            <Typography variant="body2" sx={{ fontSize: "13px", color: "#777" }}>Consulted On: 21-02-2024</Typography></Box>
                                    </Paper>
                                </Grid>
                                <Grid item md={4} >
                                    <Paper sx={{ display: 'flex', flexDirection: 'row', paddingTop: 1, paddingBottom: 1, paddingRight: 1, backgroundColor: "#eaf7f9" }}>
                                        <Avatar alt='doctor' sx={{ width: 90, height: 100 }} src={doctor} />
                                        <Box > <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: "600" }}>Dr. Alia Reddy</Typography>
                                            <Typography variant="body1" sx={{ color: "#777" }}>Psychotherapy</Typography>
                                            <Typography variant="body2" sx={{ fontSize: "12px", color: "#777" }}>4 Years Experienced</Typography>
                                            <Typography variant="body2" sx={{ fontSize: "13px", color: "#777" }}>Consulted On: 21-02-2024</Typography></Box>
                                    </Paper>
                                </Grid>

                            </Grid>
                            <Typography variant="h5" sx={{ margin: '10px', fontWeight: "600", color: '#05445e' }}>
                                Medicines Ordered
                            </Typography>
                            <Box>
                                <TableContainer component={Paper} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
                                    <Table aria-label="customized table">
                                        <TableHead>
                                            <TableRow style={{ backgroundColor: '#f3fbfd' }}>
                                                <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Order Id</TableCell>
                                                <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Product</TableCell>
                                                <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Order Date</TableCell>
                                                <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Delivery Date</TableCell>
                                                <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Amount</TableCell>
                                                <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {medicinesOrders.map((order) => (
                                                <TableRow key={order.orderId}>

                                                    <TableCell align="center">{order.orderId}</TableCell>
                                                    <TableCell
                                                        align="center"
                                                        sx={{ display: 'flex', flexDirection: 'row', cursor: "pointer" }}
                                                        onClick={() => handleClick(order)}
                                                    >
                                                        <img src={apple} style={{ width: '50px', height: '50px' }}alt="picture" />
                                                        <Box>
                                                            <Typography sx={{ marginTop: '10px' }}>{order.product}</Typography>
                                                            Qty: {order.quantity}
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align="center" >{order.orderedDateTime}</TableCell>

                                                    <TableCell align="center">{order.deliveryDateTime}</TableCell>
                                                    <TableCell align="center">2000/-</TableCell>
                                                    <TableCell align="center">
                                                        <Chip
                                                            label={order.deliveryStatus}
                                                            style={{
                                                                fontSize: '14px',
                                                                backgroundColor:
                                                                    order.deliveryStatus === 'Delivered' ? '#d2f8d2' :
                                                                        order.deliveryStatus === 'Cancelled' ? '#ffe4e1' :
                                                                            order.deliveryStatus === 'Pending' ? '#ffe8cc' : '', // Light orange for Pending
                                                                color:
                                                                    order.deliveryStatus === 'Delivered' ? 'green' :
                                                                        order.deliveryStatus === 'Cancelled' ? 'red' :
                                                                            order.deliveryStatus === 'Pending' ? '#FFA500' : '' // Orange text for Pending
                                                            }}
                                                        /></TableCell>

                                                </TableRow>
                                            ))}
                                            <Dialog open={open} onClose={handleClose} maxWidth="md">
                                                <DialogTitle>
                                                    Order Details
                                                    <CloseIcon onClick={handleClose} style={{ float: 'right', cursor: 'pointer' }} /> {/* Close icon */}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={6} >
                                                            <Typography>Shipment 1 of 1 (#ORD123)</Typography>
                                                            <Divider sx={{ border: "1px thin black" }} />
                                                            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: "20px" }}>
                                                                <div>
                                                                    <Typography sx={{ fontWeight: "600" }}>March 25</Typography>
                                                                    <Typography>7:20</Typography>
                                                                </div>
                                                                <FaCircleDot style={{ color: "green", fontSize: "32px" }} />
                                                                <div>
                                                                    <Typography sx={{ fontWeight: "600" }}>Online Purchase</Typography>

                                                                    <Typography>303,C-Block,Satya Kalyan Appartments, Vemulavalasa, Anandapuram , Visakhapatnam, Andhra Pradesh -530052</Typography>
                                                                    <Typography>Phone Number : 7997148737</Typography>
                                                                </div>
                                                            </Box>
                                                            <Divider sx={{ border: "1px thin black" }} />
                                                            <Typography sx={{ fontWeight: "600" }}>SHIPPING DETAILS</Typography>
                                                            <TableContainer>
                                                                <Table>
                                                                    <TableHead>
                                                                        <TableRow style={{ backgroundColor: "#eaf7f9" }}>
                                                                            <TableCell align="center" sx={{ fontWeight: "600", fontSize: '13px' }}>
                                                                                ITEM NAME
                                                                            </TableCell>
                                                                            <TableCell align="center" sx={{ fontWeight: "600", fontSize: '13px' }}>
                                                                                QTY
                                                                            </TableCell>
                                                                            <TableCell align="center" sx={{ fontWeight: "600", fontSize: '13px' }}>
                                                                                MRP VALUE
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        <TableRow>
                                                                            <TableCell align="center">Apple Cider</TableCell>
                                                                            <TableCell align="center">1</TableCell>
                                                                            <TableCell align="center">₹ 186.60</TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell align="center">Bevon</TableCell>
                                                                            <TableCell align="center">1</TableCell>
                                                                            <TableCell align="center">₹ 162.40</TableCell>
                                                                        </TableRow>
                                                                    </TableBody>
                                                                </Table>
                                                            </TableContainer>

                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Box>
                                                                <Typography sx={{ fontWeight: "600" }}>STORE ADDRESS</Typography>
                                                                <Typography>Survey No. 188/1, Baccannapalem ,Revallapalem Road, Near D-Mart,Madhurawada (Mo),Vizag Dt -530048, AP</Typography>
                                                                <Typography>Phone Number:8352010255</Typography>
                                                            </Box>
                                                            <Divider sx={{ border: "1px thin black" }} />
                                                            <Box>
                                                                <Typography sx={{ fontWeight: "600" }}>PAYMENT DETAILS</Typography>
                                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                    <Typography>MRP Total</Typography>
                                                                    <Typography>₹ 349.00</Typography>
                                                                </Box>
                                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                    <Typography>Discount Total</Typography>
                                                                    <Typography>-₹ 49.00</Typography>
                                                                </Box>
                                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                    <Typography>Redeemed Amount</Typography>
                                                                    <Typography>-₹ 0.00</Typography>
                                                                </Box>
                                                                <Divider sx={{ border: "1px thin black" }} />
                                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                    <Typography sx={{ fontWeight: "600" }}>Total</Typography>
                                                                    <Typography sx={{ fontWeight: "600" }}>₹ 300.00</Typography>
                                                                </Box>

                                                            </Box>
                                                            <Divider sx={{ border: "1px thin black" }} />
                                                            <Box>
                                                                <Typography sx={{ fontWeight: "600" }}>PAYMENT METHOD</Typography>
                                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                    <Typography>Cash on Delivery</Typography>
                                                                    <Typography sx={{ fontWeight: "600" }}>₹ 300.00</Typography>
                                                                </Box>
                                                            </Box>

                                                        </Grid>
                                                    </Grid>
                                                </DialogContent>
                                            </Dialog>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Typography variant="h5" sx={{ margin: '10px', fontWeight: "600", color: '#05445e' }}>
                                Lab Tests
                            </Typography>
                            <Box>
                                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
                                    <Grid item md={6}>
                                        <div onClick={handlePaperClick} style={{ cursor: 'pointer' }}>
                                            <Paper sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: '10px', margin: '5px' }}>
                                                <div>
                                                    <Typography>Patient Name - Anisha</Typography>
                                                    <Typography>Age/Gender - 32 Years/Female</Typography>
                                                    <Typography>Lab Name - Apollo Diagnostics</Typography>
                                                    <Typography>Record Date - 27 Sep, 21</Typography>
                                                </div>
                                                <Box style={{ flexDirection: "column" }}>
                                                    <IconButton><MdDownload /></IconButton>
                                                    <IconButton><GrView /></IconButton>
                                                </Box>
                                            </Paper>
                                        </div>
                                    </Grid>
                                    <Grid item md={6} >
                                        <>
                                            {/* <div onClick={handlePaperClick} style={{ cursor: 'pointer' }}>
                                                <Paper sx={{ padding: '10px' }}>
                                                    <Box>
                                                        <Typography variant="body2" sx={{ fontSize: '12px' }}>Lab Report - Apollo</Typography>
                                                        <Typography variant="body2" sx={{ fontSize: '12px' }}>Reported Date - 21-Feb-2024</Typography>
                                                        <Grid sx={{ height: "80px", width: "100%", border: "1px solid #ccc", borderRadius: "20px" }}>
                                                            <img style={{ height: "100%", width: "100%", border: "1px solid #ccc", borderRadius: "20px" }} src="https://doctorc-app-india-public.s3.amazonaws.com/images/content/article/b5f7e40f-801b-11ec-9436-0a842c745700.png" alt="report" />
                                                        </Grid>
                                                        <Typography variant="body1" sx={{ fontSize: '14px' }}>Patient Name: Anisha</Typography>
                                                        <Typography variant="body1" sx={{ fontSize: '14px' }}>Patient Age: 32</Typography>
                                                        <Typography variant="body1" sx={{ fontSize: '14px' }}>Patient Gender: Female</Typography>
                                                    </Box>
                                                </Paper>
                                            </div> */}
                                            <div onClick={handlePaperClick} style={{ cursor: 'pointer' }}>
                                                <Paper sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: '10px', margin: '5px' }}>
                                                    <div>
                                                        <Typography>Patient Name - Anisha</Typography>
                                                        <Typography>Age/Gender - 32 Years/Female</Typography>
                                                        <Typography>Lab Name - Apollo Diagnostics</Typography>
                                                        <Typography>Record Date - 27 Sep, 21</Typography>
                                                    </div>
                                                    <Box style={{ flexDirection: "column" }}>
                                                        <IconButton><MdDownload /></IconButton>
                                                        <IconButton><GrView /></IconButton>
                                                    </Box>
                                                </Paper>
                                            </div>
                                            <Dialog open={openDialog} onClose={handleCloseDialog1} maxWidth='md'>
                                                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', gap: 5, alignItems: 'center' }}>
                                                    LAB REPORT - Apollo Diagnostics
                                                    <Grid>
                                                        <IconButton aria-label="download" onClick={handleCloseDialog1}>
                                                            <MdDownload />
                                                        </IconButton>
                                                        <IconButton aria-label="close" onClick={handleCloseDialog1}>
                                                            <CloseIcon />
                                                        </IconButton>
                                                    </Grid>
                                                </DialogTitle>
                                                <DialogContent>
                                                    <Carousel autoPlay={false} swipe={true} animation="slide" timeout={500}>
                                                        <img src="https://images.drlogy.com/assets/uploads/img/general/drlogy-app/CSF%20Examination%20Example,%20Format,%20Sample%20and%20Template%20-%20Drlogy%20Lab%20Reports.webp" alt="report" style={{ width: "450px", height: "500px", objectFit: "contain" }} />
                                                        <img src="https://images.drlogy.com/assets/uploads/img/general/drlogy-app/CSF%20Examination%20Example,%20Format,%20Sample%20and%20Template%20-%20Drlogy%20Lab%20Reports.webp" alt="report" style={{ width: "450px", height: "500px", objectFit: "contain" }} />
                                                        <img src="https://images.drlogy.com/assets/uploads/img/general/drlogy-app/CSF%20Examination%20Example,%20Format,%20Sample%20and%20Template%20-%20Drlogy%20Lab%20Reports.webp" alt="report" style={{ width: "450px", height: "500px", objectFit: "contain" }} />
                                                    </Carousel>

                                                </DialogContent>
                                            </Dialog>
                                        </>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider >
    );
}
export default PatientProfile;