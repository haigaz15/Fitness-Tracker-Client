import { Box, Button, Typography } from "@mui/material";
import TextArea from "../TextArea/TextArea";
import { useOutletContext, useParams } from "react-router-dom";
import WorkoutExTable from "./WorkoutExTable";
import ExModal from "../modal/ExModal";
import WorkoutSessionModalContent from "./WorkoutSessionModalContent";
import { WorkoutSession } from "../../types/workout-type";
import { ExerciseOnWorkoutWithError } from "../../types/exercise-types";
const WorkoutListItems = () => {
  const { id } = useParams<{ id: string }>();
  const [
    workoutSessions,
    workoutSessionModalOpen,
    handleStartWorkoutSession,
    setWorkoutSessionModalOpen,
    handleEndWorkoutSession,
  ]: [
    WorkoutSession[],
    boolean,
    (id: string | undefined, startTime: Date) => void,
    React.Dispatch<React.SetStateAction<boolean>>,
    (logs: ExerciseOnWorkoutWithError[], endTime: Date) => void
  ] = useOutletContext();
  const items = workoutSessions.filter(
    (workoutSession: WorkoutSession) => workoutSession.id === id
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "94%",
        padding: 2,
      }}
    >
      <Box
        sx={{ display: "flex", marginTop: 1, justifyContent: "space-between" }}
      >
        <Typography
          variant="h4"
          textAlign="left"
          sx={{
            background: "linear-gradient(90deg, #333333, #555555, #777777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          {items.length > 0 && items[0].name}
        </Typography>
        <Typography
          variant="h4"
          textAlign="left"
          sx={{
            background: "linear-gradient(90deg, #333333, #555555, #777777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Date:{" "}
          {items.length > 0 &&
            `${new Date(items[0].workoutDate).getDay()}/${new Date(
              items[0].workoutDate
            ).getMonth()}/${new Date(items[0].workoutDate).getFullYear()}`}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => handleStartWorkoutSession(id, new Date())}>
          Start Workout Session
        </Button>
        <Button>Add Workout to a Program</Button>
      </Box>
      <Box
        sx={{
          marginTop: 1,
          width: "100%",
          height: "465px",
          overflowY: "auto",
        }}
      >
        <WorkoutExTable exercises={items[0].exercises} />
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography textAlign="left" variant="h6">
          Your Workout Notes :
        </Typography>
        <TextArea value={items.length > 0 && items[0].notes} />
      </Box>
      <ExModal
        open={workoutSessionModalOpen}
        handleClose={() => setWorkoutSessionModalOpen(false)}
        renderModalContent={() => (
          <WorkoutSessionModalContent
            exercises={items[0].exercises}
            workoutId={id}
            handleEndWorkoutSession={handleEndWorkoutSession}
          />
        )}
      />
    </Box>
  );
};

export default WorkoutListItems;
