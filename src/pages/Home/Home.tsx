import { Box, Toolbar } from "@mui/material";
import Bar from "../../components/AppBar/Bar";

const HomeContainer = () => {
  return (
    <>
      <Bar />
      <Toolbar />
      <Box>
        <h1>This is Home</h1>
        <p>Welcom to User Profile</p>
      </Box>
    </>
  );
};

export default HomeContainer;
