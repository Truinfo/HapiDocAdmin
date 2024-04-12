import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Typography,
    Avatar,
    Grid,
} from "@mui/material";
import { useState } from "react";

const data = [
    { name: 'John Wick', specility: 'Dermatology', priority: 'Low', Earns: "$100" },
    { name: 'John Snow', specility: 'Urology', priority: 'Low', Earns: "$100" },
    { name: 'Airi', specility: 'Gastroenterology', priority: 'High', Earns: "$100" },
    { name: 'Sarah ', specility: 'Psychiatry', priority: 'Medium', Earns: "$100" },
    { name: 'Harshit', specility: 'Cardiology', priority: 'Medium', Earns: "$100" },
    { name: 'Angelica', specility: 'Endocrinology', priority: 'High', Earns: "$100" },
    { name: 'Varun', specility: 'Pulmonology', priority: 'Low', Earns: "$100" },
    { name: 'Ashton', specility: 'Cardiology', priority: 'High', Earns: "$100" },
    { name: 'James Wilson', specility: 'Pulmonology', priority: 'Low', Earns: "$100" },
    { name: 'Emma Moore', specility: 'Dermatology', priority: 'Medium', Earns: "$100" },
];

const DoctorsTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Low':
                return '#4CAF50'; // Green for Low priority
            case 'Medium':
                return '#FFC107'; // Yellow for Medium priority
            case 'High':
                return '#F44336'; // Red for High priority
            default:
                return '#000'; // Default color
        }
    };
    return (
        <Grid>
            <TableContainer component={Paper} style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "100%", padding: "30px",}}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#FFFF' }}>
                            <TableCell style={{ textAlign: "left", fontSize: "20px", color: "#050505", paddingLeft:"15px" }}>Name</TableCell>
                            <TableCell style={{ textAlign: "left", fontSize: "20px", color: "#050505" }}>Priority</TableCell>
                            <TableCell style={{ textAlign: "left", fontSize: "20px", color: "#050505" }}>Earns</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow
                                    key={index}
                                    style={{
                                        backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                                    }}
                                >
                                    <TableCell>
                                        <Box display="flex" flexDirection="row"
                                            justifyContent="flex-start" alignContent="center">

                                            <Avatar alt={row.name} src={`/static/images/avatar/${index + 1}.jpg`} />
                                            <Box display="flex" flexDirection="column"
                                                justifyContent="flex-start" alignContent="center" padding="0 0 0 10px">
                                                <Typography variant="body1" style={{ paddingLeft: 10, fontSize: "19px", color: "#041c2b" }}>
                                                    {row.name}
                                                </Typography>
                                                <Typography variant="body1" style={{ paddingLeft: 10, fontSize: "15px", color: "#737373" }}>
                                                    {row.specility}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body1" style={{ backgroundColor: getPriorityColor(row.priority), 
                                        color:"#fff", width:"80px",padding:"5px", textAlign:"center", borderRadius:"4px"}}>
                                            {row.priority}
                                        </Typography>
                                    </TableCell>
                                    <TableCell style={{color: "#041c2b",fontSize: "15px",}}>{row.Earns}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
export default DoctorsTable;
