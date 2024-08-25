import { ExerciseListType } from "../types/ExerciseListTypes";

function genorateExercises(): ExerciseListType[] {
  const exercises: ExerciseListType[] = [];

  for (let i = 0; i < 10; i++) {
    exercises.push({
      name: "barbell curl",
      type: "barbell",
      description:
        "curl the barbell up and then down do it in 4 seconds motion and hold for one second up",
    });
  }
  return exercises;
}

export default genorateExercises;
