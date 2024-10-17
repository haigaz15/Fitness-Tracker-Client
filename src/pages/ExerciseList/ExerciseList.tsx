import { useState } from "react";
import Exercise from "../../components/Exercise/Exercise";
import SearchBar from "../../components/SearchBar/SearchBar";
import TabBar from "../../components/TabBar/TabBar";
import { ExerciseListType } from "../../types/exercise-types";
import "./ExerciseList.css";
interface ExerciseListProps {
  exercises: ExerciseListType[] | null;
}

const ExerciseList: React.FC<ExerciseListProps> = function ({ exercises }) {
  const [exerciseType, setExerciseType] = useState<string>("barbell");
  const [tabValue, setTabValue] = useState<string>("barbell");
  if (!exercises) {
    return <></>;
  }
  const filteredExercises = exercises.filter(
    (exercise) => exercise.type === exerciseType
  );

  const handleTabValueChange = (
    e: React.SyntheticEvent,
    newValue: string
  ): void => {
    setTabValue(newValue);
    setExerciseType(newValue);
  };

  return (
    <div className="exercise-list">
      <TabBar
        searchBar={SearchBar}
        tabValue={tabValue}
        handleTabValueChange={handleTabValueChange}
      />
      {filteredExercises.map((exercise, index) => {
        return (
          <Exercise
            imageUrl="https://weighttraining.guide/wp-content/uploads/2016/05/barbell-curl-resized.png"
            name={exercise.name}
            description={exercise.description}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ExerciseList;
