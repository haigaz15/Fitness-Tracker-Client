import {
  Avatar,
  Box,
  Collapse,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ExerciseOnWorkout } from "../../types/exercise-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Divider from "@mui/material/Divider";

const WorkoutExercise: React.FC<{
  exercise: ExerciseOnWorkout;
  hasExpantion: boolean;
}> = ({ exercise, hasExpantion }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const array = new Array(exercise.set).fill(exercise.set);
  return (
    <Paper
      sx={{
        width: "90%",
        transition: "height 0.3s ease",
        marginTop: 2,
        padding: 1,
        marginBottom: 2,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Avatar
            alt={exercise.name}
            src="https://weighttraining.guide/wp-content/uploads/2016/05/barbell-curl-resized.png"
            sx={{ width: 56, height: 56 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", width: "90%" }}>
            <Typography variant="inherit" align="left" color="primary.main">
              {exercise.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1%",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ width: "100px" }}
                align="left"
              >
                sets {exercise.set}
              </Typography>
              <Typography
                variant="inherit"
                sx={{ width: "200px" }}
                align="left"
              >
                reps {exercise.reps}
              </Typography>
              <Typography
                variant="inherit"
                sx={{ width: "200px" }}
                align="left"
              >
                rest {exercise.rest}
              </Typography>
              <Typography
                variant="inherit"
                sx={{ width: "300px" }}
                align="left"
              >
                weight {exercise.weight}
              </Typography>
            </Box>
          </Box>
        </Box>
        {hasExpantion && (
          <IconButton
            size="small"
            sx={{
              "&:hover": {
                backgroundColor: "inherit", // Prevent background color change on hover
              },
            }}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <ExpandMoreIcon
              sx={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            />
          </IconButton>
        )}
      </Box>
      {hasExpantion && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider sx={{ marginTop: "1%" }} />
          <Box sx={{ marginTop: "1%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Typography variant="body2" sx={{ width: "80px" }}>
                Set
              </Typography>
              <Typography variant="body2" sx={{ width: "80px" }}>
                Reps
              </Typography>
              <Typography variant="body2" align="left" sx={{ width: "80px" }}>
                Rest(SEC)
              </Typography>
              <Typography variant="body2" align="left" sx={{ width: "80px" }}>
                Weight(KG)
              </Typography>
            </Box>
          </Box>
          {array.map((_, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "1%",
                }}
              >
                <TextField
                  size="small"
                  sx={{ width: "80px" }}
                  value={index + 1}
                />
                <TextField size="small" sx={{ width: "80px" }} value={""} />
                <TextField size="small" sx={{ width: "80px" }} value={""} />
                <TextField size="small" sx={{ width: "80px" }} value={""} />
              </Box>
            );
          })}
        </Collapse>
      )}
    </Paper>
  );
};

export default WorkoutExercise;
