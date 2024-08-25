import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

interface ExerciseCardProps {
  imageUrl: string;
  name: string;
  description: string;
}
const ExerciseCard: React.FC<ExerciseCardProps> = function ({
  imageUrl,
  name,
  description,
}) {
  return (
    <Card>
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
      <Button size="small">Learn More</Button>
    </Card>
  );
};

export default ExerciseCard;
