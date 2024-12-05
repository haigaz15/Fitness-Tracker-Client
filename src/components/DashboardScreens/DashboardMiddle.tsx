import { Box, Paper } from "@mui/material";
import React from "react";

interface DashboardMiddleProps {
  styles: { [key: string]: any };
  leftCardContent: () => React.ReactNode;
}

const DashboardMiddle: React.FC<DashboardMiddleProps> = ({
  styles,
  leftCardContent,
}) => {
  return (
    <Box sx={{ ...styles.container }}>
      <Paper sx={{ ...styles.leftCard }}>
        {leftCardContent && leftCardContent()}
      </Paper>
      <Paper sx={{ ...styles.rightCard }}></Paper>
    </Box>
  );
};

export default DashboardMiddle;
