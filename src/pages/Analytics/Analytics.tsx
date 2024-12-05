import { Box, Toolbar, Typography } from "@mui/material";
import ExLineChart from "../../components/Charts/ExLineChart";

const Analytics = () => {
  return (
    <Box>
      <Toolbar />
      <Typography variant="h1">Welcom To Analytics</Typography>
      <ExLineChart title="test" />
    </Box>
  );
};

export default Analytics;
