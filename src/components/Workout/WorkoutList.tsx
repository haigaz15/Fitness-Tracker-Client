import { List, ListItemButton } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
const WorkoutList = () => {
  return (
    <>
      <List>
        <ListItemButton sx={{ height: "55px", color: "primary.main" }}>
          {" "}
          <AddCircleIcon sx={{ marginRight: 2 }} />
          Create new Workout
        </ListItemButton>
        <ListItemButton>Chest and Bieceps</ListItemButton>
      </List>
    </>
  );
};

export default WorkoutList;
