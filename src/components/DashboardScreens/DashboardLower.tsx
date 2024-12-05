import { Box, Paper } from "@mui/material";

interface DashboardLowerProps {
  styles: { [key: string]: any };
}

const DashboardLower: React.FC<DashboardLowerProps> = ({ styles }) => {
  return (
    <Box sx={{ ...styles.container }}>
      <Paper sx={{ ...styles.leftCard }}></Paper>
      <Paper sx={{ ...styles.rightCard }}> </Paper>
    </Box>
  );
};

export default DashboardLower;
