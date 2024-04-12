import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, MenuItem, Select, Breadcrumbs } from "@mui/material";
import doctor from "../../assets/icons/certificate.png";
import lab from "../../assets/icons/blood-test.png";
import medicines from "../../assets/icons/drugstore.png";
import receptionist from "../../assets/icons/receptionist.png";
import appointment from "../../assets/icons/appointment.png";
import order from "../../assets/icons/shopping-list.png";
import payments from "../../assets/icons/credit-card.png";

import SecondChart from "./SecondChart";
import PatientsAgeAnalysis from "./PatinentAgeChart";
import Patient from "../../assets/icons/examination.png"
import DeseaseAnalysis from "./DeseaseAnalysis";

import { FaArrowUp } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";
import DoctorsTable from "./DoctorsTable";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import MedicalAnalysisChart from "./MedicalAnalysisChart";
import { Link } from "react-router-dom";


const Dashboard = () => {
    // Function to generate a random number between min and max
    // const getRandomCount = (min, max) => {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // };

    const [selectedCity, setSelectedCity] = useState('');

    const handleChange = (event) => {
        setSelectedCity(event.target.value);
    };
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box>
            <Grid style={{
                 backgroundImage: "linear-gradient(to right, #fff, #36c0d3)", height: "60px", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            }} >
                <Grid style={{
                    display: "flex", flexDirection: "column", justifyContent: "flex"
                }} >
                    <Typography variant="h5" style={{
                        fontFamily: "Poppins, sans-serif", fontSize: "24px", fontWeight: 600,
                        padding: "0 0 0 10px", color: "#05445E"
                    }}>Dashboard</Typography>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            color="inherit"
                            to="/dashboard"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}>
                            Home
                        </Link>
                        <Typography color="#189ab4" > Dashboard</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "10px" }} style={{ display: "flex", justifyItems: "flex-start", flexWrap: "wrap" }}>
                {/* First Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #fff, #75E6DA)", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img
                                    src={doctor}
                                    alt="Doctor Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }}
                                />
                                <div style={{ padding: "auto" }}>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} textAlign={"left"} >Doctors</Typography>
                                    <Typography variant={isSmallScreen ? "h4" : "h5"} textAlign={"left"}>3000</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Second Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #fff, #75E6DA)", width: "100%" }}>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img
                                    src={medicines}
                                    alt="Medicines Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }}
                                />
                                <div style={{ padding: "auto" }}>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} textAlign={"left"}>Pharmacies</Typography>
                                    <Typography variant={isSmallScreen ? "h4" : "h5"} textAlign={"left"}>1200</Typography></div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Third Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #fff, #75E6DA)", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img
                                    src={lab}
                                    alt="Lab Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }}
                                />
                                <div style={{ padding: "auto" }}>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} textAlign={"center"}>Laboratories</Typography>
                                    <Typography variant={isSmallScreen ? "h4" : "h5"}>2500</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Fourth Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to right, #fff, #75E6DA)", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img
                                    src={receptionist}
                                    alt="Receptionist Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }}
                                />
                                <div style={{ padding: "auto" }}>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} textAlign={"center"}>Clinics</Typography>
                                    <Typography variant={isSmallScreen ? "h4" : "h5"}>1500</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                {/* First Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent style={{
                            display: "flex",
                            alignItems: "center",
                            background: "linear-gradient(to left, #189AB4, #D4F1F4)", width: "100%",
                        }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={appointment}
                                    alt="Appointment Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }} />
                                <div>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"} >Total Appointments</Typography>
                                    <Typography variant="subtitle1" >5500</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </Grid>
                {/* Second Card */}
                <Grid item xs={12} sm={6} md={3}>

                    <Card>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to left, #189AB4, #D4F1F4)", width: "100%" }}>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={order}
                                    alt="Appointment Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }} />
                                <div>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"}>Total Orders</Typography>
                                    <Typography variant="subtitle1">5500</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Third Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to left, #189AB4, #D4F1F4)", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={payments}
                                    alt="Appointment Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }} />
                                <div>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"}>Total Payments</Typography>
                                    <Typography variant="subtitle1">7500</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Fourth Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent style={{ display: "flex", alignItems: "center", background: "linear-gradient(to left, #189AB4, #D4F1F4)", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={lab}
                                    alt="Appointment Icon"
                                    style={{ width: "100px", height: "auto", marginRight: "5px" }} />
                                <div>
                                    <Typography variant={isSmallScreen ? "h6" : "subtitle1"}>Total  Tests</Typography>
                                    <Typography variant="subtitle1">6000</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container sx={{ margin: "50px 0px 0px 0px", backgroundColor: "#fcfcfc", borderRadius: "6px" }}>
                <Typography style={{
                    fontFamily: "Poppins, sans-serif", fontSize: "30px", fontWeight: 600,
                    padding: "15px 0 15px 10px", color: "#05445E"
                }}> Users Analysis </Typography>
                <Grid>
                    {/* First Chart */}
                    <MedicalAnalysisChart />
                </Grid>

            </Grid>
            <Grid container sx={{ margin: "30px 0px 0px 0px", backgroundColor: "#fcfcfc", borderRadius: "6px" }}>
                <Typography style={{
                    fontFamily: "Poppins, sans-serif", fontSize: "30px", fontWeight: 600,
                    padding: "15px 0 15px 10px", color: "#05445E"
                }}> Healthcare Service Analysis </Typography>
                <Grid  >
                {/* Second Chart */}
                <SecondChart  />
                </Grid>
            </Grid>

            {/** First Card */}

            <Grid style={{
                backgroundColor: "#1976d2", height: "320px",
                width: "100%", margin: "40px 0 0 0", borderRadius: "6px",
                display: "flex", justifyContent: "space-between",
                padding: "15px 0px 0px 15px",
                flexWrap: "wrap"
            }}>

                <Grid style={{
                    display: "flex", flexDirection: "column",
                    justifyContent: "flex-start"
                }}>
                    <Grid style={{ display: "flex", flexDirection: "row", margin: "40px 0 0 0" }}>
                        <img src={Patient} alt="patient" style={{
                            width: "100px",
                            height: "100px", fontWeight: "bold", color: "#fff"
                        }} />

                        <Grid style={{ display: "flex", flexDirection: "column" }}>
                            <Typography style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "25px", fontWeight: 600,
                                padding: "15px 0 6px 10px", color: "#fff"
                            }}>

                                Patients Age
                            </Typography>

                            <Typography style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "18px",
                                padding: "0px 0 15px 10px", color: "#ebe8e8"
                            }}>
                                Analysis
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography style={{
                        fontFamily: "Poppins, sans-serif", fontSize: "18px",
                        padding: "90px 0px 15px 10px", color: "#ebe8e8"
                    }}>
                        <FaArrowUp style={{ height: "20px", width: "20px" }} /> Patients Count
                    </Typography>
                </Grid>
                <Grid>

                    {/* User Age Analysis Chart*/}

                    <PatientsAgeAnalysis />
                </Grid>
            </Grid>

            {/** Second Card */}


            <Grid style={{
                backgroundColor: "#062854", height: "320px",
                width: "100%", margin: "40px 0 0 0", borderRadius: "6px",
                display: "flex", justifyContent: "space-between",
                padding: "15px 0px 0px 15px",
                flexWrap: "wrap"
            }}>
                <Grid style={{
                    display: "flex", flexDirection: "column",
                    justifyContent: "flex-start"
                }}>
                    <Grid style={{ display: "flex", flexDirection: "row", margin: "20px 0 0 0" }}>
                        <img src={Patient} alt="patient" style={{
                            width: "100px",
                            height: "100px", fontWeight: "bold", color: "#fff"
                        }} />
                        <Grid style={{ display: "flex", flexDirection: "column" }}>
                            <Typography style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "25px", fontWeight: 600,
                                padding: "15px 0 6px 10px", color: "#fff"
                            }}>
                                Patients Diseases
                            </Typography>
                            <Typography style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "18px",
                                padding: "0px 0 15px 10px", color: "#ebe8e8"
                            }}>
                                Analysis
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography style={{
                        fontFamily: "Poppins, sans-serif", fontSize: "18px",
                        padding: "90px 0px 15px 10px", color: "#ebe8e8",
                    }}>
                        <GrAnalytics style={{ height: "20px", width: "20px" }} /> Patients Count
                    </Typography>
                </Grid>
                <Grid >
                    <DeseaseAnalysis />
                </Grid>



                {/**Earning Table */}
            </Grid>
            <Grid sx={{
                margin: "50px 0px 0px 0px",
                backgroundColor: "#ffffff", borderRadius: "2px",
                padding: "20px 0 15px 20px", height: "100px",
            }} >
                <Typography style={{
                    fontFamily: "sans-serif", fontSize: "20px",
                    color: "#05445E", fontWeight: "500"
                }}>Earning Report</Typography>

                <Typography style={{
                    fontFamily: "sans-serif", fontSize: "16px",
                    color: "#99abb4", fontWeight: "400"
                }}>Doctors Earning Report</Typography>

            </Grid>

            <Grid sx={{ margin: "40px 0px 0px 0px", backgroundColor: "#fcfcfc", borderRadius: "6px" }}>

                <DoctorsTable />

            </Grid>
            {/**Reviews Table */}



        </Box>
    );
};

export default Dashboard;
