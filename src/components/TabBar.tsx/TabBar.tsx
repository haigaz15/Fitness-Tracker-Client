import React from "react";
import { Tabs, Tab, Box, Toolbar } from "@mui/material";

const TabBar = function () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Toolbar />
      <Tabs value={value} onChange={handleChange} aria-label="exercise types">
        <Tab label="Barbell" />
        <Tab label="Dumbbell" />
        <Tab label="Kettlebell" />
        <Tab label="Bodyweight" />
        {/* Add more tabs as needed */}
      </Tabs>
    </Box>
  );
};

export default TabBar;
