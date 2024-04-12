import { Breadcrumbs, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import pdf from "../../assets/annex2-fm1.pdf";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { PiMapPinLineBold } from "react-icons/pi";
import { MdWifiCalling1 } from "react-icons/md";

const LabsDescription = () => {

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
                    }}>Lab Description</Typography>

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
                            to="/lab-request"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 5px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}
                        >
                            Lab Request
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
                
                <img src="https://img.freepik.com/free-photo/medical-test-tubes-with-blood-desk-laboratory_482257-9074.jpg?t=st=1711012328~exp=1711015928~hmac=04cc75f6fc8687cd25684b376101ec18602c94d31d521cbc4f582a73fe3abd39&w=996"
                    style={{ height: "33%", width: "35%", margin: "10px 20px 10px 10px" }} alt="img" />
                <Grid style={{ width: "40vw" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h1 style={{
                            color: "#05445E", fontWeight: "600",
                            fontFamily: "Rubik, sans-serif", fontSize: "22px", lineHeight: "8px"
                        }}>
                           ABC Diagnostics</h1>
                        <MdOutlineVerified style={{ color: "#39cabb", fontSize: "25px", marginLeft: "3%" }} />
                        <MdOutlineVerifiedUser style={{ color: "#ffab01", fontSize: "25px", marginLeft: "2%" }} />
                    </div>

                    <p style={{
                        color: "#6c6e70", fontWeight: "300", fontFamily:
                            "Rubik, sans-serif"
                    }}> Advancing Healthcare Through Precision Diagnostics</p>
                    <p style={{
                        color: "#6c6e70", fontWeight: "300", fontFamily:
                            "Rubik, sans-serif"
                    }}>
                        Medical laboratories, often simply referred to as labs, are facilities equipped with advanced scientific instruments and personnel 
                        trained in conducting various diagnostic tests and analyses. 
                    </p>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", display: "flex", alignItems: "center" }}>

                        <PiMapPinLineBold style={{ color: "#39cabb", fontSize: "20px", marginRight: "1%" }} /> G87P, Birmingham, UK
                    </p>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", display: "flex", alignItems: "center" }}>

                        <MdWifiCalling1 style={{ color: "#39cabb", fontSize: "25px", marginRight: "1%" }} />
                        +91 1234567890
                    </p>
                </Grid>
            </Grid>

            <Grid style={{
                backgroundColor: "#ffffff", height: "auto", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between", marginTop: "40px",
            }} >
                <Grid style={{ padding: "2%", width: "30%" }} >
                    <h2 style={{ color: "#05445E", fontWeight: "500", fontFamily: "Rubik, sans-serif", paddingBottom: "12px" }}>Details</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Owner Name : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> John Doe</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Contact Nummber : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 9874563212</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Email: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> abc@gamil.com</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Address: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> Opp TATA Westside , Mithilapure Vuda Colony,Madhurawada,Visakhapatnam</span></p>
                </Grid>
                <Grid style={{ padding: "2%", width: "30%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500", fontFamily: "Rubik, sans-serif",
                        paddingBottom: "12px"
                    }}>Medical Lab Details </h2>
                    
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        GST Registration Number : <span style={{
                            color: "#05445E", fontWeight: "300",
                            fontFamily: "Rubik, sans-serif"
                        }}> 2024478954799Z1</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                    Test Catalog : <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background:"#032440",textDecoration:"none" ,
                            padding:"6px", borderRadius:"4px" ,
                        }}>
                           Attachment
                        </a>
                    </p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                    Insurance Information : <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background:"#032440",textDecoration:"none" ,
                            padding:"6px", borderRadius:"4px" ,
                        }}>
                           Attachment
                        </a>
                    </p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                    Accreditation/Certification : <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background:"#032440",textDecoration:"none" ,
                            padding:"6px", borderRadius:"4px" 
                        }}>
                            Attachment
                        </a>
                    </p>
                </Grid>
                <Grid style={{ padding: "2%", width: "30%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500",
                        fontFamily: "Rubik, sans-serif", paddingBottom: "12px"
                    }}>Education Qualification</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Degree : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>Bachelor of Science in Medical Laboratory Science (BMLS)</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        College/Institute : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> University of Medicine, Cityville</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Year of completion: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 2019</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Certificate: <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background:"#032440",textDecoration:"none" ,
                            padding:"6px", borderRadius:"4px" ,
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
                    }}>About ABC Diagnostics :</h2>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", padding: "6px" }}>
                        <ul>

                       <li><span style={{fontSize:"15px", color:"#6b6d6e",fontWeight:"600"}}> Description of Services:</span> Full-service diagnostic lab offering a wide range of tests including clinical chemistry, hematology, microbiology, and molecular diagnostics.</li>
                       <li ><span style={{fontSize:"15px", color:"#6b6d6e",fontWeight:"600"}}>Accreditations and Certifications:</span> ISO 9001:2015 certified, CLIA certified.</li>
                       <li><span style={{fontSize:"15px", color:"#6b6d6e",fontWeight:"600"}}>Equipment and Facilities:</span> State-of-the-art laboratory equipped with advanced instruments and technology.</li>
                       <li><span style={{fontSize:"15px", color:"#6b6d6e",fontWeight:"600"}}>Test Offerings:</span> Comprehensive test menu covering routine tests, specialized assays, and genetic testing.</li>
                       <li><span style={{fontSize:"15px", color:"#6b6d6e",fontWeight:"600"}}>Turnaround Time:</span> Average turnaround time of 24-48 hours for most tests.</li>
                       <li><span style={{fontSize:"15px", color:"#6b6d6e",fontWeight:"600"}}>Pricing:</span> Competitive pricing with transparent fee schedules available upon request.</li>
                       </ul>
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
                        1. Excellence in Clinical Diagnostics Award - 2020 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background:"#032440",textDecoration:"none" ,
                            padding:"6px", borderRadius:"4px" ,
                        }}>
                           Attachment
                        </a></span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        2. Innovation in Medical Technology Award - 2019 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background:"#032440",textDecoration:"none" ,
                            padding:"6px", borderRadius:"4px" ,
                        }}>
                           Attachment
                        </a></span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        3. Best Laboratory Practices Award - 2021 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background:"#032440",textDecoration:"none" ,
                            padding:"6px", borderRadius:"4px" ,
                        }}>
                           Attachment
                        </a></span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        4. Patient Care Excellence Award - 2018 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ color: "#fff",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif", background:"#032440",textDecoration:"none" ,
                            padding:"6px", borderRadius:"4px" ,
                        }}>
                           Attachment
                        </a></span></p>
                </Grid>


            </Grid>
            {/**Forth CARD */}



        </Grid >
    )
}
export default LabsDescription;