import { Breadcrumbs, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import pdf from "../../assets/annex2-fm1.pdf";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { PiMapPinLineBold } from "react-icons/pi";
import { MdWifiCalling1 } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
const ClinicDescription = () => {

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
                    }}>Clinic Description</Typography>

                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            color="inherit"
                            to="/clinics"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}>
                            Clinics
                        </Link>

                        <Link
                            underline="hover"
                            color="inherit"
                            to="/clinic-request"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 5px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}
                        >
                            Clinic Request
                        </Link>
                        <Typography color="#189ab4" >Description</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            <Grid style={{
                background: "#fff", height: "auto", marginTop: "40px", borderRadius: "5px",
                borderBottomRightRadius: "15px", display: "flex", justifyContent: "flex-start",
                alignItems: "center", borderBottomLeftRadius: "15px", flexWrap: "wrap", padding: "15px"
            }}>
                <img src="https://img.freepik.com/free-vector/hand-drawn-hospital-reception-scene_23-2148837407.jpg?t=st=1711102046~exp=1711105646~hmac=559c0fbecd50d40f1c4e3557d74336938cd1eb8cfffd1b0abb0dbdcb906f879f&w=740"
                    style={{ height: "33%", width: "35%", margin: "10px 20px 10px 10px" }} alt="img" />
                <Grid style={{ width: "40vw" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h1 style={{
                            color: "#05445E", fontWeight: "600",
                            fontFamily: "Rubik, sans-serif", fontSize: "22px", lineHeight: "8px"
                        }}>
                            PQR Medical Center</h1>
                        <MdOutlineVerified style={{ color: "#39cabb", fontSize: "25px", marginLeft: "3%" }} />
                        <MdOutlineVerifiedUser style={{ color: "#ffab01", fontSize: "25px", marginLeft: "2%" }} />
                    </div>

                    <p style={{
                        color: "#6c6e70", fontWeight: "300", fontFamily:
                            "Rubik, sans-serif"
                    }}> Compassionate Care, Conveniently Close: Your Trusted Clinic Centers.</p>
                    <p style={{
                        color: "#6c6e70", fontWeight: "300", fontFamily:
                            "Rubik, sans-serif"
                    }}>
                        PQR Medical Center: Where Expertise Meets Empathy. Providing Quality Healthcare for Your Well-being.
                    </p>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", display: "flex", alignItems: "center" }}>

                        <PiMapPinLineBold style={{ color: "#39cabb", fontSize: "25px", marginRight: "1%" }} /> G87P, Birmingham, UK
                    </p>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", display: "flex", alignItems: "center" }}>

                        <MdOutlineMarkEmailRead style={{ color: "#39cabb", fontSize: "25px", marginRight: "1%" }} />
                        pqrmedicalcenter@example.com
                    </p>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", display: "flex", alignItems: "center" }}>
                        <MdWifiCalling1 style={{ color: "#39cabb", fontSize: "25px", marginRight: "1%" }} />
                        +91 6789012345
                    </p>
                </Grid>
            </Grid>

            <Grid style={{
                backgroundColor: "#ffffff", height: "auto", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between", marginTop: "40px",
            }} >
                <Grid style={{ padding: "2%", width: "33%" }} >
                    <h2 style={{ color: "#05445E", fontWeight: "500", fontFamily: "Rubik, sans-serif", paddingBottom: "12px" }}>Details</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Owner Name : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> Matthew Taylor</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Contact Nummber : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 6543210987</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Email: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> matthewtaylor@example.com</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Address: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 123 Maple Lane, Villagetown</span></p>

                </Grid>
                <Grid style={{ padding: "2%", width: "33%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500", fontFamily: "Rubik, sans-serif",
                        paddingBottom: "12px"
                    }}>Clinic Details </h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Clinic Specialization : <span style={{
                            color: "#05445E", fontWeight: "300",
                            fontFamily: "Rubik, sans-serif"
                        }}> Pediatrics</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Clinic Type : <span style={{
                            color: "#05445E", fontWeight: "300",
                            fontFamily: "Rubik, sans-serif"
                        }}> Hospital, Clinic</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        GST Registration Number : <span style={{
                            color: "#05445E", fontWeight: "300",
                            fontFamily: "Rubik, sans-serif"
                        }}> 2024478954799Z1</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Number of Doctors : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 6</span></p>



                </Grid>
                <Grid style={{ padding: "2%", width: "30%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500",
                        fontFamily: "Rubik, sans-serif", paddingBottom: "12px"
                    }}>Education Qualification</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Degree : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> Bachelor of Surgery (MBBS)</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        College/Institute : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> All India Institute of Medical Sciences (AIIMS)</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Year of completion: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 2019</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Years of Experience: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 5</span></p>

                </Grid>

            </Grid>

            {/***another row */}
            <Grid style={{
                backgroundColor: "#ffffff", height: "auto", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between", marginTop: "40px",
            }} >
                <Grid style={{ padding: "2%", width: "50%" }} >
                    <h2 style={{ color: "#05445E", fontWeight: "500", fontFamily: "Rubik, sans-serif", paddingBottom: "12px" }}>Certificates/ Proof</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        License Proof : <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background: "#032440", textDecoration: "none",
                            padding: "6px", borderRadius: "4px",
                        }}>
                            Attachment
                        </a>
                    </p>

                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Insurance Certificate : <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background: "#032440", textDecoration: "none",
                            padding: "6px", borderRadius: "4px",
                        }}>
                            Attachment
                        </a>
                    </p>

                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Accreditation/Certification : <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background: "#032440", textDecoration: "none",
                            padding: "6px", borderRadius: "4px"
                        }}>
                            Attachment
                        </a>
                    </p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Education Certificate: <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background: "#032440", textDecoration: "none",
                            padding: "6px", borderRadius: "4px",
                        }}>
                            Attachment
                        </a></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Identity Proof: <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background: "#032440", textDecoration: "none",
                            padding: "6px", borderRadius: "4px",
                        }}>
                            Attachment
                        </a></p>
                </Grid>


            </Grid>



            {/**SECOND CARD */}
            <Grid style={{
                backgroundColor: "#ffffff", height: "auto", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between",
                marginTop: "40px",
            }} >
                <Grid style={{ padding: "2%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500", fontFamily: "Rubik, sans-serif",
                    }}>About PQR Medical Center :</h2>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", padding: "6px" }}>
                        At PQR Medical Center, we pride ourselves on delivering exceptional healthcare services with a compassionate touch. Our clinic is dedicated to providing comprehensive medical care tailored to meet the diverse needs of our patients. With a team of experienced healthcare professionals and state-of-the-art facilities,
                        we strive to ensure the well-being and comfort of every individual who walks through our doors
                    </p>
                    <p style={{ color: "#05445E", fontWeight: "600", fontFamily: "Rubik, sans-serif", }}>
                        Comprehensive Healthcare Services:

                    </p>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", padding: "6px" }}>
                        At PQR Medical Center, we offer a wide range of medical services to address various healthcare needs.
                        From routine check-ups to specialized treatments, our clinic is equipped to provide comprehensive
                        care across multiple specialties, including:

                    </p>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", padding: "6px" }}>
                        <ul>
                            <li style={{ fontSize: "15px", color: "#6b6d6e", fontWeight: "600" }}>General Medicine</li>
                            <li style={{ fontSize: "15px", color: "#6b6d6e", fontWeight: "600" }}>Pediatrics</li>
                            <li style={{ fontSize: "15px", color: "#6b6d6e", fontWeight: "600" }}> Orthopedics</li>
                            <li style={{ fontSize: "15px", color: "#6b6d6e", fontWeight: "600" }}> Dermatology</li>
                            <li style={{ fontSize: "15px", color: "#6b6d6e", fontWeight: "600" }}> Dentistry</li>
                            <li style={{ fontSize: "15px", color: "#6b6d6e", fontWeight: "600" }}> Ophthalmology</li>
                        </ul>
                    </p>
                    <p style={{ color: "#05445E", fontWeight: "600", fontFamily: "Rubik, sans-serif", }}>
                        Patient-Centered Approach:
                    </p>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", padding: "6px" }}>
                        We believe in putting our patients first and prioritizing their health and comfort above all else. Our team of
                        dedicated healthcare professionals takes the time to listen to each patient's concerns, thoroughly assess their medical needs,
                        and develop personalized treatment plans tailored to their individual requirements. Whether it's a routine consultation or
                        a complex medical procedure, we strive to ensure that every patient receives the highest standard of care in a warm and welcoming environment.
                    </p>
                    <p style={{ color: "#05445E", fontWeight: "600", fontFamily: "Rubik, sans-serif", }}>
                    State-of-the-Art Facilities:
                    </p>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", padding: "6px" }}>
                    At PQR Medical Center, we are committed to staying at the forefront of medical technology and innovation. Our clinic is 
                    equipped with modern diagnostic equipment and advanced medical facilities to ensure accurate diagnosis and effective treatment outcomes. 
                    From cutting-edge medical imaging technology to state-of-the-art surgical suites, we spare no effort in providing our
                     patients with the best possible care.
                    </p>

                    <p style={{ color: "#05445E", fontWeight: "600", fontFamily: "Rubik, sans-serif", }}>
                    Community Engagement:
                    </p>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", padding: "6px" }}>
                    At PQR Medical Center, we believe in giving back to the community we serve. Through various outreach programs and
                     community initiatives, we strive to promote health and wellness among individuals and families. From health education seminars 
                     to free medical camps, we actively engage with the community to raise awareness about important health issues and provide access to essential 
                     healthcare services.
                    </p>

                </Grid>


            </Grid>
            {/**Third CARD */}
            <Grid style={{
                backgroundColor: "#ffffff", height: "auto", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between",
                marginTop: "40px",
            }} >

                <Grid style={{ padding: "2%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500",
                        fontFamily: "Rubik, sans-serif", paddingBottom: "10px"
                    }}>Awards</h2>
                   <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        1. Patient Satisfaction Awards - 2023 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background: "#032440", textDecoration: "none",
                            padding: "6px", borderRadius: "4px",
                        }}>
                            Attachment
                        </a></span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        2. India Today Healthcare Awards - 2021 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background: "#032440", textDecoration: "none",
                            padding: "6px", borderRadius: "4px",
                        }}>
                            Attachment
                        </a></span></p>
                        <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        3. NABH Accreditation  - 2020 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background: "#032440", textDecoration: "none",
                            padding: "6px", borderRadius: "4px",
                        }}>
                            Attachment
                        </a></span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        4. IQuality Council of India (QCI) Awards - 2019 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background: "#032440", textDecoration: "none",
                            padding: "6px", borderRadius: "4px",
                        }}>
                            Attachment
                        </a></span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        5. Express Healthcare Excellence Awards - 2019 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background: "#032440", textDecoration: "none",
                            padding: "6px", borderRadius: "4px",
                        }}>
                            Attachment
                        </a></span></p>
                       
                </Grid>


            </Grid>
            {/**Forth CARD */}



        </Grid >
    )
}
export default ClinicDescription;