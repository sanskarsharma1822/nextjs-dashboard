"use client";
// import Link from "next/link";
// import styles from "./styles.module.css";

// const Nav = () => {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Link href="/">hi</Link>
//       </div>
//       <div className={styles.menu}>
//         <Link href="/">hi</Link>
//         <Link href="/">hi</Link>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import "./styles.module.css";

const Item = ({ title, to, icon, selected, setSelected, collapse }) => {
  return (
    <div>
      <MenuItem
        active={selected === title}
        style={{
          // color: "#e0e0e0",
          color: selected == title ? "white" : "#e0e0e0",
          margin: collapse ? "12vh 0" : "1.75vh 0",
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography style={{ fontSize: "14px", fontWeight: "600" }}>
          {title}
        </Typography>
        {/* <Link to="/" /> */}
      </MenuItem>
    </div>
  );
};

const Nav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box position="fixed" left="0" top="0">
      <Sidebar
        backgroundColor="#1F2A40"
        rootStyles={{
          opacity: "1 !important",
          height: "100vh",
          minWidth: "200px",
          width: "180px",
          borderColor: "#1F2A40",
        }}
        className="menu-item"
        collapsed={isCollapsed}
      >
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: {
              "&:hover": {
                backgroundColor: "transparent",
              },
            },
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              // margin: "10px 0 20px 0",
              margin: "50px 0 20px 0",
              color: "#e0e0e0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                // mt="8vh"
              >
                <img
                  src="../images/zs logo.png"
                  // src="public\images\soulestate-high-resolution-logo-white-on-transparent-background.png"
                  alt="profile"
                  height="80px"
                  width="100px"
                />
                <IconButton
                  style={{ color: "white" }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <AccountCircleIcon
                style={{
                  height: "116.6px",
                  width: "116.6px",
                  color: "white",
                  marginBottom: "-0.5vh",
                }}
              />
              <Typography style={{ color: "#4cceac", fontSize: "18px" }}>
                User
              </Typography>
            </div>
          )}

          <Box
            marginTop={isCollapsed ? "10vh" : "6vh"}
            paddingLeft={isCollapsed ? undefined : "2%"}
          >
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              collapse={isCollapsed}
            />
            <Item
              title="Manage Team"
              to="/"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              collapse={isCollapsed}
            />
            <Item
              title="Contacts Information"
              to="/"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              collapse={isCollapsed}
            />
          </Box>
          <Box
            marginTop={isCollapsed ? "18vh" : "15vh"}
            paddingLeft={isCollapsed ? "4%" : "6%"}
          >
            <MenuItem
              style={{
                // color: "#e0e0e0",
                // color: "white",
                // margin: collapse ? "12vh 0" : "1.75vh 0",
                color: "#db4f4a",
              }}
              icon=<LogoutIcon fontSize="large" />
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                LogOut
              </Typography>
            </MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Nav;
