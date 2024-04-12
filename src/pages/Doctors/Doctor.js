import React, { useState } from 'react';
import { Grid, Typography, Button, IconButton, Menu, MenuItem, Box, Card, CardContent, CardActionArea, CardMedia, Divider, Select, InputLabel, Chip } from '@mui/material'; // Import missing components
import { Link, useNavigate } from 'react-router-dom';
import { BsChatTextFill } from "react-icons/bs";

import stamp from '../../assets/icons/approved.png'
import { doctorRequestAsync } from '../../Slice/Doctor/DoctorsSlice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FaceIcon from '@mui/icons-material/Face';
import { InputAdornment, Breadcrumbs, Badge } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import PasswordIcon from '@mui/icons-material/Password';
import { GrAdd } from "react-icons/gr";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";


const cardData = [
    {
        id: 1,
        name: 'Dr. Nisha Sharma',
        specialization: 'Obstetrics and Gynecology',
        address: '123, Sunshine Avenue, Mumbai, India',
        phoneNumber: '+91 9876543210',
        type: 'verify',
        email: 'dr.nisha@gmail.com',
        imageUrl: 'https://th.bing.com/th/id/OIP.WPYPa4GubQVLa0kQqXcfvwHaHa?rs=1&pid=ImgDetMain'
    },
    {
        id: 2,
        name: 'Dr. Meera Joshi',
        specialization: 'Ophthalmology',
        address: '789, Urgent Care Lane, Chandigarh, India',
        phoneNumber: '+91 9876543218',
        type: 'verify',
        email: 'dr.meera.joshi@gmail.com',
        imageUrl: 'https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg?w=1060'
    },
    {
        id: 3,
        name: 'Dr. Sanjay Kumar',
        specialization: 'Neurology',
        address: '123, Visionary Avenue, Ahmedabad, India',
        phoneNumber: '+91 9876543217',
        type: 'not verify',
        email: 'dr.rohan.shah@gmail.com',
        imageUrl: 'https://thumbs.dreamstime.com/b/indian-doctor-mature-male-medical-standing-isolated-white-background-handsome-model-portrait-31871541.jpg'
    },
    {
        id: 4,
        name: 'Dr. Priya Singh',
        specialization: 'Dermatology',
        address: '101, Radiance Road, Chennai, India',
        phoneNumber: '+91 9876543213',
        type: 'not verify',
        email: 'dr.priya.singh@gmail.com',
        imageUrl: 'https://usmlestrike.b-cdn.net/wp-content/uploads/2023/08/cropped-indian-doctor-wearing-white-coat-with-stethoscope-scaled-1.webp'
    },
    {
        id: 5,
        name: 'Dr. Rajesh Gupta',
        specialization: 'Cardiology',
        address: '234, Heartbeat Avenue, Kolkata, India',
        phoneNumber: '+91 9876543214',
        type: 'verify',
        email: 'dr.rajesh.gupta@gmail.com',
        imageUrl: 'https://th.bing.com/th/id/OIP.V5C0zCODJJzdjsvoWFRndgHaJz?rs=1&pid=ImgDetMain'
    },
];

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
}));
const Doctor = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = useState(false);

    const handleCreateButtonClick = () => {
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };


    const handleEditDialogOpen = (card) => {
        setEditName(card.name);
        setEditId(card.id);
        setEditPhoneNumber(card.phoneNumber);
        setEditEmail(card.email);
        setEditPlace(card.address);
        setEditSpecialization(card.specialization);
        setEditDialogOpen(true);
    };

    const handleEditDialogClose = () => {
        setEditDialogOpen(false);
    };

    // Function to handle updating doctor details
    const handleEditDoctor = () => {
        // Perform the necessary actions to update doctor details
        console.log("Updated Name:", editName);
        console.log("Updated ID:", editId);
        console.log("Updated Phone Number:", editPhoneNumber);
        // Close the dialog
        handleEditDialogClose();
    };
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editName, setEditName] = useState('');
    const [editId, setEditId] = useState('');
    const [editPhoneNumber, setEditPhoneNumber] = useState('');
    const [editEmail, setEditEmail] = useState(''); // Added declaration
    const [editPlace, setEditPlace] = useState(''); // Added declaration
    const [editSpecialization, setEditSpecialization] = useState(''); // Added declaration
    const theme = createTheme({
        palette: {
            primary: {
                main: '#DC7844', // Set your primary color here
            },
        },
    });
 

    const [formData, setFormData] = useState({
        doctorName: '',
        specialization: '',
        DOB: '',
        gender: '',
        yearsOfExperience: '',
        address: {
            street: '',
            city: '',
            state: '',
            country: '',
            postalCode: '',
        },
        registrationNumber: '',
        registartionCouncil: '',
        registartionYear: '',
        educationDetails: {
            Degree: '',
            Institute: '',
            Yearofcompletion: '',
        },
        phoneNummber: '',
        email: '',
        profileImage: null,
        medicalLicenseProof: null,
        identityProof: null,
        MedicalRegistrationProof: null,
        cv: null,
        keyword: '',
        categoryId: '',
        locationId: '',
        description: '',
        workshopsAttended: '',
    });
    const handleChange = (event, key) => {
        const value = event.target.value;
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: value,
        }));
    };
    const handleAddressChange = (e, parentKey, childKey) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [parentKey]: {
                ...prevState[parentKey],
                [childKey]: value
            }
        }));
    };

    // Function to handle education details changes
    const handleEducationChange = (e, parentKey, childKey) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [parentKey]: {
                ...prevState[parentKey],
                [childKey]: value
            }
        }));
    };

  

    const options = ["diabetes", "psoriasis", "varicose Veins", "common Cold", "allergy", "impetigo", "dengue", "fungal infection", "typhoid", "chicken pox", "acne",]
    const classes = useStyles();
    const [selectedItems, setSelectedItems] = useState([]);

    const handleKeywordChange = (event) => {
        setSelectedItems(event.target.value);
    };

    const handleDelete = (itemToDelete) => () => {
        setSelectedItems((items) => items.filter((item) => item !== itemToDelete));
    };

  

    const handleFileChange = (event, fieldName) => {
        const file = event.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            [fieldName]: file,
        }));
    };
    const onClickSendRequest = async (e) => {
        e.preventDefault();
        const data = {
            doctorName: formData.doctorName,
            specialization: formData.specialization,
            DOB: formData.DOB,
            gender: formData.gender,
            yearsOfExperience: formData.yearsOfExperience,
            address: formData.address,
            registrationNumber: formData.registrationNumber,
            registartionCouncil: formData.registartionCouncil,
            registartionYear: formData.registartionYear,
            educationDetails: formData.educationDetails,
            phoneNummber: formData.phoneNummber,
            email: formData.email,
            profileImage: formData.profileImage,
            medicalLicenseProof: formData.medicalLicenseProof,
            identityProof: formData.identityProof,
            MedicalRegistrationProof: formData.MedicalRegistrationProof,
            cv: formData.cv,
            keyword: selectedItems,
            categoryId: formData.categoryId,
            locationId: formData.locationId,
            description: formData.description,
        };
        try {
        const response= await  dispatch(doctorRequestAsync(data));
            // Check if the request was successful
            if (response.meta.requestStatus === 'fulfilled') {
                // Reset the form fields to empty
                setFormData({
                  doctorName: '',
                  specialization: '',
                  DOB: '',
                  gender: '',
                  yearsOfExperience: '',
                  registrationNumber: '',
                  registartionCouncil: '',
                  registartionYear: '',
                  educationDetails: '',
                  phoneNummber: '',
                  email: '',
                  profileImage: null,
                  medicalLicenseProof: null,
                  identityProof: null,
                  MedicalRegistrationProof: null,
                  cv: null,
                  keyword: [],
                  categoryId: '',
                  locationId: '',
                  description: '',
                  address: {
                    street: '',
                    city: '',
                    state: '',
                    country: '',
                    postalCode: '',
                },
                })
                setOpen(false);
            }

        } catch (error) {
            // Catch any errors and log them
            console.error('Error:', error);
        }
    };
    
    return (
        <ThemeProvider theme={theme} >
            <Grid style={{
                backgroundImage: "linear-gradient(to right, #fff, #36c0d3)", height: "60px", display: "flex",
                flexDirection: "row", justifyContent: "space-between", lignItems: "center",
            }} >
                <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
                    fontFamily: "sans-serif", fontSize: "24px", fontWeight: 600,
                    color: "#05445E"
                }}>Doctors</Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
                        <Link underline="hover" color="inherit" to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
                            Home
                        </Link>
                        <Typography color="#189ab4">Doctors</Typography>
                    </Breadcrumbs>
                </Grid>
                <IconButton sx={{ marginRight: "10px" }}>
                    <Link to="/doctor-request">
                        <Badge badgeContent={4} color="warning">
                            <BsChatTextFill style={{ color: "#05445E" }} />
                        </Badge>
                    </Link>
                </IconButton>
            </Grid>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" marginBottom="5px">
                    <TextField
                        label="Search"
                        variant="outlined"
                        size="small"
                        value={searchText}
                        onChange={handleSearchChange}
                        InputProps={{ style: { color: "#000" } }}
                    />
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#e87c10", color: "#FFFFFF", marginLeft: "10px",
                            marginBottom: "5px", marginTop: "20px", opacity: "0.9"
                        }}
                        onClick={handleCreateButtonClick}
                    >
                        <GrAdd style={{ height: "20px", width: "15px" }} />
                    </Button>
                    <Dialog open={open} onClose={handleDialogClose}>
                        <DialogTitle style={{ color: '#033043', fontFamily: "Lato", fontSize: "30px", }}>Create From</DialogTitle>
                        <DialogContent>
                            <Grid container spacing={2} >
                                <Grid item xs={6}>
                                    {/* Include all the text fields here */}
                                    <TextField
                                        margin="dense"
                                        label="Doctor Name"
                                        type="text"
                                        fullWidth
                                        value={formData.doctorName}
                                        onChange={(e) => handleChange(e, 'doctorName')}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Specialization"
                                        type="text"
                                        fullWidth
                                        value={formData.specialization}
                                        onChange={(e) => handleChange(e, 'specialization')}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="DOB"
                                        type="date"
                                        fullWidth
                                        value={formData.DOB}
                                        onChange={(e) => handleChange(e, 'DOB')}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Gender"
                                        type="text"
                                        fullWidth
                                        value={formData.gender}
                                        onChange={(e) => handleChange(e, 'gender')}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Phone Nummber"
                                        type="text"
                                        fullWidth
                                        value={formData.phoneNummber}
                                        onChange={(e) => handleChange(e, 'phoneNummber')}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        value={formData.email}
                                        onChange={(e) => handleChange(e, 'email')}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Category Id"
                                        type="text"
                                        fullWidth
                                        value={formData.categoryId}
                                        onChange={(e) => handleChange(e, 'categoryId')}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Location Id"
                                        type="text"
                                        fullWidth
                                        value={formData.locationId}
                                        onChange={(e) => handleChange(e, 'locationId')}
                                    />
                                    {/**address  */}
                                    <TextField
                                        margin="dense"
                                        label="Street"
                                        type="text"
                                        fullWidth
                                        name='street'
                                        value={formData.address.street}
                                        onChange={(e) => handleAddressChange(e, 'address', "street")}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="City"
                                        type="text"
                                        fullWidth
                                        name='city'
                                        value={formData.address.city}
                                        onChange={(e) => handleAddressChange(e, 'address', "city")}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="State"
                                        type="text"
                                        fullWidth
                                        name='state'
                                        value={formData.address.state}
                                        onChange={(e) => handleAddressChange(e, 'address', "state")}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Country"
                                        type="text"
                                        fullWidth
                                        name='country'
                                        value={formData.address.country}
                                        onChange={(e) => handleAddressChange(e, 'address', "country")}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="PostalCode"
                                        type="text"
                                        fullWidth
                                        name='postalCode'
                                        value={formData.address.postalCode}
                                        onChange={(e) => handleAddressChange(e, 'address', "postalCode")}
                                    />

                                    <TextField
                                        margin="dense"
                                        label="Degree"
                                        type="text"
                                        fullWidth
                                        name='Degree'
                                        value={formData.educationDetails.Degree}
                                        onChange={(e) => handleEducationChange(e, 'educationDetails', "Degree")}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Institute"
                                        type="text"
                                        fullWidth
                                        name='Institute'
                                        value={formData.educationDetails.Institute}
                                        onChange={(e) => handleEducationChange(e, 'educationDetails', "Institute")}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="dense"
                                        label="Year Of Completion"
                                        type="text"
                                        fullWidth
                                        name='Yearofcompletion'
                                        value={formData.educationDetails.Yearofcompletion}
                                        onChange={(e) => handleEducationChange(e, 'educationDetails', "Yearofcompletion")}

                                    />
                                    {/**registartion details */}
                                    <TextField
                                        margin="dense"
                                        label="Registration Number"
                                        type="text"
                                        fullWidth
                                        name='registrationNumber'
                                        value={formData.registrationNumber}
                                        onChange={(e) => handleChange(e, 'registrationNumber')}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Registartion Year"
                                        type="text"
                                        fullWidth
                                        name='registartionYear'
                                        value={formData.registartionYear}
                                        onChange={(e) => handleChange(e, 'registartionYear')}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Registartion Council"
                                        type="text"
                                        fullWidth
                                        name='registartionCouncil'
                                        value={formData.registartionCouncil}
                                        onChange={(e) => handleChange(e, 'registartionCouncil')}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Years Of Experience"
                                        type="text"
                                        fullWidth
                                        value={formData.yearsOfExperience}
                                        onChange={(e) => handleChange(e, 'yearsOfExperience')}
                                    />
                                    
                                    <TextField
                                        margin="dense"
                                        label="Work Shops Attended"
                                        type="text"
                                        fullWidth
                                        value={formData.workshopsAttended}
                                        onChange={(e) => handleChange(e, 'workshopsAttended')}
                                    />
                                    <InputLabel id="profileImage-label">Profile Image</InputLabel>
                                    {/** files fields */}

                                    <TextField
                                        margin="dense"
                                        labelId="profileImage-label"
                                        type="file"
                                        fullWidth
                                        name='profileImage'

                                        onChange={(e) => handleFileChange(e, "profileImage")}
                                    />
                                    <InputLabel id="medicalLicenseProof-label">Medical License Proof</InputLabel>
                                    <TextField
                                        margin="dense"
                                        labelId="medicalLicenseProof-label"
                                        type="file"
                                        fullWidth
                                        name='medicalLicenseProof'
                                        onChange={(e) => handleFileChange(e, "medicalLicenseProof")}
                                    />
                                    <InputLabel id="identityProof-label">Identity Proof</InputLabel>
                                    <TextField
                                        margin="dense"
                                        labelId="identityProof-label"
                                        type="file"
                                        fullWidth
                                        name='identityProof'
                                        onChange={(e) => handleFileChange(e, "identityProof")}
                                    />
                                    <InputLabel id="MedicalRegistrationProof-label">Medical Registration Proof</InputLabel>
                                    <TextField
                                        margin="dense"
                                        labelId="MedicalRegistrationProof-label"
                                        type="file"
                                        fullWidth
                                        name='MedicalRegistrationProof'
                                        onChange={(e) => handleFileChange(e, "MedicalRegistrationProof")}
                                    />
                                    <InputLabel id="cv-label">CV</InputLabel>
                                    <TextField
                                        margin="dense"
                                        labelId="cv-label"
                                        type="file"
                                        fullWidth
                                        name='cv'
                                        onChange={(e) => handleFileChange(e, "cv")}
                                    />


                                    {/**keywords */}
                                    <InputLabel id="multiple-chip-label">Select Keywords</InputLabel>

                                    <Select
                                        labelId="multiple-chip-label"
                                        id="multiple-chip"
                                        multiple
                                        value={selectedItems}
                                        onChange={handleKeywordChange}
                                        renderValue={(selected) => (
                                            <div className={classes.chips}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} onDelete={handleDelete(value)} className={classes.chip} />
                                                ))}
                                            </div>
                                        )}
                                        style={{ minWidth: "100%" }}
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <InputLabel id="description-label">Select Keywords</InputLabel>
                                    <textarea
                                        margin="dense"
                                        labelId="description-label"
                                        type="text"
                                        fullWidth
                                        name='description'
                                        placeholder='Write Above You'
                                        value={formData.description}
                                        onChange={(e) => handleChange(e, 'description')}
                                        style={{
                                            height: "15%",
                                            width: "100%", borderRadius: "4px",
                                            padding: "10px"
                                        }}
                                    />
                                </Grid>
                            </Grid>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClose} style={{ borderColor: '#DC7844', color: '#DC7844' }} variant="outlined">
                                Cancel
                            </Button>
                            <Button onClick={onClickSendRequest} style={{ borderColor: '#DC7844', color: '#DC7844', marginRight: "30px" }} variant="outlined">
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Box>

            <Grid container spacing={2} justifyContent="flex-start" alignItems="center" marginTop={3}>
                {cardData.map((card) => (
                    <Grid item key={card.id}>
                        <Card key={card.id} sx={{ width: 225, height: 440 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={card.imageUrl}
                                    alt="green iguana"
                                    sx={{
                                        position: 'relative', height: "220px",
                                    }}
                                    onClick={() => navigate('/doctor-profile')}
                                />
                                {card.type === 'verify' && (
                                    <img src={stamp} alt="stamp" style={{ position: 'absolute', top: 0, left: 0, width: 40, height: 40 }} />
                                )}
                                <IconButton
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        color: 'black',
                                    }}
                                    onClick={handleClick}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={() => handleEditDialogOpen(card)}>Edit</MenuItem>

                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                </Menu>
                                <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
                                    <DialogTitle style={{ color: "#033043", fontFamily: "Lato", fontSize: "28px", }}>Edit From</DialogTitle>
                                    <DialogContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    margin="dense"
                                                    label="ID"
                                                    type="number"
                                                    fullWidth
                                                    value={editId}
                                                    onChange={(e) => setEditId(e.target.value)}
                                                />

                                                <TextField
                                                    margin="dense"
                                                    label="Email"
                                                    type="text"
                                                    fullWidth
                                                    value={editEmail}
                                                    onChange={(e) => setEditEmail(e.target.value)}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <MailOutlineIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                                <TextField
                                                    margin="dense"
                                                    label="Phone Number"
                                                    type="text"
                                                    fullWidth
                                                    value={editPhoneNumber}
                                                    onChange={(e) => setEditPhoneNumber(e.target.value)}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <CallIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    margin="dense"
                                                    label="Name"
                                                    type="text"
                                                    fullWidth
                                                    value={editName}
                                                    onChange={(e) => setEditName(e.target.value)}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <FaceIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                                <TextField
                                                    margin="dense"
                                                    label="Password"
                                                    type="text"
                                                    fullWidth
                                                    value={editId}
                                                    onChange={(e) => setEditId(e.target.value)}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <PasswordIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />


                                                <TextField
                                                    margin="dense"
                                                    label="Specialization"
                                                    type="text"
                                                    fullWidth
                                                    value={editSpecialization}
                                                    onChange={(e) => setEditSpecialization(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    margin="dense"
                                                    label="Place"
                                                    type="text"
                                                    fullWidth
                                                    value={editPlace}
                                                    onChange={(e) => setEditPlace(e.target.value)}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <PlaceIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleEditDialogClose} style={{ borderColor: '#DC7844', color: '#DC7844' }} variant="outlined">
                                            Cancel
                                        </Button>
                                        <Button onClick={handleEditDoctor} style={{ borderColor: '#DC7844', color: '#DC7844', marginRight: "30px" }} variant="outlined">
                                            Save
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <CardContent onClick={() => navigate('/doctor-profile')}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.name}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ marginTop: "-8px", marginBottom: "5px" }}>
                                        {card.specialization}
                                    </Typography>
                                    <Divider />
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13, marginTop: '5px' }}>
                                        Address: {card.address}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13 }}>
                                        Phone: {card.phoneNumber}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13 }}>
                                        Email: {card.email}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </ThemeProvider>
    );
};

export default Doctor;