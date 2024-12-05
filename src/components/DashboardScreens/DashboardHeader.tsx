import { Box, Paper } from "@mui/material";

interface DashboardHeaderProps {
  styles: { [key: string]: any };
  leftCardContent: () => React.ReactNode;
  rightCardContent: () => React.ReactNode;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  styles,
  leftCardContent,
  rightCardContent,
}) => {
  return (
    <Box sx={{ ...styles.container }}>
      <Paper sx={{ ...styles.leftCard }}>
        {leftCardContent && leftCardContent()}
      </Paper>
      <Paper sx={{ ...styles.rightCard }}>
        {rightCardContent && rightCardContent()}
      </Paper>
    </Box>
  );
};

export default DashboardHeader;
