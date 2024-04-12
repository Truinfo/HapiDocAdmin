import React, { useState } from "react";
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
import StarIcon from "@mui/icons-material/Star";
import { deepOrange, green, deepPurple, teal, indigo } from "@mui/material/colors";
import CircularProgress from '@mui/material/CircularProgress';
import verify from "../../assets/icons/approved.png"
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { MdOutlineVerified } from "react-icons/md";
function StoreProfile() {
    const [openEditModal, setOpenEditModal] = useState(false);
    const labData = {
        name: "PillPoint",
        address:
            "Address: 543, Pine Avenue, Jayanagar, Bangalore, Karnataka, India - 560001",
        rating: 4,
        availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        availableTime: "10:00AM - 9:00PM",
        image: "https://www.jagdambaayurvedic.com/img/slider/4.jpg",
        reviews: [
            { user: "User1", rating: 5, comment: "Great service!" },
            { user: "User2", rating: 4, comment: "Good experience." },
            { user: "User3", rating: 3, comment: "Average service." },
        ],
    };
    const navigate = useNavigate()
    const avatarColors = [deepOrange[500], deepPurple[500], teal[500], green[500], indigo[500]];
    // Calculate average rating
    const totalRatings = labData.reviews.length;
    const totalStars = labData.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
    );
    const avgRating = totalRatings === 0 ? 0 : totalStars / totalRatings;
    const ratings = [
        { stars: 1, count: 5 },
        { stars: 2, count: 10 },
        { stars: 3, count: 15 },
        { stars: 4, count: 20 },
        { stars: 5, count: 25 },
    ];
    const totalRatingsStars = ratings.reduce(
        (acc, rating) => acc + rating.count,
        0
    );
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
        },
        // Add more orders with customer details as needed
    ]);


    const handleEditClick = () => {
        setOpenEditModal(true);
    };
    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    };
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
    const [showAllAppointments, setShowAllAppointments] = useState(false);
    const filteredAppointments = showAllAppointments ? Orders : Orders.slice(0, 5);

    return (
        <>
            <Grid style={{
                backgroundColor: "#ffffff", height: "60px", display: "flex",
                flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            }} >
                <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
                    fontFamily: "sans-serif", fontSize: "30px", fontWeight: 700,
                    color: "#05445E"
                }}>PillPoint</Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
                        <Link underline="hover" color="inherit" to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
                            Home
                        </Link>
                        <Link underline="hover" color="inherit" to="/medicalstore" style={{ textDecoration: "none", color: "inherit" }}>
                            Medical Store
                        </Link>
                        <Typography color="#189ab4">PillPoint</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>
            <Card
                sx={{
                    width: "100%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    alignSelf: "flex-start",
                    marginBottom: "20px",
                    marginTop: "20px",
                    position: "relative",
                }}
            >
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={4}>
                            <img
                                src={labData.image}
                                alt="Lab"
                                style={{
                                    width: "100%",
                                    height: "250px", display: "block", margin: "auto"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <div style={{ flexDirection: 'row', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="h5" gutterBottom>
                                    {labData.name}
                                </Typography>
                                <img src={verify} alt='verified' style={{ height: 50, width: 50 }} />
                                {/* <MdOutlineVerified style={{ color: "#096e2c", fontSize: "50px", margin: "3%" }}/> */}
                            </div>
                            <Typography variant="body1" color="#000" gutterBottom>
                                {labData.address}
                            </Typography>
                            <Typography variant="body1" color="#000" gutterBottom>
                                Available Days: {labData.availableDays.join(", ")}
                            </Typography>
                            <Typography variant="body1" color="#000" gutterBottom>
                                Available Timings: {labData.availableTime}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography
                                    variant="body1"
                                    sx={{ marginRight: "5px", color: "#000000" }}
                                >
                                    Average Rating:
                                </Typography>
                                {[...Array(Math.round(labData.rating))].map((_, i) => (
                                    <StarIcon key={i} sx={{ color: "#DC7844", fontSize: "1.5rem" }} />
                                ))}
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: "20px", paddingLeft: "25px", paddingRight: "25px" }}>
                                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '20px', }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <CircularProgress variant="determinate" value={75} size={60} style={{ color: '#d30d40' }} />
                                        <Typography variant="body1" sx={{ position: 'absolute', fontSize: "25px", top: '50%', left: '40%', transform: 'translate(-150%, -50%)', textAlign: "center" }}>
                                            75
                                        </Typography>
                                    </Box>
                                    <Typography variant="h5" gutterBottom sx={{ marginLeft: "15px", fontWeight: "700", color: "#d30d40" }}>
                                        Orders
                                    </Typography>
                                </Box>
                                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '20px' }}>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <CircularProgress variant="determinate" value={100} size={60} sx={{ color: "#d0860c" }} />
                                        <Typography variant="body1" sx={{ position: 'absolute', fontSize: "25px", top: '50%', left: '33%', transform: 'translate(-150%, -50%)', padding: "2px" }}>
                                            50
                                        </Typography>
                                    </Box>
                                    <Typography variant="h5" gutterBottom sx={{ marginLeft: "15px", color: "#d0860c", fontWeight: "700" }}>
                                        Customers
                                    </Typography>
                                </Box>
                                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <CircularProgress variant="determinate" value={75} size={60} sx={{ color: "#0f6455" }} />
                                        <Typography variant="body1" sx={{ position: 'absolute', fontSize: "25px", top: '50%', left: '48%', transform: 'translate(-150%, -50%)', textAlign: "center" }}>
                                            4/5
                                        </Typography>
                                    </Box>
                                    <Typography variant="h5" gutterBottom sx={{ marginLeft: "15px", color: "#0f6455", fontWeight: "700" }}>
                                        Rating
                                    </Typography>
                                </Box>
                            </Box>


                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
            <Card
                sx={{
                    width: "100%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    marginTop: "15px", marginBottom: "20px"
                }}
            >
                <Typography
                    variant="h4"
                    style={{ color: "#033043", fontFamily: "sans-serif", fontSize: "30px", fontWeight: "700", marginLeft: "10px", paddingTop: "19px" }}
                >
                    About
                </Typography>
                <CardContent>
                    <Typography variant="body1">
                        At PillPoint Medical, we pride ourselves on being more than just a pharmacy — we are a trusted partner in your journey toward optimal health and well-being. Our commitment to serving the community extends beyond the walls of our store, as we actively engage in initiatives to promote public health and wellness.
                        <br /><br />
                        As advocates for personalized care, we recognize that each patient is unique, with distinct healthcare needs and preferences. That's why our approach goes beyond one-size-fits-all solutions. Our experienced pharmacists take the time to listen, understand, and collaborate with you to develop tailored treatment plans that align with your goals and lifestyle.
                        <br /><br />
                        In today's fast-paced world, convenience is key. That's why PillPoint Medical offers a range of innovative services designed to streamline your healthcare experience. From online prescription refills to home delivery options, we strive to make managing your medications as effortless as possible.
                        <br /><br />
                        Our dedication to advancing healthcare outcomes is reflected in our ongoing commitment to education and innovation. We invest in continuous training for our staff to stay abreast of the latest developments in pharmacy practice and technology. By harnessing the power of data analytics and predictive modeling, we can better anticipate and address the needs of our patients.
                        <br /><br />
                        PillPoint Medical is more than just a place to pick up prescriptions — it's a hub for holistic health and wellness. Whether you're in need of medication management, chronic disease management, or simply seeking reliable health advice, our team is here to support you every step of the way. Experience the PillPoint Medical difference today and embark on a journey toward a healthier, happier you.
                    </Typography>
                </CardContent>
            </Card>
            <Card
                sx={{
                    width: "100%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    marginTop: "20px",
                    padding: "10px",
                }}
            >
                <Typography
                    variant="h4"
                    style={{
                        color: "#033043", fontFamily: "sans-serif", fontSize: "30px",
                        fontWeight: "700", marginLeft: "10px"
                    }}
                >
                    Ratings and Reviews
                </Typography>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Average Rating: {avgRating.toFixed(1)}
                    </Typography>
                    {ratings.map((rating, index) => (
                        <Grid
                            key={index}
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            style={{ marginBottom: "10px" }}
                        >
                            <Typography variant="body1">
                                {rating.stars} Star{rating.stars > 1 ? "s" : ""}:
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                {/* Display stars */}
                                {[...Array(rating.stars)].map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        sx={{ color: "#DC7844", marginRight: "2px" }}
                                    />
                                ))}
                                <Typography variant="body1" style={{ marginLeft: "5px" }}>
                                    {rating.count} Rating{rating.count !== 1 ? "s" : ""}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}

                    <Divider sx={{ margin: '10px 0' }} />
                    {dummyReviews.map((review, index) => (
                        <>
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "10px",
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
                </CardContent>

            </Card>
            {/** Medical Stores Orders */}

            <Grid container spacing={1.5} style={{ marginTop: "2%" }}>
                <Grid item xs={12} sm={12} md={12} >
                    <Grid container justifyContent="space-between" alignItems="center" style={{ backgroundColor: "#fff", }}>
                        <Typography variant="h5" gutterBottom style={{ fontFamily: "sans-serif", fontSize: "22px", color: "#04374d", padding: "20px 0 0 20px", fontWeight: "600" }}>Orders</Typography>
                       
                    </Grid>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Date -Time</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Customer</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Contact</TableCell>
                                    
                                </TableRow>
                               
                            </TableHead>
                            <TableBody>
                                {filteredAppointments.map((request) => (
                                    <TableRow key={request.id}>
                                        <TableCell>{request.medicine}</TableCell>
                                        <TableCell align="center">{request.quantity}</TableCell>
                                        <TableCell>{request.date} - {request.time}</TableCell>
                                        <TableCell>{request.status}</TableCell>
                                        <TableCell>{request.customer.name}</TableCell>
                                        <TableCell>{request.customer.address}</TableCell>
                                        <TableCell>{request.customer.contact}</TableCell>
                                        
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        {!showAllAppointments && Orders.length > 5 && (
                            <Button onClick={() => navigate("/store-orders")} style={{ marginTop: '10px' }}>View More</Button>
                        )}
                    </TableContainer>

                </Grid>
                {/**patients List */}
                {/* <Grid item xs={12} sm={12} md={3} >
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
                                {patientData.map((request) => (
                                    <TableRow key={request.id}>
                                        <TableCell>{request.name}</TableCell>
                                        <TableCell>{request.gender}</TableCell>
                                        <TableCell>{request.age}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid> */}
                {/**Price List */}
                {/* <Grid item xs={12} sm={12} md={3} >
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
                                {services.map((service, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {service.name}
                                        </TableCell>
                                        <TableCell align="right">${service.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid> */}
            </Grid>

        </>
    );
}
export default StoreProfile;