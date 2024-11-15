import { Box, Typography } from "@mui/material";

const Error: React.FC<{ error: string }> = ({ error }) => {
  return (
    <Box
      sx={{
        widht: "100%",
        height: "90vh",
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
          {error}
        </Typography>
      </Box>
    </Box>
  );
};

export default Error;
