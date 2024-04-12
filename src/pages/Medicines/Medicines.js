import React, { useState } from "react";
import {
  AppBar,
  TablePagination,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  Breadcrumbs,
  Link,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  AccordionDetails,
  Accordion,
  Select,
  Grid,
} from "@mui/material";
import {
  Search as SearchIcon,
  AddCircle as AddCircleIcon,
  CloudDownload as DownloadIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import createTheme
import Box from "@mui/material/Box";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { PiInfoDuotone } from "react-icons/pi";
// Create a theme object using createTheme
const theme = createTheme();

function Medicine({ handleSearch, handleAdd }) {
  // Sample data for the table
  const rows = [
    {
      sno: 1,
      medicineName: "Paracetamol",
      category: "Tablet",
      companyName: "Sky Pharma",
      purchaseDate: "02-25-2021",
      price: "$50",
      expiryDate: "02-25-2025",
      stock: 234,
      dosage: "500mg",
      activeIngredient: "Paracetamol",
      prescriptionRequired: false,
      indications: "Fever, Pain relief",
      contraindications: "Liver disease, Alcoholism",
      sideEffects: "Nausea, Rash, Liver damage (in high doses)",
      storageInstructions: "Store below 25°C in a dry place",
      usageInstructions: "Take 1 tablet every 4-6 hours as needed for pain or fever.",
      warnings: "Do not exceed the recommended dosage.",
      interactions: "May interact with alcohol and certain medications.",
      ageLimitation: "Not recommended for children under 12 years old."
    },
    {
      sno: 2,
      medicineName: "Amoxicillin",
      category: "Injectable",
      companyName: "Mandud Pharma",
      purchaseDate: "05-07-2022",
      price: "$23",
      expiryDate: "05-07-2025",
      stock: 30,
      dosage: "500mg",
      activeIngredient: "Amoxicillin",
      prescriptionRequired: true,
      indications: "Bacterial infections",
      contraindications: "Allergy to penicillin",
      sideEffects: "Diarrhea, Nausea, Rash",
      storageInstructions: "Store between 20°C to 25°C.",
      usageInstructions: "Administer as directed by a healthcare professional.",
      warnings: "Complete the full course of treatment as prescribed.",
      interactions: "May interact with certain antibiotics and oral contraceptives.",
      ageLimitation: "Not recommended for infants under 6 months old."
    },
    {
      sno: 3,
      medicineName: "Ibuprofen",
      category: "Tablet",
      companyName: "Sun Pharma",
      purchaseDate: "03-15-2023",
      price: "$35",
      expiryDate: "03-15-2026",
      stock: 100,
      dosage: "200mg",
      activeIngredient: "Ibuprofen",
      prescriptionRequired: false,
      indications: "Pain relief, Inflammation",
      contraindications: "Asthma, Stomach ulcers",
      sideEffects: "Stomach upset, Dizziness, Allergic reactions",
      storageInstructions: "Store below 30°C in a dry place.",
      usageInstructions: "Take 1-2 tablets every 4-6 hours as needed for pain.",
      warnings: "Do not take on an empty stomach. Avoid alcohol while taking.",
      interactions: "May interact with blood thinners and certain other medications.",
      ageLimitation: "Not recommended for children under 12 years old."
    },
    {
      sno: 4,
      medicineName: "Ciprofloxacin",
      category: "Injectable",
      companyName: "Medico Labs",
      purchaseDate: "07-20-2023",
      price: "$42",
      expiryDate: "07-20-2026",
      stock: 50,
      dosage: "250mg",
      activeIngredient: "Ciprofloxacin",
      prescriptionRequired: true,
      indications: "Bacterial infections",
      contraindications: "Pregnancy, Children under 18 years old",
      sideEffects: "Nausea, Diarrhea, Tendon rupture (rare)",
      storageInstructions: "Store at room temperature away from moisture and heat.",
      usageInstructions: "Administer as directed by a healthcare professional.",
      warnings: "Avoid sunlight exposure and use sunscreen.",
      interactions: "May interact with antacids, vitamins, and other medications.",
      ageLimitation: "Not recommended for children under 18 years old."
    },
    {
      sno: 5,
      medicineName: "Aspirin",
      category: "Tablet",
      companyName: "Global Pharma",
      purchaseDate: "09-10-2023",
      price: "$20",
      expiryDate: "09-10-2026",
      stock: 150,
      dosage: "81mg",
      activeIngredient: "Aspirin",
      prescriptionRequired: false,
      indications: "Pain relief, Fever, Blood thinning",
      contraindications: "Peptic ulcer disease, Children with viral infections",
      sideEffects: "Stomach irritation, Bleeding risk",
      storageInstructions: "Store at room temperature.",
      usageInstructions: "Take 1 tablet daily with food.",
      warnings: "Do not use in children or teenagers with flu or chickenpox.",
      interactions: "May interact with other blood thinners and NSAIDs.",
      ageLimitation: "Not recommended for children under 12 years old unless directed by a doctor."
    },
    {
      sno: 6,
      medicineName: "Diazepam",
      category: "Tablet",
      companyName: "Calmex Pharmaceuticals",
      purchaseDate: "11-05-2023",
      price: "$28",
      expiryDate: "11-05-2026",
      stock: 75,
      dosage: "5mg",
      activeIngredient: "Diazepam",
      prescriptionRequired: true,
      indications: "Anxiety, Muscle spasms, Seizures",
      contraindications: "Pregnancy, Glaucoma",
      sideEffects: "Drowsiness, Dizziness, Dependency (with prolonged use)",
      storageInstructions: "Store at room temperature away from light and moisture.",
      usageInstructions: "Take as directed by a healthcare professional.",
      warnings: "May be habit-forming. Avoid alcohol while taking.",
      interactions: "May interact with alcohol, other CNS depressants, and certain medications.",
      ageLimitation: "Not recommended for children under 6 years old."
    },
    {
      sno: 7,
      medicineName: "Lorazepam",
      category: "Tablet",
      companyName: "Relaxo Pharma",
      purchaseDate: "01-12-2024",
      price: "$30",
      expiryDate: "01-12-2027",
      stock: 90,
      dosage: "1mg",
      activeIngredient: "Lorazepam",
      prescriptionRequired: true,
      indications: "Anxiety, Insomnia, Panic disorders",
      contraindications: "Narrow-angle glaucoma, Pregnancy",
      sideEffects: "Drowsiness, Dizziness, Dependency (with prolonged use)",
      storageInstructions: "Store at room temperature away from light and moisture.",
      usageInstructions: "Take as directed by a healthcare professional.",
      warnings: "May be habit-forming. Avoid alcohol while taking.",
      interactions: "May interact with alcohol, other CNS depressants, and certain medications.",
      ageLimitation: "Not recommended for children under 12 years old."
    },
    {
      sno: 8,
      medicineName: "Insulin",
      category: "Injectable",
      companyName: "Diabetes Care",
      purchaseDate: "04-18-2024",
      price: "$55",
      expiryDate: "04-18-2027",
      stock: 25,
      dosage: "Varies",
      activeIngredient: "Insulin",
      prescriptionRequired: true,
      indications: "Diabetes",
      contraindications: "Hypoglycemia, Allergy to insulin",
      sideEffects: "Hypoglycemia, Injection site reactions",
      storageInstructions: "Store in the refrigerator. Do not freeze.",
      usageInstructions: "Administer as directed by a healthcare professional.",
      warnings: "Monitor blood sugar levels closely. Do not share needles.",
      interactions: "May interact with other medications affecting blood sugar.",
      ageLimitation: "Varies depending on the type of insulin and individual circumstances."
    },
    {
      sno: 9,
      medicineName: "Warfarin",
      category: "Tablet",
      companyName: "Blood Care",
      purchaseDate: "06-30-2024",
      price: "$45",
      expiryDate: "06-30-2027",
      stock: 60,
      dosage: "Varies",
      activeIngredient: "Warfarin",
      prescriptionRequired: true,
      indications: "Blood clot prevention",
      contraindications: "Pregnancy, Bleeding disorders",
      sideEffects: "Bleeding, Bruising, Skin necrosis (rare)",
      storageInstructions: "Store at room temperature away from moisture and heat.",
      usageInstructions: "Take as directed by a healthcare professional.",
      warnings: "Monitor blood clotting times regularly.",
      interactions: "May interact with many medications and foods.",
      ageLimitation: "Not recommended for children."
    },
    {
      sno: 10,
      medicineName: "Levothyroxine",
      category: "Tablet",
      companyName: "Thyro Pharma",
      purchaseDate: "09-22-2024",
      price: "$38",
      expiryDate: "09-22-2027",
      stock: 80,
      dosage: "25mcg, 50mcg, 75mcg, 100mcg, 125mcg, 150mcg",
      activeIngredient: "Levothyroxine",
      prescriptionRequired: true,
      indications: "Hypothyroidism",
      contraindications: "Hyperthyroidism, Untreated adrenal insufficiency",
      sideEffects: "Hair loss, Weight changes, Heart palpitations",
      storageInstructions: "Store at room temperature away from moisture and heat.",
      usageInstructions: "Take on an empty stomach, at least 30 minutes before eating.",
      warnings: "May take several weeks for full effects. Monitor thyroid levels regularly.",
      interactions: "May interact with many medications and supplements.",
      ageLimitation: "Not recommended for children under 12 years old."
    },
    {
      sno: 11,
      medicineName: "Acetaminophen",
      category: "Tablet",
      companyName: "Relief Pharma",
      purchaseDate: "12-05-2024",
      price: "$25",
      expiryDate: "12-05-2027",
      stock: 120,
      dosage: "500mg",
      activeIngredient: "Acetaminophen",
      prescriptionRequired: false,
      indications: "Pain relief, Fever",
      contraindications: "Liver disease, Alcoholism",
      sideEffects: "Nausea, Rash, Liver damage (in high doses)",
      storageInstructions: "Store at room temperature away from moisture and heat.",
      usageInstructions: "Take as directed by a healthcare professional.",
      warnings: "Do not exceed the recommended dosage.",
      interactions: "May interact with alcohol and certain medications.",
      ageLimitation: "Not recommended for children under 12 years old."
    },]

  const [anchorEl, setAnchorEl] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [editedSno, setEditedSno] = useState("");
  const [editedName, setEditedName] = useState("");
  const [editedCompanyName, setEditedCompanyName] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedcategory, setEditedCategory] = useState("");
  const [editedExpiryDate, setEditedExpiryDate] = useState("");
  const [editedStock, setEditedStock] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [medicinename, setMedicineName] = useState("");
  const [category, setCategory] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [price, setPrice] = useState("");

  const [stock, setStock] = useState("");

  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setEditRow(row);
  };

  const handleAddDialogClose = () => {
    setAddDialogOpen(false);
  };

  const handleSave = () => {
    // Handle saving data here
    console.log("Name:", name);
    setAddDialogOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = (row) => {
    handleClose();
    setEditedSno(row.sno);
    setEditedName(row.medicineName);
    setEditedCompanyName(row.companyName);
    setEditedCategory(row.category);
    setEditedDate(row.purchaseDate);
    setEditedPrice(row.price);
    setEditedExpiryDate(row.expiryDate);
    setEditedStock(row.stock);
    setEditDialogOpen(true);
    const theme = createTheme({
      palette: {
        primary: {
          main: "#DC7844", // Set your primary color here
        },
      },
    });
  };

  const handleDeleteClick = () => {
    // Handle delete action here
    handleClose();
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleSaveChanges = () => {
    // Handle saving changes here
    // For demonstration purposes, just log the edited values
    console.log("Edited Name:", editedName);
    console.log("Edited Company Name:", editedCompanyName);
    setEditDialogOpen(false);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#DC7844", // Set your primary color here
      },
    },
  });
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const getStockColor = (stock) => {
    if (stock >= 100) return "#4CAF50"; // Green for high stock
    if (stock >= 50) return "#FFC107"; // Yellow for medium stock
    return "#F44336"; // Red for low stock
  };

  // Function to check if product is expired or nearing expiry
  const isExpired = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const differenceInDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
    return differenceInDays <= 0;
  };
  const [expandedRow, setExpandedRow] = useState(null);
  const handleAccordionChange = (bookingId) => {
    setExpandedRow(bookingId === expandedRow ? null : bookingId);
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        style={{
          backgroundImage: "linear-gradient(to right, #fff, #36c0d3)",
          height: "60px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid style={{ flexDirection: "column", padding: "0 0 0 15px" }}>
          <Typography
            variant="h5"
            style={{
              fontFamily: "sans-serif",
              fontSize: "24px",
              fontWeight: 600,
              color: "#05445E",
            }}
          >
            Medicines
          </Typography>
          <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px" }}>
            <Link underline="hover" color="inherit" href="/dashboard">
              Home
            </Link>
            <Typography color="#189ab4">Medicines</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Box
        sx={{
          marginTop: "15px",
        }}
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: "#d1f1f4", padding: "10px" }}
        >
          <Toolbar variant="dense">
            <TextField
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "white",
                width: "250px",
              }}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ position: "absolute", right: 0 }}>
              <IconButton
                aria-label="add circle"
                // onClick={handleAdd}
                sx={{
                  backgroundColor: "#189ab4",
                  marginLeft: "10px",
                  color: "#eaf7f9",
                }}
              >
                <AddCircleIcon />
              </IconButton>

              <IconButton
                aria-label="download"
                sx={{
                  backgroundColor: "#189ab4",
                  marginLeft: "10px",
                  color: "#eaf7f9",
                }}
              >
                <DownloadIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Dialog open={addDialogOpen} onClose={handleAddDialogClose}>
          <DialogTitle
            style={{ color: "#033043", fontFamily: "Lato", fontSize: "28px" }}
          >
            New Medicine List
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={1}>
              {/* Grid item for Sno input */}
              <Grid item xs={6}>
                <TextField
                  label="Sno"
                  value={name}
                  type="number"
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Medicine Name"
                  value={medicinename}
                  onChange={(e) => setMedicineName(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LocalHospitalIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                {/* Adding a category dropdown */}
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  fullWidth
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  style={{ marginTop: "14px" }}
                >
                  <MenuItem value="" disabled>
                    Select Category
                  </MenuItem>
                  <MenuItem value="Category1">Tablet</MenuItem>
                  <MenuItem value="Category2">Syrup</MenuItem>
                  <MenuItem value="Category3">Injectable</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="CompanyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AddBusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Purchase Date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Expiry Date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MonetizationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Inventory2Icon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleAddDialogClose}
              sx={{
                color: "#DC7844",
                border: "1px solid #DC7844",
                borderRadius: "5px",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              sx={{
                color: "#DC7844",
                border: "1px solid #DC7844",
                borderRadius: "5px",
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>

        <TableContainer
          component={Paper}
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#f3fbfd" }}>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  Sno
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  Medicine Name
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  Category
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  Company Name
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  Manufacture Date
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  Stock
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  Expiry Date
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  Age Limitation
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  More
                </TableCell>

                <TableCell
                  align="left"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#05545e",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Pagination logic for rendering rows */}
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <React.Fragment key={row.sno}>
                    <TableRow >
                      <TableCell>{row.sno}</TableCell>
                      <TableCell>{row.medicineName}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.companyName}</TableCell>
                      <TableCell >{row.purchaseDate}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell style={{ color: getStockColor(row.stock) }}>{row.stock}</TableCell>
                      <TableCell style={{ color: isExpired(row.expiryDate) ? "#F44336" : "inherit" }}>{row.expiryDate}</TableCell>
                      <TableCell>{row.ageLimitation} </TableCell>
                      <TableCell
                        onClick={() => handleAccordionChange(row.sno)}
                        style={{ cursor: "pointer" }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography variant="body1" sx={{ marginRight: "5px" }}>
                            Info
                          </Typography>
                          <PiInfoDuotone />
                        </Box>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="more"
                          onClick={(event) => handleClick(event, row)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={() => handleEditClick(editRow)}>
                            Edit
                          </MenuItem>
                          <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                    {expandedRow === row.sno && (
                      <TableRow >
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}
                          colSpan={12}
                        >
                          <Accordion
                            sx={{
                              width: "100%",
                              boxShadow: "none",
                              backgroundColor: "#fffff",
                            }}
                            expanded={Boolean(editRow && editRow.sno === row.sno)}
                          >
                            <AccordionDetails>
                              <Table size="large">
                                <TableHead sx={{ backgroundColor: "#05445E" }}>
                                  <TableRow >
                                    <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Dosage</b></TableCell>
                                    <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Active Ingredient</b></TableCell>
                                    <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Side Effects</b></TableCell>
                                    <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Indications</b></TableCell>
                                    <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Storage Instructions</b></TableCell>
                                    <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Usage Instructions</b></TableCell>
                                    <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Warnings</b></TableCell>
                                    <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Interactions</b></TableCell>
                                  <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Attachment</b></TableCell> 
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow key={row.sno}>
                                    <TableCell>{row.dosage}</TableCell>
                                    <TableCell>{row.activeIngredient}</TableCell>
                                    <TableCell>{row.sideEffects}</TableCell>
                                    <TableCell>{row.indications}</TableCell>
                                    <TableCell>{row.storageInstructions}</TableCell>
                                    <TableCell>{row.usageInstructions}</TableCell>
                                    <TableCell>{row.warnings}</TableCell>
                                    <TableCell>{row.interactions}</TableCell>
                                    <TableCell align="center">{row.actions ? <a href="fgdfg" target="_blank"> Attachment</a> : "--"}</TableCell> 
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </AccordionDetails>
                          </Accordion>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Table pagination component */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ alignSelf: "center", width: "100%" }}
        />
        <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
          <DialogTitle
            style={{ color: "#033043", fontFamily: "Lato", fontSize: "28px" }}
          >
            Paracetamol
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Sno"
                  value={editedSno}
                  type="number"
                  onChange={(e) => setEditedSno(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Medicine Name"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LocalHospitalIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                {/* Adding a category dropdown */}
                <Select
                  value={editedcategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                  fullWidth
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  style={{ marginTop: "14px" }}
                >
                  <MenuItem value="Category1">Tablet</MenuItem>
                  <MenuItem value="Category2">Syrup</MenuItem>
                  <MenuItem value="Category3">Injectable</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Company Name"
                  value={editedCompanyName}
                  onChange={(e) => setEditedCompanyName(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AddBusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Purchase Date"
                  value={editedDate}
                  onChange={(e) => setEditedDate(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Expiry Date"
                  value={editedExpiryDate}
                  onChange={(e) => setEditedExpiryDate(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Price"
                  value={editedPrice}
                  onChange={(e) => setEditedPrice(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MonetizationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Stock"
                  value={editedStock}
                  onChange={(e) => setEditedStock(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Inventory2Icon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleEditDialogClose}
              sx={{
                color: "#DC7844",
                border: "1px solid #DC7844",
                borderRadius: "5px",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveChanges}
              sx={{
                color: "#DC7844",
                border: "1px solid #DC7844",
                borderRadius: "5px",
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}

export default Medicine;