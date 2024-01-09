import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
const Header = () => {
  const [value, setValue] = useState();
  
  return (
    <div>
                <NavLink to="/" style={{ color: "white" }}>
            <Typography>
           
              <img
                src="https://www.gorilla-technology.com/img/logo/Gorilla-logo-style1.svg?v=202212161740"
                alt="Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
            </Typography>

            
          </NavLink>
      
      <AppBar sx={{ backgroundColor: "#D6B4FC" }} position="sticky">
        <Toolbar>

          {/* <Tabs
            sx={{ ml: "auto" }}
            textColor="#6439ff"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
           
           <Tab
    LinkComponent={NavLink}
    to="/customers"
    label="Customers"
    sx={{
      color: "#6439ff",
      "&:hover": {
        color: "white",
      },
    }}
  />
           <Tab
    LinkComponent={NavLink}
    to="/employees"
    label="Employees"
    sx={{
      color: "#6439ff",
      "&:hover": {
        color: "white",
      },
    }}
  />
  <Tab
    LinkComponent={NavLink}
    to="/projects"
    label="Projects"
    sx={{
      color: "#6439ff",
      "&:hover": {
        color: "white",
      },
    }}
  />
  <Tab
    LinkComponent={NavLink}
    to="/roles"
    label="Roles"
    sx={{
      color: "#6439ff",
      "&:hover": {
        color: "white",
      },
    }}
  />
  <Tab
    LinkComponent={NavLink}
    to="/resources"
    label="RAS"
    sx={{
      color: "#6439ff",
      "&:hover": {
        color: "white",
      },
    }}
  />
        
          </Tabs> */}
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
