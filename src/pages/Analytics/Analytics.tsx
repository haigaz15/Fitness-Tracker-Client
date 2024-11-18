import { Box, Toolbar, Typography } from "@mui/material";
import ExLineChart from "../../components/Charts/ExLineChart";

const Analytics = () => {
  return (
    <Box>
      <Toolbar />
      <Typography variant="h1" color="text.secondary">
        Analytics
      </Typography>
      <ExLineChart />
    </Box>
  );
};

export default Analytics;
