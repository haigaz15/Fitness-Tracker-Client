import { ExerciseVolume } from "../types/exercise-types";

export const handleRepsChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  exerciseVolume: ExerciseVolume
): void => {
  exerciseVolume.reps = e.target.value;
};
export const handleRestChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  exerciseVolume: ExerciseVolume
): void => {
  exerciseVolume.rest = e.target.value;
};
export const handleWeightChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  exerciseVolume: ExerciseVolume
): void => {
  exerciseVolume.weight = e.target.value;
};
