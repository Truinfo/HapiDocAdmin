import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { useNavigate } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Button, Collapse, Divider, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import Notification from '../pages/Notifications/Notification';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { GiMedicinePills } from "react-icons/gi";
import { TbBrandBooking } from "react-icons/tb";

import { TbTestPipe } from "react-icons/tb";
import { BiClinic } from "react-icons/bi";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { FaClinicMedical } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa6";
import { MdOutlineVaccines } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import { ImCreditCard } from "react-icons/im";
import { BsFillTagsFill } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa6";

const drawerWidth = 200;
const openedMixin = (theme) => ({
  width: drawerWidth,
  borderColor: "#ede7f6",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 0px)`,
  borderColor: "#ede7f6",
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 0px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderColor: 'none',
  boxShadow: 'none',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,

}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1, // Ensure the AppBar is above the Drawer
  // width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - ${theme.spacing(8)} + 1px)`,

  width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - ${theme.spacing(8)} + 1px)`,
  marginLeft: open ? `${drawerWidth}px` : 0,
  background: 'transparent', // Set a transparent background
  boxShadow: 'none', // Remove the box shadow if needed
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    borderColor: '#fff', // Remove the border
    boxShadow: 'none', // Remove the box shadow
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '30ch', // Set the initial width
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      '&:focus': {
        width: '20ch', // Set the width on focus
      },
    },
  },
}));

const drawerWidth1 = 380;
const RightDrawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth1,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  borderColor: '#fff',
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer - 1, // Set the zIndex to a lower value
  '& .MuiDrawer-paper': {
    width: drawerWidth1,
    boxSizing: 'border-box',
    borderColor: '#fff',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function Sidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);
  const [dimmed, setDimmed] = React.useState(false);
  const navigate = useNavigate();
  const handleNotificationsToggle = () => {
    setNotificationsOpen(!notificationsOpen);
    setDimmed(!dimmed); // Toggle the dimmed state
  };
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const SidebarTab = ({ icon, primary, route, subMenuItems, initiallyOpen }) => {
    const [openSubMenu, setOpenSubMenu] = React.useState(initiallyOpen || false);

    const isActive = window.location.pathname === route;

    const handleSubMenuToggle = () => {
      setOpenSubMenu(!openSubMenu);
      setOpen(!open);
    };
    const handleCloseSubMenu = () => {
      setOpenSubMenu(false);
    };
    return (
      <div>
        <ListItem
          disablePadding
          sx={{
            display: "block",
            backgroundColor: isActive ? "#d1f1f4" : "inherit",
            marginLeft: isActive ? "0px" : "0px",
            borderRadius: isActive ? '8px  0 0 8px' : '0',

          }}
          onClick={() => {
            if (subMenuItems) {
              handleSubMenuToggle();
            } else {
              navigate(route);
            }
          }}
        >
          <ListItem
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              cursor: subMenuItems ? "pointer" : "pointer",

            }}
          >
            <ListItemIcon
              primary={primary}
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                fontSize: isActive ? "1.5rem" : "1.2rem",
                color: isActive ? "#189ab4" : "#05445E",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={primary}
              sx={{
                opacity: open ? 1 : 0,
                fontSize: isActive ? "1.5rem" : "1.2rem",
                color: isActive ? "#02264d" : "#05445E",
                fontWeight: isActive ? "bold" : "none",
              }}
            />
            {subMenuItems && (openSubMenu ? <MdExpandLess /> : <MdExpandMore />)}
          </ListItem>
        </ListItem>
        {subMenuItems && (
          <Collapse in={openSubMenu} timeout="500" unmountOnExit style={{ marginLeft: "20px" }} onExited={handleCloseSubMenu}>
            <List component="div" disablePadding>
              {subMenuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  sx={{
                    paddingLeft: 0,
                    paddingBottom: "3px",
                    backgroundColor:
                      window.location.pathname === item.route
                        ? "#d1f1f4"
                        : "inherit",
                    borderRadius:
                      window.location.pathname === item.route
                        ? '8px  0 0 8px'
                        : "0",
                    fontSize:
                      window.location.pathname === item.route
                        ? '1.2rem'
                        : "1.0rem",
                  }}
                  onClick={() => navigate(item.route)}
                >
                  <ListItemIcon style={{ marginLeft: "10px", marginRight: "-30px", color: window.location.pathname === item.route ? "#189ab4" : "#05445E", }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.primary} sx={{ color: "#05445E", fontSize: "0.8rem" }} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </div>
    );
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box>

      </Box>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: '#05445E',
          borderRadius: '0 0px 0px 0',
          height: "11%"
        }}
      >
        <Toolbar>

          <div style={{ marginLeft: 'auto' }}>
            <IconButton
              sx={{ color: "#5e35b1", marginRight: "10px" }}
              onClick={handleNotificationsToggle}
            >
              <Badge badgeContent={3} color="warning">
                <NotificationsIcon style={{ color: "#fff" }} />
              </Badge>
            </IconButton>
            <IconButton sx={{ color: "#5e35b1", marginRight: "10px" }}>
              <SettingsIcon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton sx={{ color: "#5e35b1" }}>
              <AccountCircleIcon style={{ color: "#fff" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>

        <DrawerHeader position='fixed'>

          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={handleDrawerToggle}
          >
            {open ? <MenuIcon style={{ color: "#000" }} /> : <MenuIcon style={{ color: "#000" }} />}
          </IconButton>
        </DrawerHeader>
        <List>
          <SidebarTab
            icon={<MdSpaceDashboard />}
            primary="Dashboard"
            route="/dashboard"
          />

          <SidebarTab
            icon={<FaUserDoctor />}
            primary="Doctors"
            route="/doctors"
          />

          <SidebarTab
            icon={<GiMedicines />}
            primary="Medical Stores"
            route="/medicalstore"
          />

          <SidebarTab
            icon={<ImLab />}
            primary="Labs"
            route="/Labs" />

          <SidebarTab
            icon={<FaClinicMedical />}
            primary="Clinics"
            route="/clinics"
          />
          <SidebarTab
            icon={<FaUserGroup />}
            primary="Patients"
            route="/patients"
          />
          <SidebarTab
            icon={<TbBrandBooking />}
            primary="Bookings"
            subMenuItems={[
              { icon: <FaCalendarDay />, primary: "Appointments ", route: "/appointments" },
              { icon: <TbTestPipe />, primary: "Lab Tests", route: "/test-bookings" },
              { icon: <GiMedicinePills />, primary: "Medicine ", route: "/medicine-bookings" },
              { icon: <BiClinic />, primary: "Clinic ", route: "/clinic-bookings" },
              // Add more submenu items as needed
            ]}
            initiallyOpen={open}
          />
          <SidebarTab
            icon={<MdOutlineVaccines />}
            primary="Pharmacy"
            route="/pharmacy"
          />
          <SidebarTab
            icon={<BiSolidDonateBlood />}
            primary="Blood Donors"
            route="/blood-donors"
          />
          <SidebarTab
            icon={<ImCreditCard />}
            primary="Payments"
            route="/payments"
          />
          <SidebarTab
            icon={<BsFillTagsFill />}
            primary="Coupons"
            route="/coupons"
          />
          <SidebarTab
            icon={<FaRegNewspaper />}
            primary="Blog"
            route="/blog"
          />
        </List>
      </Drawer>
      <RightDrawer anchor="right" open={notificationsOpen} >
        <DrawerHeader sx={{ marginTop: "55px" }}>
          <Typography variant="h6">Notifications</Typography>
          <IconButton color="inherit" aria-label="toggle right drawer" onClick={handleNotificationsToggle}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        < Notification />
        <Box sx={{ marginTop: 'auto', padding: 2, textAlign: "center" }}>

          <Button > View More</Button>
        </Box>
      </RightDrawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          marginTop: '65px',
          backgroundColor: '#f9f9f9',
          borderRadius: '3px 0  0 0 ',
          filter: 'brightness(1.0)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}