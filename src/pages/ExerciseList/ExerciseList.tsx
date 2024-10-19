import { useState } from "react";
import Exercise from "../../components/Exercise/Exercise";
import SearchBar from "../../components/SearchBar/SearchBar";
import TabBar from "../../components/TabBar/TabBar";
import { observer } from "mobx-react";
import "./ExerciseList.css";
import { useStore } from "../../hooks/userStore";
import Pagination from "../../components/Pagination/Pagination";
import { Box } from "@mui/material";

const ExerciseList: React.FC<any> = observer(() => {
  const [tabValue, setTabValue] = useState<string>("barbell");
  const { exerciseStore } = useStore();

  const handleTabValueChange = (
    e: React.SyntheticEvent,
    newValue: string
  ): void => {
    setTabValue(newValue);
    exerciseStore.setExerciseList(newValue);
  };

  return (
    <div className="exercise-list-container">
      <TabBar
        searchBar={SearchBar}
        tabValue={tabValue}
        handleTabValueChange={handleTabValueChange}
      />

      {exerciseStore.loading && <div>Loading...</div>}
      {exerciseStore.error && <div>Error: {exerciseStore.error}</div>}
      <Box className="exercise-list">
        {!exerciseStore.loading &&
          !exerciseStore.error &&
          exerciseStore.exerciseList.map((exercise, index) => (
            <Exercise
              imageUrl="https://weighttraining.guide/wp-content/uploads/2016/05/barbell-curl-resized.png"
              name={exercise.name}
              description={exercise.description}
              key={index}
            />
          ))}
      </Box>
      <Pagination currentPage={1} />
    </div>
  );
});

export default ExerciseList;
