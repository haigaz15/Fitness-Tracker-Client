import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
  palette: {
    primary: {
      main: "#FF3D00", // Bold Orange
    },
    secondary: {
      main: "#212121", // Charcoal Black
    },
    background: {
      default: "#F1F1F1", // Soft Light Gray (General Background)
      paper: "#FAFAFA", // Light Grayish White (Cards and Paper)
    },
    text: {
      primary: "#212121", // Dark Gray (Primary Text)
      secondary: "#757575", // Medium Gray (Secondary Text)
    },
    success: {
      main: "#76FF03", // Bright Lime Green (Success/Positive Action)
    },
    warning: {
      main: "#FFC107", // Bright Yellow (Warning/Alert)
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FAFAFA", // Light gray for cards
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
          borderRadius: "12px", // Rounded corners for modern look
          padding: "16px", // Consistent padding
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded corners
          fontWeight: "bold", // Bold font
          padding: "10px 20px", // Extra padding
        },
        containedPrimary: {
          backgroundColor: "#FF3D00", // Main button color
          color: "#FFFFFF", // White text
          "&:hover": {
            backgroundColor: "#D32F2F", // Darker red on hover
            color: "#FFFFFF", // Keep text white for contrast
          },
        },
        containedSecondary: {
          backgroundColor: "#212121", // Secondary button background
          color: "#FFFFFF", // White text
          "&:hover": {
            backgroundColor: "#484848", // Lighter black on hover
            color: "#FFFFFF", // Keep text white
          },
        },
        outlinedPrimary: {
          borderColor: "#FF3D00", // Red border for outlined button
          color: "#FF3D00", // Red text
          "&:hover": {
            backgroundColor: "#FFEDEA", // Light red background on hover
            color: "#FF3D00", // Keep text red
          },
        },
        textPrimary: {
          color: "#FF3D00", // Primary text color
          "&:hover": {
            backgroundColor: "#FFEDEA", // Light red background on hover
            color: "#FF3D00", // Keep text red
          },
        },
      },
    },
  },
});
