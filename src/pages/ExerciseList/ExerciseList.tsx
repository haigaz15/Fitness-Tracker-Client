import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import TabBar from "../../components/TabBar.tsx/TabBar";
import { ExerciseListType } from "../../types/ExerciseListTypes";
import "./ExerciseList.css";
interface ExerciseListProps {
  exercises: ExerciseListType[];
}

const ExerciseList: React.FC<ExerciseListProps> = function ({ exercises }) {
  return (
    <div className="exercise-list">
      <TabBar />
      {exercises.map((exercise, index) => {
        return (
          <ExerciseCard
            imageUrl=""
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
