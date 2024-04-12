import React, { useEffect, useState } from 'react';
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
    Breadcrumbs,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from 'react-router-dom';
import AppintmentChart from './AppintmentChart';
import { deepOrange, green, deepPurple, teal, indigo } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import ConsultDcotorAppointmentChart from './AppintmentChart';

const ConsultDoctorProfile = () => {
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

    const patientData = [
        { id: 1, name: 'Alice Smith', gender: 'Female', age: 35, problem: 'Fever', appointmentDate: '2024-03-19' },
        { id: 2, name: 'Bob Johnson', gender: 'Male', age: 45, problem: 'Hypertension', appointmentDate: '2024-03-20' },
        { id: 3, name: 'Charlie Brown', gender: 'Male', age: 25, problem: 'Asthma', appointmentDate: '2024-03-21' },
        { id: 4, name: 'Diana Miller', gender: 'Female', age: 50, problem: 'Hyperlipidemia ', appointmentDate: '2024-03-22' },
        { id: 5, name: 'Smith Miller', gender: 'Male', age: 50, problem: 'Hyperlipidemia ', appointmentDate: '2024-03-22' },
    ];

    const dummyReviews = [
        {
            user: "Deepika",
            rating: 4,
            comment:
                "Excellent service, well-stocked inventory, knowledgeable staff, quick and accurate prescriptions.",
        },
        {
            user: "Anjali",
            rating: 5,
            comment:
                "Very good service overall, minor issues like occasional stock-outs or longer wait times.",
        },
        {
            user: "Ramesh",
            rating: 3,
            comment:
                "Average service, some areas for improvement such as slower service during peak hours or limited selection of products.",
        },
        {
            user: "Maya",
            rating: 2,
            comment:
                "Below-average service, frequent stock-outs, long wait times, or lack of professionalism.",
        },
    ];


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const navigate = useNavigate()

    const [selectedSpecification, setSelectedSpecification] = useState('All');
    const [specificationMenuAnchorEl, setSpecificationMenuAnchorEl] = useState(null);
    const handleSpecificationMenuClose = () => {
        setSpecificationMenuAnchorEl(null);
    };
    const handleSpecificationMenuClick = (event) => {
        setSpecificationMenuAnchorEl(event.currentTarget);
        setSelectedSpecification('');
    };

    const handleSpecificationSelect = (specification) => {
        setSelectedSpecification(specification);
        setSpecificationMenuAnchorEl(null);
    };


    const services = [
        { name: 'Skin Consultation', price: 60 },
        { name: 'Acne Treatment', price: 80 },
        { name: 'Skin Biopsy', price: 100 },
        { name: 'Chemical Peel', price: 120 },
    ];
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }


    const [showAllAppointments, setShowAllAppointments] = useState(false);
    const [showAllPatients,setShowAllPatients]=useState(false)
    const [showAllServices,setShowAllServices]=useState(false)
    const filteredAppointments = showAllAppointments ? Appointments : Appointments.slice(0, 3);
    const avatarColors = [deepOrange[500], deepPurple[500], teal[500], green[500], indigo[500]];

    const FilterPatientData=showAllPatients ? patientData : patientData.slice(0, 4);
    const FilterService=showAllServices ? services : services.slice(0, 5);
    useEffect(() => {
        const counters = document.querySelectorAll(".counter");
    
        counters.forEach((counter) => {
          counter.innerText = "0";
          const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 200;
            if (count < target) {
              counter.innerText = `${Math.ceil(count + increment)}`;
              setTimeout(updateCounter, 1);
            } else counter.innerText = target;
          };
          updateCounter();
        });
      }, []);
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
                    }}>Consult Doctor Profile</Typography>
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
                        <Link
                            underline="hover" 
                            color="inherit"
                            to="/appointments"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}>
                            Appointments
                        </Link>
                        <Typography color="#189ab4" >Doctor Profile</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>


            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={6} >
                <Card sx={{
                    display: 'flex', flexDirection: "column",
                    justifyContent: "flex-start", marginTop: "50px", height: "auto",
                }}>
                    <CardContent style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                        <img style={{ height: "30%", width: "30%", margin: "15px 15px 0px 15px" }}
                            src="https://medical-dash.netlify.app/data/hos-dash/doc1.jpg" alt="Doctor" />
                        <div style={{
                            display: "flex", justifyContent: "flex-start", flexDirection: "column",
                            padding: "20px 10px 0px 20px"
                        }}>
                            <Typography variant='h5' style={{ color: "#05445E" }}>Sarah Johnson</Typography>
                            <Typography variant='h6' style={{ color: "#4e4f4f", }}>General Medicine</Typography>
                            <Typography variant='h6' style={{ color: "#4e4f4f", }}>Care Hospital</Typography>
                            <Typography variant='h6' style={{ color: "#4e4f4f", }}>Vizag</Typography>
                            <Typography variant='h6' style={{ color: "#4e4f4f", }}>123-456-7890</Typography>
                            <Typography variant='h6' style={{ color: "#4e4f4f", }}>saran@gmail.com</Typography>
                        </div>
                      
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={5.5} style={{backgroundColor:"#fff",marginTop: "67px", height:"255px", marginLeft:"10px"}}>
                    <ConsultDcotorAppointmentChart/>
                </Grid>
            

            </Grid>

            {/**Appointments Table*/}
            <Grid container spacing={1.5} style={{ marginTop: "2%" }}>
                <Grid item xs={12} sm={12} md={6} >
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
                                    <TableCell>Name</TableCell>
                                    <TableCell>Date-Time</TableCell>
                                    <TableCell>Problem</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredAppointments.map((request) => (
                                    <TableRow key={request.id}>
                                        <TableCell>{request.name}</TableCell>
                                        <TableCell>{request.date} - {request.time}</TableCell>
                                        <TableCell>{request.problem}</TableCell>
                                        <TableCell>{request.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        {!showAllAppointments && Appointments.length > 5 && (
                            <Button onClick={() => navigate("/doctor-appointments")} style={{ marginTop: '10px' }}>View More</Button>
                        )}
                    </TableContainer>

                </Grid>
                {/**patients List */}
                <Grid item xs={12} sm={12} md={3} >
                    <Grid container justifyContent="space-between" alignItems="center" style={{ backgroundColor: "#fff", }}>
                        <Typography variant="h5" gutterBottom style={{ fontFamily: "sans-serif", fontSize: "22px", color: "#04374d", padding: "20px 0 0 20px", fontWeight: "600" }}>Patients List</Typography>
                    </Grid>
                    <TableContainer component={Paper} style={{ overflowX: "hidden" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Age</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {FilterPatientData.map((request) => (
                                    <TableRow key={request.id}>
                                        <TableCell>{request.name}</TableCell>
                                        <TableCell>{request.gender}</TableCell>
                                        <TableCell>{request.age}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        {/* {!showAllPatients && patientData.length > 5 && (
                            <Button onClick={() => navigate("/doctor-appointments")} style={{ marginTop: '10px' }}>View More</Button>
                        )} */}
                    </TableContainer>
                </Grid>
                {/**Price List */}
                <Grid item xs={12} sm={12} md={3} >
                    <Grid container justifyContent="space-between" alignItems="center" style={{ backgroundColor: "#fff", }}>
                        <Typography variant="h5" gutterBottom style={{ fontFamily: "sans-serif", fontSize: "22px", color: "#04374d", padding: "20px 0 0 20px", fontWeight: "600" }}>Service Prices</Typography>
                    </Grid>
                    <TableContainer component={Paper}>
                        <Table aria-label="service price list table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Service</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {FilterService.map((service, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {service.name}
                                        </TableCell>
                                        <TableCell align="right">${service.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            {/* {!showAllServices && service.length > 5 && (
                            <Button onClick={() => navigate("/doctor-appointments")} style={{ marginTop: '10px' }}>View More</Button>
                        )} */}
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

            <Grid style={{ marginTop: "40px", }}>
                <Card sx={{ width: "100%", height: 'auto', display: 'flex', flexDirection: 'column', padding: "10px" }}>

                    <CardContent>
                        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: "#04374d" }}>
                            About
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Completed my graduation in Gynaecologist Medicine from the well known and renowned institution of India - SARDAR PATEL MEDICAL COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University. I ranked in University exams from the same university from 1996-01.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Worked as Professor and Head of the department; Community medicine Department at Sterline Hospital, Rajkot, Gujarat from 2003-2015.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            And I was lucky to train in a collegial environment where we called most of our attendings by their first names. If only doctors did it that way outside the Midwest. One of my attendings even made the argument that it is safer for patient care because it’s easier for subordinates to raise concerns when they’re not verbally kowtowing to their superior. I never respected a white-haired surgeon any less when I addressed him by his first name. In fact, I saw that in non-clinical science, it is commonplace for the most junior researchers to call the most celebrated senior scientists by their first names.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            When I offer or recommend products, I do so because I have actively researched them and find they are the best in that category for your health. I ignore substandard products, and products not directly pertinent to your health, regardless of any potential financial upside.
                        </Typography>
                        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: "#04374d" }}>Education</Typography>
                        <Divider />
                        <ul>
                            <li>M.B.B.S., Gujarat University, Ahmedabad, India.</li>
                            <li>M.S., Gujarat University, Ahmedabad, India.</li>
                            <li>SPINAL FELLOWSHIP Dr. John Adam, Allegimeines Krakenhaus, Schwerin, Germany.</li>
                            <li>Fellowship in Endoscopic Spine Surgery Phoenix, USA.</li>
                            <li>D.N.B from AIIMS</li>
                        </ul>
                        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: "#04374d" }}>
                            Experience
                        </Typography>
                        <Divider />
                        <ul>
                            <li>One year rotatory internship from April-2009 to March-2010 at B. J. Medical College, Ahmedabad.</li>
                            <li>Three year residency at V.S. General Hospital as a resident in orthopedics from April - 2008 to April - 2011.</li>
                            <li>Worked as a part-time physiotherapist in Apang Manav Mandal from 1st June 2004 to 31st Jan 2005.</li>
                            <li>Clinical and Research fellowship in Scoliosis at Shaurashtra University and Medical Centre (KUMC), Krishna Hospital, Rajkot from April 2013 to June 2013.</li>
                            <li>2.5 Years worked at Mahatma Gandhi General Hospital, Surendranagar.</li>
                            <li>Consultant Orthopedics Surgeon Jalna 2 years.</li>
                        </ul>
                        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: "#04374d" }}>
                            Conferences, Courses &amp; Workshops Attended
                        </Typography>
                        <Divider />
                        <ul>
                            <li>3 days conference of Indian Orthopedics Association (IOACON) held in December 2001 in Ahmedabad, Gujarat.</li>
                            <li>4th Annual Karnataka state physiotherapy students conference</li>
                            <li>3 day conference of Association of Spine Surgeons of India(ASSICON) held in Jan 2007 in Ahmedabad, India.</li>
                            <li>16th Annual Conference GOACON ' 98 Ahmedabad CME 6th February, 1998</li>
                            <li>5 day conference of Indian Orthopedic Association (IOACON) held in Dec.2005 in Mumbai, India.</li>
                            <li>Indian Medical Association Kapadwanj C.M.E. on 22nd April, 2004.</li>
                            <li>Post Graduate lecture course for Gujarat Orthopaedic Association Ahmedabad 6th to 7th August, 2005.</li>
                        </ul>
                        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: "#04374d" }}>
                            Professional Affiliations
                        </Typography>
                        <Divider />
                        <ul>
                            <li>Life member: Association of Spine Surgeons of India.</li>
                            <li>Life member: Gujarat Orthopaedic Association.</li>
                            <li>Life Member: The Indian Society for Bone and Mineral Research (ISBMR).</li>
                            <li>Life member: Ahmedabad Orthopaedic Society</li>
                        </ul>
                    </CardContent>
                </Card>
            </Grid>
            {/** Doctor Reviews */}
            <Grid style={{ backgroundColor: "#fff", marginTop: "40px", }}>
                <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: "#04374d", padding: "15px 0 5px 25px" }}>
                    Reviews
                </Typography>
                <Divider sx={{ margin: '10px 0', }} />
                {dummyReviews.map((review, index) => (
                    <>
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                                padding: "5px 5px 5px 10px"
                            }}
                        >
                            <Avatar sx={{ bgcolor: avatarColors[index % avatarColors.length], marginRight: "10px" }}>
                                {review.user.charAt(0)}
                            </Avatar>
                            <Box>
                                <Typography variant="body1" gutterBottom>
                                    <strong>{review.user}</strong> {[...Array(review.rating)].map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            sx={{ color: "#DC7844", fontSize: "1.2rem", marginRight: "2px" }}
                                        />
                                    ))}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {review.comment}
                                </Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ margin: '10px 0' }} />
                    </>
                ))}
            </Grid>

           
           
        </Grid>

    );
};

export default ConsultDoctorProfile;