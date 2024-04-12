import React, { useState } from "react";
import {
  Box, Typography, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Avatar, Modal, Breadcrumbs, Paper, Button
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { deepOrange } from '@mui/material/colors';
import LabsDetailsEdit from "./LabsDetailsEdit"; // Import LabsDetailsEdit page
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { PiMapPinLineBold } from "react-icons/pi";
import { MdWifiCalling1 } from "react-icons/md";
import StarBorderIcon from '@mui/icons-material/StarBorder';
function LabProfile() {
  const [openEditModal, setOpenEditModal] = useState(false);

  // Sample lab data
  const labData = {
    name: "Lab A",
    address: "House No: 123, Main Street, XYZ Nagar, XYZ City, XYZ District, XYZ State - 123456",
    rating: 4.5,
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    image: "https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?t=st=1709205640~exp=1709209240~hmac=bb4b75e1a323943fcbf256f06cfe9a3ec16d3ec20bc2f5850bbe16a6a25d5e7b&w=740",
    reviews: [
      { user: "John Smith", rating: 5, comment: "Great service!" },
      { user: "Emily Johnson ", rating: 4, comment: "Good experience." },
      { user: "Michael Brown", rating: 3, comment: "Average service." },
    ]
  };

  // Calculate average rating
  const totalRatings = labData.reviews.length;
  const totalStars = labData.reviews.reduce((acc, review) => acc + review.rating, 0);
  const avgRating = totalRatings === 0 ? 0 : totalStars / totalRatings;

  // Dummy data for ratings
  const ratings = [
    { stars: 1, count: 5 },
    { stars: 2, count: 10 },
    { stars: 3, count: 15 },
    { stars: 4, count: 20 },
    { stars: 5, count: 25 }
  ];

  // Calculate total ratings

  // Dummy review data

  const dummyReviews = [
    { user: "Jennifer Davis", rating: 4, comment: "Impressive service!" },
    { user: "Christopher Wilson", rating: 5, comment: "Excellent experience." },
    { user: "Jessica Martinez", rating: 3, comment: "Satisfactory service." },
    { user: "Matthew Taylor", rating: 2, comment: "Below average experience." }
  ];



  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };


  const availableTests = [
    {
      id: 1,
      testName: "Complete Blood Count (CBC)",
      description: "Assesses overall health and detects a variety of disorders, including anemia, infection, and leukemia.",
      price: "$50"
    },
    {
      id: 2,
      testName: "Blood Chemistry Panel",
      description: "Measures various components in the blood, such as glucose, electrolytes, and cholesterol, to evaluate organ function and overall health.",
      price: "$75"
    },
    {
      id: 3,
      testName: "Urinalysis",
      description: "Examines the urine for abnormalities, including signs of urinary tract infections, kidney disorders, and diabetes.",
      price: "$30"
    },
    {
      id: 4,
      testName: "Thyroid Function Test",
      description: "Evaluates thyroid gland function by measuring levels of thyroid-stimulating hormone (TSH), thyroxine (T4), and triiodothyronine (T3).",
      price: "$60"
    },
    {
      id: 5,
      testName: "Lipid Profile",
      description: "Measures levels of cholesterol and triglycerides in the blood to assess cardiovascular health and risk of heart disease.",
      price: "$55"
    },
    {
      id: 6,
      testName: "Liver Function Tests",
      description: "Evaluates liver function by measuring levels of enzymes, proteins, and bilirubin in the blood.",
      price: "$70"
    },
    {
      id: 7,
      testName: "Hemoglobin A1c (HbA1c)",
      description: "Measures average blood sugar levels over the past 2-3 months and is used to diagnose and monitor diabetes.",
      price: "$45"
    },
  ];

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

  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate()

  const visibleOrders = showAll ? testOrders : testOrders.slice(0, 5);
  const RatingStars = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<StarIcon key={i} sx={{ color: '#FFD700' }} />);
      } else {
        stars.push(<StarBorderIcon key={i} sx={{ color: '#b0afac' }} />);
      }
    }
    return (
      <div>
        {stars}
      </div>
    );
  };

  return (
    <>
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
          }}>Laboratory</Typography>

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
              to="/labs"
              style={{
                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
              }}>
              Laboratory
            </Link>
            <Typography color="#189ab4"> Laboratory Profile</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
      <Box sx={{
        backgroundColor: "transparent", display: 'flex',
        justifyContent: 'center', alignItems: 'center',
      }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            marginTop: "30px"
          }}
        >
          <Grid style={{
            background: "#fff", height: "auto", borderRadius: "5px",
            display: "flex", justifyContent: "flex-start",
            alignItems: "center", flexWrap: "wrap"
          }}>
            <img src="https://img.freepik.com/free-photo/medical-test-tubes-with-blood-desk-laboratory_482257-9074.jpg?t=st=1711012328~exp=1711015928~hmac=04cc75f6fc8687cd25684b376101ec18602c94d31d521cbc4f582a73fe3abd39&w=996"
              style={{ height: "250px", width: "35%", margin: "10px 20px 10px 10px" }} alt="img" />
            <Grid style={{ width: "40vw" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{
                  color: "#05445E", fontWeight: "600",
                  fontFamily: "Rubik, sans-serif", fontSize: "22px", lineHeight: "8px"
                }}>
                  XYZ Diagnostic Center</h1>
                <MdOutlineVerified style={{ color: "#39cabb", fontSize: "25px", marginLeft: "3%" }} />
                <MdOutlineVerifiedUser style={{ color: "#ffab01", fontSize: "25px", marginLeft: "2%" }} />
              </div>
              <p style={{
                color: "#6c6e70", fontWeight: "300", fontFamily:
                  "Rubik, sans-serif"
              }}> Empowering better diagnosis</p>
              <p style={{
                color: "#6c6e70", fontWeight: "300", fontFamily:
                  "Rubik, sans-serif"
              }}>
                Transforming healthcare through cutting-edge diagnostics and personalized care
              </p>
              <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", display: "flex", alignItems: "center" }}>

                <PiMapPinLineBold style={{ color: "#39cabb", fontSize: "20px", marginRight: "1%" }} /> 456 Elm Street
              </p>
              <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", display: "flex", alignItems: "center" }}>

                <MdWifiCalling1 style={{ color: "#39cabb", fontSize: "25px", marginRight: "1%" }} />
                +91 123-456-7890
              </p>
            </Grid>
          </Grid>
          {/**description */}
          <Typography variant="h4" sx={{ color: '#05445E', fontWeight: 'bold', marginY: '20px' }}>
            Description
          </Typography>
          <Card sx={{ width: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="body1" style={{color: "#6c6e70", paddingTop:"6px"}}>
                XYZ Diagnostics is a state-of-the-art medical laboratory dedicated to providing accurate and reliable diagnostic services to healthcare providers and patients. As a trusted partner in healthcare, we offer a comprehensive range of tests and analyses to support clinical decision-making and promote patient well-being.
              </Typography>
              <Typography variant="body1" style={{color: "#6c6e70", paddingTop:"6px"}}>
                Our team of experienced laboratory professionals, led by Lab Manager John Smith, is committed to delivering high-quality results with precision and efficiency. Equipped with advanced instrumentation and adhering to strict quality control measures, we ensure the accuracy and reliability of every test performed.
              </Typography>
              <Typography variant="body1" style={{color: "#6c6e70", paddingTop:"6px"}}>
                At XYZ Diagnostics, we understand the importance of timely and accurate diagnoses in patient care. Whether it's routine blood work, specialized molecular testing, or complex pathology studies, we strive to deliver results you can trust.
              </Typography>
            </CardContent>
          </Card>

          <Grid container spacing={1.5} style={{ marginTop: "2%" }}>
            {/**tests */}
            <Grid item xs={12} sm={12} md={12} >
              <Typography variant="h4" sx={{ color: '#05445E', fontWeight: 'bold', }}>
                Tests Available
              </Typography>
              <Grid style={{ marginTop: "10px" }}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow style={{ borderTop: "1px solid thin #6d706e" }}>
                        <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>Test Name</TableCell>
                        <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>Description</TableCell>
                        <TableCell style={{ fontWeight: "bold", fontSize: "16px" }}>Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {availableTests.map((test) => (
                        <TableRow key={test.id}>
                          <TableCell>{test.testName}</TableCell>
                          <TableCell>{test.description}</TableCell>
                          <TableCell>{test.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>

            {/**Orders */}
            <Grid item xs={12} sm={12} md={12} >

              <Typography variant="h4" sx={{ color: '#05445E', fontWeight: 'bold', paddingTop: "20px" }}>
                Orders
              </Typography>

              <Grid>


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
                      {visibleOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.testName}</TableCell>
                          <TableCell>{order.patientName}</TableCell>
                          <TableCell>{order.status}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  {!showAll && testOrders.length > 5 && (
                    <Button onClick={() => navigate("/lab-orders")} style={{ marginTop: '10px' }}>View More</Button>
                  )}
                </TableContainer>
              </Grid>
            </Grid>

          </Grid>


          <Typography variant="h4" sx={{ color: '#05445E', fontWeight: 'bold', marginTop: '20px' }}>
            Customers Ratings
          </Typography>
          <Card sx={{ width: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', padding: '20px' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Average Rating: {avgRating.toFixed(1)} {/* Display average rating */}
              </Typography>
              {/* Iterate over ratings array to display ratings count */}
              {ratings.map((rating, index) => (
                <Grid key={index} container justifyContent="space-between" alignItems="center" style={{ marginBottom: '10px' }}>
                  <Typography variant="body1">
                    {rating.stars} Star{rating.stars > 1 ? 's' : ''}:
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
                    {/* Reverse the order of the stars array and map over them */}

                    <Typography variant="body1" style={{ marginLeft: '5px' }}>
                      {rating.count} Rating{rating.count !== 1 ? 's' : ''}
                    </Typography>
                    {[...Array(5)].reverse().map((_, i) => (
                      i < rating.stars ? <StarIcon key={i} sx={{ color: '#FFD700', marginRight: '2px' }} /> : <StarBorderIcon key={i} sx={{ color: '#b0afac', marginRight: '2px' }} />
                    ))}
                  </Box>
                </Grid>
              ))}
            </CardContent>
          </Card>




          {/* Card to display dummy reviews */}
          <Grid>
            <Typography variant="h4" sx={{ color: '#05445E', fontWeight: 'bold', paddingTop: "20px" }}>
              Customers Reviews
            </Typography>
            <Card sx={{ width: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', padding: '20px' }}>
              <CardContent>
                {/* Iterate over dummy reviews array to display reviews */}
                {dummyReviews.map((review, index) => (
                  <Box key={index} sx={{ display: 'flex', marginBottom: '10px' }}>
                    <Avatar sx={{ bgcolor: deepOrange[500], marginRight: '10px' }}>
                      {review.user.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="body1" gutterBottom>
                        <strong>{review.user}</strong>  <RatingStars rating={review.rating} />
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {review.comment}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
            <Modal
              open={openEditModal}
              onClose={handleCloseEditModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: '80vw', maxHeight: '80vh', overflow: 'auto' }}>
                <LabsDetailsEdit />
              </Box>
            </Modal>
          </Grid>

        </Box>
      </Box>
    </>
  );
}

export default LabProfile;