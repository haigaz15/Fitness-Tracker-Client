import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import ExerciseModal from "../modal/ExerciseModal";

export interface ExerciseCardProps {
  imageUrl: string;
  name: string;
  description: string;
}
const ExerciseCard: React.FC<ExerciseCardProps> = function ({
  imageUrl,
  name,
  description,
}) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleExerciseModalClose = () => {
    setOpenModal(false);
  };
  return (
    <Card
      sx={{ width: 400, padding: "8%", marginTop: "1%", marginLeft: "0.5%" }}
    >
      <CardMedia>
        <CardMedia component="img" height={300} image={imageUrl} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardMedia>
      <Button size="small" onClick={() => setOpenModal(true)}>
        Learn More
      </Button>
      <ExerciseModal
        open={openModal}
        handleClose={handleExerciseModalClose}
        exerciseInfo={{
          imageUrl: imageUrl,
          name: name,
          description: description,
        }}
      />
    </Card>
  );
};

export default ExerciseCard;
