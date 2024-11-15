import { Box, Divider, Typography } from "@mui/material";
import TextArea from "../TextArea/TextArea";
import WorkoutListItem from "./WorkoutListItem";
import { useOutletContext, useParams } from "react-router-dom";
import { WorkoutSession } from "../../types/workout-type";
import { ExerciseOnWorkout } from "../../types/exercise-types";

const WorkoutListItems = () => {
  const { id } = useParams<{ id: string }>();
  const [workoutSessions]: [WorkoutSession[]] = useOutletContext();
  const items = workoutSessions.filter(
    (workoutSession: WorkoutSession) => workoutSession.id === id
  );
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box
        sx={{ display: "flex", marginTop: 1, justifyContent: "space-between" }}
      >
        <Typography variant="h4" textAlign="left">
          {items.length > 0 && items[0].name}
        </Typography>
        <Typography variant="h4" textAlign="left">
          Date:{" "}
          {items.length > 0 &&
            `${new Date(items[0].workoutDate).getDay()}/${new Date(
              items[0].workoutDate
            ).getMonth()}/${new Date(items[0].workoutDate).getFullYear()}`}
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
        {items.length > 0 &&
          items[0].exercises.map((exercise: ExerciseOnWorkout) => (
            <WorkoutListItem exercise={exercise} />
          ))}
      </Box>
      <Divider />
      <Box sx={{ marginTop: 2 }}>
        <Typography textAlign="left" variant="h6">
          Your Workout Notes :
        </Typography>
        <TextArea value={items.length > 0 && items[0].notes} />
      </Box>
    </Box>
  );
};

export default WorkoutListItems;
