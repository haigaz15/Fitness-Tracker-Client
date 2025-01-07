import { Box, Button, Toolbar } from "@mui/material";
import Bar from "../../components/AppBar/Bar";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Bar />
      <Toolbar />
      <Box>
        <h1>This is Home</h1>
        <p>Welcom to User Profile</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default HomeContainer;
