import { Box, Typography } from "@mui/material";
import CreateWorkoutButton from "../Button/CreateWorkoutButton";

const WorkoutHead = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "70px",
        padding: 3,
      }}
    >
      <Typography variant="h2" color="text.secondary">
        Your Workout List
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "25%",
        }}
      >
        <CreateWorkoutButton
          handleClick={() => console.log("create workout")}
        />
      </Box>
    </Box>
  );
};

export default WorkoutHead;
