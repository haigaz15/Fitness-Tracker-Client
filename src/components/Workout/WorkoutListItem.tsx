import { Box, Typography } from "@mui/material";

const WorkoutListItem = () => {
  return (
    <Box sx={{ width: "80%", marginTop: 1, display: "flex", boxShadow: 2 }}>
      <Box sx={{ flex: 1.5, height: "320px" }}></Box>
      <Box sx={{ flex: 3, display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">Exercise Name: </Typography>
        <Typography variant="body2" sx={{ flex: 2, marginTop: 1 }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of...
        </Typography>
        <Box
          id="targets"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="subtitle1" textAlign="left">
            Set: 4 Reps: 12-12-4-4 Rest: 30-30-20-20 Weight: 140-140-150-160
          </Typography>
          <Typography variant="subtitle1" textAlign="left">
            Primary Muscle: Chest
          </Typography>
          <Typography variant="subtitle2" textAlign="left">
            Secondary Muscles: Triceps - shoulders - back
          </Typography>
          <Typography variant="subtitle2" textAlign="left">
            Difficulty: Hard
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkoutListItem;
