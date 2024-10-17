import { Card, CardContent, CardMedia } from "@mui/material";
import { ExCardProps } from "../../types/excard-type";

const ExCard: React.FC<ExCardProps> = ({
  cardStyle,
  cardContentStyle,
  cardMediaStyle,
  cardContentLayout,
  cardEndLayout,
}) => {
  return (
    <Card sx={cardStyle}>
      <CardMedia {...cardMediaStyle} />
      <CardContent {...cardContentStyle}>{cardContentLayout()}</CardContent>
      {cardEndLayout()}
    </Card>
  );
};

export default ExCard;
