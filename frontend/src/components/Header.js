import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <a href="/" style={{ color: "white", textDecoration: "none" }}>
        <Typography>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8A1ospWzsza0niIjGynZMuKNqAgTrBe53KC3MSBcDU1Rbv9mg46bbqy0C0_7tcov9nQ&usqp=CAU"
            alt="Logo"
            style={{ height: "50px", marginTop :"10px", marginLeft: "15px" }}
          />
        </Typography>
      </a>
    </div>
  );
};

export default Header;
