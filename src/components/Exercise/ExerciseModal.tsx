import { Box, IconButton } from "@mui/material";
import { ExerciseCardProps } from "../../types/exercise-types";
import ExCard from "../Card/ExCard";
import ExerciseModalCardContent from "./ExerciseModalCardContent";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const childStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflowY: "auto",
};

const ExerciseModal: React.FC<ExerciseCardProps> = ({
  imageUrl,
  name,
  description,
}) => {
  return (
    <>
      <ExCard
        cardStyle={childStyle}
        cardContentStyle={{ overflowY: "auto", maxHeight: "50vh" }}
        cardMediaStyle={{
          component: "img",
          height: 400,
          image: imageUrl,
          name: name,
        }}
        cardContentLayout={() => (
          <ExerciseModalCardContent name={name} description={description} />
        )}
        cardEndLayout={() => (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <IconButton>
              <ArrowBack />
            </IconButton>
            <IconButton>
              <ArrowForward />
            </IconButton>
          </Box>
        )}
      />
    </>
  );
};

export default ExerciseModal;
