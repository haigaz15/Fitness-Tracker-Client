import React from "react";
import { Tabs, Tab, Box, Toolbar } from "@mui/material";
interface ChildComponentProps {
  searchBar: React.ComponentType;
}
const TabBar = function ({ searchBar: SearchBar }: ChildComponentProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        position: "fixed", // Fix the position
        top: 0, // Align it to the top
        width: "100%", // Make sure it spans the full width
        backgroundColor: "background.paper",
        zIndex: 1100, // Ensure it appears above other content
      }}
    >
      <Toolbar />
      <Tabs value={value} onChange={handleChange} aria-label="exercise types">
        <Tab label="Barbell" />
        <Tab label="Dumbbell" />
        <Tab label="Kettlebell" />
        <Tab label="Bodyweight" />
        <SearchBar />
      </Tabs>
    </Box>
  );
};

export default TabBar;
