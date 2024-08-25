import "./App.css";
import Bar from "./components/AppBar/Bar";
import NavBar from "./components/NavBar/NavBar";
import ExerciseList from "./pages/ExerciseList/ExerciseList";
import { ExerciseListType } from "./types/ExerciseListTypes";
import Navigations from "./types/Navigations";
import genorateExercises from "./utils/generator";

function App() {
  const exercises: ExerciseListType[] = genorateExercises();
  return (
    <>
      <Bar />
      <div className="app-container">
        <NavBar
          navigations={[
            Navigations.PROFILE,
            Navigations.EXERCISELIBRARY,
            Navigations.WORKOUTS,
            Navigations.ANALYTICS,
          ]}
        />
        <ExerciseList exercises={exercises} />
      </div>
    </>
  );
}

export default App;
