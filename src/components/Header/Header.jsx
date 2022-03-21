import React from "react";
import { Link } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CottageIcon from "@mui/icons-material/Cottage";
import Box from "@mui/material/Box";

export const Header = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<CottageIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleIcon />}
          component={Link}
          to="/profile"
        />
        <BottomNavigationAction
          label="Chats"
          icon={<ChatIcon />}
          component={Link}
          to="/chats"
        />
      </BottomNavigation>
    </Box>
  );
};
