import React from "react";
import { Tabs, Tab, Box, Toolbar } from "@mui/material";
import { TapBarExerciseListProps } from "../../types/tab-bar.type";

const TabBar: React.FC<TapBarExerciseListProps> = ({
  searchBar: SearchBar,
  tabValue,
  handleTabValueChange,
}) => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "background.paper",
        zIndex: 1100,
      }}
    >
      <Toolbar />
      <Tabs
        value={tabValue}
        onChange={handleTabValueChange}
        aria-label="exercise types"
      >
        <Tab label="Barbell" value="barbell" />
        <Tab label="Dumbbell" value="dumbbell" />
        <Tab label="Kettlebell" value="kettlebell" />
        <Tab label="Bodyweight" value="bodyweight" />
        <SearchBar />
      </Tabs>
    </Box>
  );
};

export default TabBar;
