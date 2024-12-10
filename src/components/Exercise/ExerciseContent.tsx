import { Typography } from "@mui/material";
import { ExerciseCardProps } from "../../types/exercise-types";

const ExerciseContent: React.FC<ExerciseCardProps> = ({
  name,
  description,
}) => {
  return (
    <>
      <Typography gutterBottom variant="h6" component="div">
        {name.length > 23 ? name.slice(0, 23) + " ..." : name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description.length > 150
          ? description.slice(0, 150) + " ..."
          : description}
      </Typography>
    </>
  );
};

export default ExerciseContent;
