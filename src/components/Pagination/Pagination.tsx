import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const Pagination: React.FC<{ currentPage: number }> = ({ currentPage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "8px", // Rounded corners
        padding: "10px",
        width: "300px", // Set width for the box
        justifyContent: "space-between", // Space arrows and circle
        left: "0", // Changed to 0 for centering
        right: "0", // Allow the box to stretch to full width
        margin: "0 auto",
        marginTop: "5px",
      }}
    >
      <Button
        startIcon={<ArrowBack />}
        sx={{ color: "primary.main", textTransform: "none" }} // Disable uppercase transformation
      >
        Back
      </Button>
      <Box
        sx={{
          width: "40px", // Adjusted width for the circle to be a bit larger
          height: "40px", // Adjusted height to maintain circle proportions
          borderRadius: "50%", // Makes the box circular
          backgroundColor: "primary.main", // Circle color
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "white" }}>
          {currentPage} {/* Current page number */}
        </Typography>
      </Box>

      <Button
        endIcon={<ArrowForward />}
        sx={{ color: "primary.main", textTransform: "none" }} // Disable uppercase transformation
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
