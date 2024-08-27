import { Box, Toolbar, Typography } from "@mui/material";

const Home = function () {
  return (
    <Box sx={{ color: "red" }}>
      <Toolbar />
      <Typography variant="h1" color="text.secondary">
        Welcome
      </Typography>
    </Box>
  );
};

export default Home;
