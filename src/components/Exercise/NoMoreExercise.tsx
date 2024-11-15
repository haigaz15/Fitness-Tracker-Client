import { Box, Typography } from "@mui/material";

const NoMoreExercise = () => {
  return (
    <Box
      sx={{
        widht: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography textAlign="center" variant="h2">
          No Exercises{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default NoMoreExercise;
