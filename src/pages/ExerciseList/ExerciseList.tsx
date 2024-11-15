import { useEffect, useState } from "react";
import Exercise from "../../components/Exercise/Exercise";
import SearchBar from "../../components/SearchBar/SearchBar";
import TabBar from "../../components/TabBar/TabBar";
import { observer } from "mobx-react";
import "./ExerciseList.css";
import { useStore } from "../../hooks/userStore";
import Pagination from "../../components/Pagination/Pagination";
import { Box } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import NoMoreExercise from "../../components/Exercise/NoMoreExercise";
const ExerciseList: React.FC<any> = observer(() => {
  const [tabValue, setTabValue] = useState<string>("barbell");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { exerciseStore } = useStore();

  useEffect(() => {
    exerciseStore.setExerciseList(tabValue, currentPage * 6);
  }, [exerciseStore, tabValue, currentPage]);

  const handleTabValueChange = (
    e: React.SyntheticEvent,
    newValue: string
  ): void => {
    setTabValue(newValue);
    setCurrentPage(0);
  };

  const handleNextPage = (event: React.SyntheticEvent) => {
    setCurrentPage((currentVal) => (currentVal += 1));
  };

  const handlePreviousPage = (event: React.SyntheticEvent) => {
    setCurrentPage((currentVal) => {
      if (currentVal === 0) return 0;
      return (currentVal -= 1);
    });
  };

  return (
    <div className="exercise-list-container">
      <TabBar
        searchBar={SearchBar}
        tabValue={tabValue}
        handleTabValueChange={handleTabValueChange}
      />

      {exerciseStore.loading && <Loading />}
      {exerciseStore.error && <Error error={exerciseStore.error} />}
      {exerciseStore.exerciseList.length === 0 && <NoMoreExercise />}
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
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
});

export default ExerciseList;
