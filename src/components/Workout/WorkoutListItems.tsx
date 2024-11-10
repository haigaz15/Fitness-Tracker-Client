import { Box, Divider, Typography } from "@mui/material";
import TextArea from "../TextArea/TextArea";
import WorkoutListItem from "./WorkoutListItem";

const listItems = [1, 2, 3, 4, 5, 6, 7];

const WorkoutListItems = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box
        sx={{ display: "flex", marginTop: 1, justifyContent: "space-between" }}
      >
        <Typography variant="h4" textAlign="left">
          Chest and Bieceps
        </Typography>
        <Typography variant="h4" textAlign="left">
          Date
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 1,
          width: "100%",
          height: "100%",
        }}
      >
        {listItems.map((listItem) => (
          <WorkoutListItem />
        ))}
      </Box>
      <Divider />
      <Box sx={{ marginTop: 2 }}>
        <Typography textAlign="left" variant="h6">
          Your Workout Notes
        </Typography>
        <TextArea label="update workout notes" />
      </Box>
    </Box>
  );
};

export default WorkoutListItems;
