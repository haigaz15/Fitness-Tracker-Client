import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import TabBar from "../../components/TabBar.tsx/TabBar";
import { ExerciseListType } from "../../types/ExerciseListTypes";
import "./ExerciseList.css";
interface ExerciseListProps {
  exercises: ExerciseListType[];
}

const ExerciseList: React.FC<ExerciseListProps> = function ({ exercises }) {
  return (
    <div className="exercise-list">
      <TabBar searchBar={SearchBar} />
      {exercises.map((exercise, index) => {
        return (
          <ExerciseCard
            imageUrl="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/barbell-curl-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4"
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
