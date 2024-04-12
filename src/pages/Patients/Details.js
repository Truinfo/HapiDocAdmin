import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Chip from '@mui/material/Chip';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import Sidebar from '../../components/Sidebar';
function Details() {
  const { name } = useParams();
  const [customerDetails, setCustomerDetails] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState(null);
  const [medicalHistory, setMedicalHistory] = useState([
    "Previous condition Lorem ipsum dolor sit amet.",
    "Previous condition Consectetur adipiscing elit.",
    "Previous condition Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Previous condition Ut enim ad minim veniam.",
    "Previous condition Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Previous condition Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  ]);
  const [familyMembersHistory, setFamilyMembersHistory] = useState([
    {
      name: 'John Doe',
      dateOfBirth: '1995-05-15',
      age: 29,
      medicalIssue: 'High blood pressure',
      bloodGroup: 'O+',
    },
    {
      name: 'Jane Smith',
      dateOfBirth: '1988-12-10',
      age: 36,
      medicalIssue: 'Diabetes',
      bloodGroup: 'A-',
    },
  ]);

  const [testHistory, setTestHistory] = useState([
    {
      testName: 'Blood Test',
      date: '2023-05-20',
      patientName: 'John Doe',
    },
    {
      testName: 'X-Ray',
      date: '2023-07-10',
      patientName: 'Jane Smith',
    },
  ]);

  const [orderList, setOrderList] = useState([
    {
      medicineName: 'Paracetamol',
      quantity: 10,
      deliveryStatus: 'In transit',
      amount: '$20',
    },
    {
      medicineName: 'Aspirin',
      quantity: 5,
      deliveryStatus: 'Delivered',
      amount: '$15',
    },
  ]);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const data = await getDummyCustomerDetails(name);
        setCustomerDetails(data);
        setEditedDetails(data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomerDetails();
  }, [name]);

  const getDummyCustomerDetails = async (name) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const dummyData = {
      name: name,
      dateOfBirth: '1990-01-01',
      phoneNumber: '123-456-7890',
      bloodGroup: 'A+',
    };

    return dummyData;
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
      setProfilePicFile(file);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddRow = (setter) => {
    setter(prevState => [...prevState, {}]);
  };

  const handleMedicalHistoryChange = (index, value) => {
    const updatedHistory = [...medicalHistory];
    updatedHistory[index] = value;
    setMedicalHistory(updatedHistory);
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedFamilyMembers = [...familyMembersHistory];
    updatedFamilyMembers[index][field] = value;
    setFamilyMembersHistory(updatedFamilyMembers);
  };

  const handleTestHistoryChange = (index, field, value) => {
    const updatedTestHistory = [...testHistory];
    updatedTestHistory[index][field] = value;
    setTestHistory(updatedTestHistory);
  };

  const handleOrderListChange = (index, field, value) => {
    const updatedOrderList = [...orderList];
    updatedOrderList[index][field] = value;
    setOrderList(updatedOrderList);
  };

  const handleDownloadPDF = () => {
    alert('Downloading PDF...');
  };

  const handleSaveDetails = () => {
    // Save edited details logic goes here
    console.log("Saving edited details:", editedDetails);
    setIsEditing(false); // Turn off editing mode after saving
  };

  const handleAppointmentChange = (index, field, value) => {
    // Implement logic to update appointments
  };

  const appointments = [
    {
      name: 'Appointment 1',
      doctorName: 'Dr. Smith',
      speciality: 'Cardiology',
      status: 'Scheduled',
    },
    {
      name: 'Appointment 2',
      doctorName: 'Dr. Johnson',
      speciality: 'Dermatology',
      status: 'Completed',
    },
  ];

  return (
 
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', overflow: 'hidden' }}>
          <div style={{ gridColumn: 'span 12', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/Patients" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <ArrowBackIcon />
              <Typography variant="h6" style={{ marginLeft: '10px', color: '#05445E', fontWeight: 'bold' }}>DETAILS</Typography>
            </Link>
            <div>
              {isEditing ? (
                <button onClick={handleSaveDetails} style={{ background: '#4CAF50', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Save</button>
              ) : (
                <EditIcon onClick={handleEditClick} style={{ fontSize: '30px', color: '#05445E', cursor: 'pointer' }} />
              )}
            </div>
          </div>

          <div style={{ gridColumn: 'span 4', position: 'sticky', top: '20px', alignSelf: 'start' }}>
            <Card style={{ width: '100%', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', borderRight: '8px solid #05445E', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', marginBottom: '20px', margin: '0 auto' }}>
                {profilePic ? (
                  <img src={profilePic} alt="Profile Pic" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PhotoCameraIcon style={{ fontSize: '50px', color: '#666' }} />
                  </div>
                )}
                <input type="file" accept="image/*" id="profile-pic-upload" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: '0', cursor: 'pointer' }} onChange={handleProfilePicChange} />
              </div>

              {editedDetails && (
                <div>
                  <Typography variant="body1">{editedDetails.dateOfBirth} (Age)</Typography>
                  
                  <Typography variant="h5">{editedDetails.name}</Typography>
                  <Typography variant="body1">Phone: {editedDetails.phoneNumber}</Typography>
                  <Typography variant="body1">Blood Group: {editedDetails.bloodGroup}</Typography>
                </div>
              )}
            </Card>
          </div>


          <div style={{ gridColumn: 'span 8', marginBottom: '20px', marginLeft:"20px"}}>
            <Card style={{ width: '100%', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#fff', marginBottom: '20px', marginLeft: '-8px', borderLeft: '8px solid #05445E' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>Patient Appointments</Typography>
                <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '8px' }}>Name</th>
                      <th style={{ padding: '8px' }}>Doctor Name</th>
                      <th style={{ padding: '8px' }}>Speciality</th>
                      <th style={{ padding: '8px' }}>Appointment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment, index) => (
                      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'transparent' }}>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={appointment.name} onChange={(e) => handleAppointmentChange(index, 'name', e.target.value)} />
                          ) : (
                            appointment.name
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={appointment.doctorName} onChange={(e) => handleAppointmentChange(index, 'doctorName', e.target.value)} />
                          ) : (
                            appointment.doctorName
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={appointment.speciality} onChange={(e) => handleAppointmentChange(index, 'speciality', e.target.value)} />
                          ) : (
                            appointment.speciality
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={appointment.status} onChange={(e) => handleAppointmentChange(index, 'status', e.target.value)} />
                          ) : (
                            <Chip label={appointment.status} color={appointment.status === 'Scheduled' ? 'primary' : 'default'} />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {isEditing && <AddIcon onClick={handleAddRow} style={{ fontSize: '30px', color: '#05445E', cursor: 'pointer', margin: '10px auto', display: 'block' }} />}
              </CardContent>
            </Card>

            {/* Medical History */}
            <Card style={{ width: '100%', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#fff', marginBottom: '20px', marginLeft: '-8px', borderLeft: '8px solid #05445E' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>Previous Medical History</Typography>
                {medicalHistory.map((condition, index) => (
                  <div key={index}>
                    {isEditing ? (
                      <input type="text" value={condition} onChange={(e) => handleMedicalHistoryChange(index, e.target.value)} />
                    ) : (
                      <Typography variant="body1" style={{ marginBottom: '10px' }}>{condition}</Typography>
                    )}
                  </div>
                ))}
                {isEditing && <AddIcon onClick={() => handleAddRow(setMedicalHistory)} style={{ fontSize: '30px', color: '#05445E', cursor: 'pointer', margin: '10px auto', display: 'block' }} />}
              </CardContent>
            </Card>

            {/* Family Members Health History */}
            <Card style={{ width: '100%', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#fff', marginBottom: '20px', marginLeft: '-8px', borderLeft: '8px solid #05445E' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>Family Members Health History</Typography>
                <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '8px' }}>Name</th>
                      <th style={{ padding: '8px' }}>Date of Birth</th>
                      <th style={{ padding: '8px' }}>Age</th>
                      <th style={{ padding: '8px' }}>Medical Issue</th>
                      <th style={{ padding: '8px' }}>Blood Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    {familyMembersHistory.map((member, index) => (
                      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'transparent' }}>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={member.name} onChange={(e) => handleFamilyMemberChange(index, 'name', e.target.value)} />
                          ) : (
                            member.name
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="date" value={member.dateOfBirth} onChange={(e) => handleFamilyMemberChange(index, 'dateOfBirth', e.target.value)} />
                          ) : (
                            member.dateOfBirth
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="number" value={member.age} onChange={(e) => handleFamilyMemberChange(index, 'age', e.target.value)} />
                          ) : (
                            member.age
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={member.medicalIssue} onChange={(e) => handleFamilyMemberChange(index, 'medicalIssue', e.target.value)} />
                          ) : (
                            member.medicalIssue
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>

                          {isEditing ? (
                            <input type="text" value={member.bloodGroup} onChange={(e) => handleFamilyMemberChange(index, 'bloodGroup', e.target.value)} />
                          ) : (
                            member.bloodGroup
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {isEditing && <AddIcon onClick={() => handleAddRow(setFamilyMembersHistory)} style={{ fontSize: '30px', color: '#05445E', cursor: 'pointer', margin: '10px auto', display: 'block' }} />}
              </CardContent>
            </Card>

            {/* Test History */}
            <Card style={{ width: '100%', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#fff', marginBottom: '20px', marginLeft: '-8px', borderLeft: '8px solid #05445E' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>Test History</Typography>
                <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '8px' }}>Test Name</th>
                      <th style={{ padding: '8px' }}>Date</th>
                      <th style={{ padding: '8px' }}>Patient Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testHistory.map((test, index) => (
                      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'transparent' }}>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={test.testName} onChange={(e) => handleTestHistoryChange(index, 'testName', e.target.value)} />
                          ) : (
                            test.testName
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="date" value={test.date} onChange={(e) => handleTestHistoryChange(index, 'date', e.target.value)} />
                          ) : (
                            test.date
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={test.patientName} onChange={(e) => handleTestHistoryChange(index, 'patientName', e.target.value)} />
                          ) : (
                            test.patientName
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {isEditing && <AddIcon onClick={() => handleAddRow(setTestHistory)} style={{ fontSize: '30px', color: '#05445E', cursor: 'pointer', margin: '10px auto', display: 'block' }} />}
              </CardContent>
            </Card>

            {/* Order List */}
            <Card style={{ width: '100%', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#fff', marginBottom: '20px', marginLeft: '-8px', borderLeft: '8px solid #05445E' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>Order List</Typography>
                <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '8px' }}>Medicine Name</th>
                      <th style={{ padding: '8px' }}>Quantity</th>
                      <th style={{ padding: '8px' }}>Delivery Status</th>
                      <th style={{ padding: '8px' }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderList.map((order, index) => (
                      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'transparent' }}>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={order.medicineName} onChange={(e) => handleOrderListChange(index, 'medicineName', e.target.value)} />
                          ) : (
                            order.medicineName
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="number" value={order.quantity} onChange={(e) => handleOrderListChange(index, 'quantity', e.target.value)} />
                          ) : (
                            order.quantity
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={order.deliveryStatus} onChange={(e) => handleOrderListChange(index, 'deliveryStatus', e.target.value)} />
                          ) : (
                            order.deliveryStatus
                          )}
                        </td>
                        <td style={{ padding: '8px' }}>
                          {isEditing ? (
                            <input type="text" value={order.amount} onChange={(e) => handleOrderListChange(index, 'amount', e.target.value)} />
                          ) : (
                            order.amount
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {isEditing && <AddIcon onClick={() => handleAddRow(setOrderList)} style={{ fontSize: '30px', color: '#05445E', cursor: 'pointer', margin: '10px auto', display: 'block' }} />}
              </CardContent>
            </Card>
          </div>
        </div>
  );
}

export default Details;