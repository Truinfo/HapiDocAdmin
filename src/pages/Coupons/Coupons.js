import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { DialogContent, DialogContentText, DialogTitle, Typography, Breadcrumbs, DialogActions, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Person2Icon from '@mui/icons-material/Person2';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PasswordIcon from '@mui/icons-material/Password';

const theme = createTheme();

const Coupons = () => {
  const [open, setOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [create, setCreate] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [offerDate, setOfferDate] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [amount, setAmount] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };
  const handleSave = () => {
    setOpen(false);
  };
  const handleEdit = () => {
    // Handle edit functionality
    setDialogOpen(true);
    handleMenuClose();
  };

  const handleDelete = () => {
    // Handle delete functionality
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleOfferDateChange = (e) => {
    setOfferDate(e.target.value);
  };

  const handleExpireDateChange = (e) => {
    setExpireDate(e.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleCreateClose = () => {
    setCreate(false);
  }

  const handleOpen = () => {
    setCreate(true);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#DC7844', // Set your primary color here
      },
    },
  });


  return (
    <ThemeProvider theme={theme} >
      <Box >

        <Grid style={{
           backgroundImage: "linear-gradient(to right, #fff, #36c0d3)", height: "60px", display: "flex",
          flexDirection: "row", justifyContent: "space-between", alignItems: "center",
        }} >
          <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
            fontFamily: "sans-serif", fontSize: "24px", fontWeight: 600,
            color: "#05445E"
          }}>Coupons</Typography>
            <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
              <Link underline="hover" color="inherit" href="/dashboard">
                Home
              </Link>
              <Typography color="#189ab4">Coupons</Typography>
            </Breadcrumbs>

          </Grid>
          <Button
            variant="contained"
            style={{ backgroundColor: "#DC7844", color: "#FFFFFF" }}
            onClick={handleOpen}
          >
            Create
          </Button>
          <Dialog open={create} onClose={handleCreateClose}>
            <DialogTitle style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" style={{
                flexGrow: 1, color: "#033043",
                fontFamily: "Lato",
                fontSize: "30px",
              }}> Create Coupon</Typography>
              <CloseIcon onClick={handleCreateClose} style={{ cursor: 'pointer', }} />
            </DialogTitle>
            <DialogContent >
              <Grid container spacing={2} style={{ marginTop: "2px" }}>
                <Grid item xs={6} >
                  {/* Title field */}
                  <TextField
                    autoFocus
                    margin="none"
                    label="Title"
                    fullWidth
                    onChange={handleTitleChange}
                    InputProps={{
                      endAdornment: <Person2Icon />,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  {/* Code field */}
                  <TextField
                    autoFocus
                    margin="none"
                    label="Code"
                    fullWidth
                    onChange={handleCodeChange}
                    InputProps={{
                      endAdornment: <PasswordIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  {/* Offer Date field */}
                  <TextField
                    margin="none"
                    label="Offer Date"
                    type="date"
                    fullWidth
                    value={offerDate}
                    onChange={handleOfferDateChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  {/* Expire Date field */}
                  <TextField
                    margin="none"
                    label="Expire Date"
                    type="date"
                    fullWidth
                    value={expireDate}
                    onChange={handleExpireDateChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  {/* Amount field */}
                  <TextField
                    margin="none"
                    label="Amount"
                    fullWidth
                    onChange={handleAmountChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CurrencyRupeeIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  {/* Choose Image button and file display */}
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    type="file"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span">
                      Choose Image
                    </Button>
                  </label>
                  {imageFile && <Typography>{imageFile.name}</Typography>}
                </Grid>
                <Grid item xs={12}>
                  {/* Description field */}
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    onChange={handleDescriptionChange}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end">
                  {/* Save and Cancel buttons */}
                  <DialogActions>
                    <Button onClick={handleCreateClose} sx={{ border: '1px solid #DC7844', color: "#DC7844" }}>Cancel</Button>
                    <Button onClick={handleCreateClose} sx={{ border: '1px solid #DC7844', color: "#DC7844" }}>Save</Button>
                  </DialogActions>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={6}>
            <Grid container direction="column" alignItems="left" style={{ border: "1px solid #D3D3D3", marginTop: "30px", }} spacing={1}>
              <Grid style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="https://onemg.gumlet.io/marketing/02438c94-370b-4c45-90dc-8199d52d6681.png" alt="medicine" style={{ width: "40px", marginLeft: "30px" }} />
                <Grid>
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
              <Grid  >
                <CardContent sx={{ padding: "5px", marginLeft: "10%" }}>
                  <Typography variant="h7" >
                    Get up to 8% off + extra 8% on your allopathy medicine order.
                  </Typography>
                  <Box>
                    <Button onClick={handleClickOpen}>Terms & Conditions</Button>
                    <Button variant="text" style={{ backgroundColor: "#f7e3d9", marginLeft: "10%", cursor: "default" }}>Code</Button>
                  </Box>
                </CardContent>
              </Grid>
              <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <Box p={2}>
                  <Grid style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" style={{
                      flexGrow: 1, color: "#033043",
                      fontFamily: "Lato",
                      fontSize: "30px",
                    }}>Edit Coupon</Typography>
                    <CloseIcon onClick={handleDialogClose} style={{ cursor: 'pointer', }} />
                  </Grid>
                  <Grid container spacing={2} >
                    <Grid item xs={6}>
                      <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={handleTitleChange}
                        sx={{ marginTop: "3%" }}
                        InputProps={{
                          endAdornment: <Person2Icon />,
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        autoFocus
                        margin="dense"
                        label="Code"
                        fullWidth
                        value={code}
                        onChange={handleCodeChange}
                        InputProps={{
                          endAdornment: <PasswordIcon />,
                        }}
                      />
                    </Grid>
                    <Grid item xs={6} justifyContent="center">
                      <TextField
                        margin="dense"
                        label="Offer Date"
                        type="date"
                        fullWidth
                        value={offerDate}
                        onChange={handleOfferDateChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={6} justifyContent="center">
                      <TextField
                        margin="dense"
                        label="Expire Date"
                        type="date"
                        fullWidth
                        value={expireDate}
                        onChange={handleExpireDateChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Amount"
                        variant="outlined"
                        fullWidth
                        value={amount}
                        onChange={handleAmountChange}
                        margin="none"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <CurrencyRupeeIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: '15px' }}>
                      <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                        type="file"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="contained-button-file">
                        <Button variant="contained" component="span">
                          Choose Image
                        </Button>
                      </label>
                      {imageFile && <Typography>{imageFile.name}</Typography>}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        value={description}
                        multiline
                        rows={4}
                        onChange={handleDescriptionChange}
                        fullWidth
                        margin="none"
                      />
                    </Grid>
                  </Grid>
                  <DialogActions>
                    <Button onClick={handleDialogClose} sx={{ border: '1px solid #DC7844', color: "#DC7844" }}>Cancel</Button>
                    <Button onClick={handleDialogClose} sx={{ border: '1px solid #DC7844', color: "#DC7844" }}>Save</Button>
                  </DialogActions>
                </Box>
              </Dialog>
              <Dialog open={open} onClose={handleClose}>
                <Box p={2} style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginLeft: '30px', marginBottom: "0%" }}>
                    Coupon details
                  </Typography>
                  <CloseIcon onClick={handleClose} style={{ cursor: 'pointer', marginLeft: 'auto' }} />
                </Box>
                <DialogContent>
                  <Divider />
                  <DialogTitle style={{ color: "grey", }}>Get up to 8% off + up to 15% off on your first allopathy medicine order of ₹999 and above.</DialogTitle>
                  <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', marginLeft: "20px", color: "grey" }}>Terms & Conditions</Typography>
                  <DialogContentText>
                    <ul>
                      <li>Get up to 8% off (no limit) + extra 15% coupon discount (up to ₹270) on your first allopathy medicine order of ₹999 & above.</li>
                      <li>Get up to 8% off (no limit) + extra 5% coupon discount (up to ₹270) on your first allopathy medicine order of ₹499 & above.</li>
                      <li>The offers cannot be redeemed for cash or clubbed with any other offer or promotion.</li>
                      <li>In case of any further query pertaining to the use of vouchers or regarding the sale/offers, please email our customer care at care@1mg.com.</li>
                      <li>Doctor reserves its absolute right at any time to add, alter, withdraw, modify or change or vary any or all the terms and conditions of the offer at its sole discretion and the same shall be binding on the customer at all times.</li>
                    </ul>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={6}>
            <Grid container direction="column" alignItems="left" style={{ border: "1px solid #D3D3D3", marginTop: "30px", }} spacing={1}>
              <Grid style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjP44-RnS4BsVhzCheok8RJLc17GJ0ZcdDNMuybrKJ7aN8M8wuOwj9F08fA9BzW9ijIz0&usqp=CAU" alt="medicine" style={{ width: "40px", marginLeft: "30px" }} />
                <Grid>
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
              <Grid >
                <CardContent sx={{ padding: "5px", marginLeft: "10%" }}>
                  <Typography variant="h7" >
                    Get extra 10% off on Zingavita products.<br />
                  </Typography>
                  <Button onClick={handleClickOpen}>Terms & Conditions</Button>
                  <Button variant="text" style={{ backgroundColor: "#f7e3d9", marginLeft: "10%", cursor: "default" }}>Code</Button>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={6}>
            <Grid container direction="column" alignItems="left" style={{ border: "1px solid #D3D3D3", marginTop: "30px", }} spacing={1}>
              <Grid style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbt69bouNQAGQ6W-IytpXP_GTGpVSjetxVg&usqp=CAU" alt="medicine" style={{ width: "40px", marginLeft: "30px" }} />
                <Grid>
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={menuAnchorEl}
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
              <Grid >
                <CardContent sx={{ padding: "5px", marginLeft: "10%" }}>
                  <Typography variant="h7" >
                    Get up to 8% off + extra 8% on your allopathy medicine order.
                  </Typography>
                  <Box>
                    <Button onClick={handleClickOpen}>Terms & Conditions</Button>
                    <Button variant="text" style={{ backgroundColor: "#f7e3d9", marginLeft: "10%", cursor: "default" }}>Code</Button>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider >
  );
};

export default Coupons;