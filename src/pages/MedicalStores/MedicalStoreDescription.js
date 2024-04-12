import { Breadcrumbs, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import pdf from "../../assets/annex2-fm1.pdf";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { PiMapPinLineBold } from "react-icons/pi";
import { MdWifiCalling1 } from "react-icons/md";

const MedicalStoreDescription = () => {

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
                    }}>Store Description</Typography>

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
                            to="/store-request"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 5px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}
                        >
                            Store Request
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
                <img src="https://img.freepik.com/free-photo/young-hispanic-man-pharmacist-smiling-confident-scanning-pills-bottle-pharmacy_839833-10375.jpg?t=st=1710999501~exp=1711003101~hmac=49f6571d2938bbd77bf2ccd930778fbb9233f6af1b4a2e126d734f0d2f686c35&w=740"
                    style={{ height: "33%", width: "35%", margin: "10px 20px 10px 10px" }} alt="img" />
                <Grid style={{ width: "40vw" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h1 style={{
                            color: "#05445E", fontWeight: "600",
                            fontFamily: "Rubik, sans-serif", fontSize: "22px", lineHeight: "8px"
                        }}>
                            ABC Medical Store</h1>
                        <MdOutlineVerified style={{ color: "#39cabb", fontSize: "25px", marginLeft: "3%" }} />
                        <MdOutlineVerifiedUser style={{ color: "#ffab01", fontSize: "25px", marginLeft: "2%" }} />
                    </div>

                    <p style={{
                        color: "#6c6e70", fontWeight: "300", fontFamily:
                            "Rubik, sans-serif"
                    }}> It's all about care</p>
                    <p style={{
                        color: "#6c6e70", fontWeight: "300", fontFamily:
                            "Rubik, sans-serif"
                    }}>
                        Lorem ipsum dolor sit amet consectur adipisc eiusmod tempor incididunt.
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
                    }}>Medical Store Details </h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Drug License : <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            textDecoration: "none", color: "#05445E",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif"
                        }}>
                            View PDF
                        </a></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        GST Registration Number : <span style={{
                            color: "#05445E", fontWeight: "300",
                            fontFamily: "Rubik, sans-serif"
                        }}> 2024478954799Z1</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        FSC : <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            textDecoration: "none", color: "#05445E",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif"
                        }}>
                            View PDF
                        </a>
                    </p>
                </Grid>
                <Grid style={{ padding: "2%", width: "30%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500",
                        fontFamily: "Rubik, sans-serif", paddingBottom: "12px"
                    }}>Education Qualification</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Degree : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>  Bachelor of Pharmacy (B.Pharm)</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        College/Institute : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> NHS Hospital</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Year of completion: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 2019</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Certificate: <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            textDecoration: "none", color: "#05445E",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif"
                        }}>
                            View PDF
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
                        paddingBottom: "12px"
                    }}>About ABC Medical Store:</h2>
                    <p style={{ color: "#6c6e70", fontWeight: "300", fontFamily: "Rubik, sans-serif", padding: "6px" }}>
                        ABC Medical Store" is a reputable and trusted name in the healthcare industry, offering a wide range of pharmaceutical products and medical supplies to serve the community's healthcare needs. With a commitment to excellence and customer satisfaction, ABC Medical Store has become a preferred destination for individuals seeking quality medications, healthcare products, and professional advice.

                        At ABC Medical Store, our mission is to provide accessible and affordable healthcare solutions to our customers, ensuring their well-being and satisfaction. We prioritize the safety and efficacy of the products we offer, sourcing them from reputable manufacturers and suppliers known for their quality standards.

                        Our dedicated team of pharmacists and healthcare professionals strives to deliver personalized service and expert guidance to every customer who walks through our doors. Whether you need over-the-counter medications, prescription drugs, medical equipment, or wellness products, ABC Medical Store is your one-stop destination for all your healthcare needs.

                        In addition to our extensive product range, we also offer convenient services such as prescription refills, medication counseling, and health consultations to ensure that our customers receive comprehensive support for their health and wellness journey.

                        With a focus on integrity, professionalism, and compassion, ABC Medical Store continues to uphold its commitment to excellence in healthcare delivery, earning the trust and loyalty of our valued customers. Visit us today and experience the difference that ABC Medical Store brings to your healthcare experience.</p>

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
                        1. Healthcare Excellence Award 2020 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            textDecoration: "none", color: "#05445E",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif"
                        }}>
                            View PDF
                        </a></span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        2. Customer Satisfaction Award 2018 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            textDecoration: "none", color: "#05445E",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif"
                        }}>
                            View PDF
                        </a></span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        3. Pharmacy Innovation Award 2016 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            textDecoration: "none", color: "#05445E",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif"
                        }}>
                            View PDF
                        </a></span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        4. Community Service Award 2014 : <span> <a href={pdf} target="_blank" rel="noopener noreferrer" style={{
                            textDecoration: "none", color: "#05445E",
                            fontWeight: "300", fontFamily: "Rubik, sans-serif"
                        }}>
                            View PDF
                        </a></span></p>
                </Grid>


            </Grid>
            {/**Forth CARD */}



        </Grid >
    )
}
export default MedicalStoreDescription;