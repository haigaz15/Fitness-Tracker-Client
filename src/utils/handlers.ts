import {
  ExerciseOnWorkout,
  ExerciseVolume,
  ExerciseVoulmeItem,
} from "../types/exercise-types";

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

export const handleRepsChangeExerciseOnWorkout = (
  item: ExerciseVoulmeItem,
  exerciseVolume: ExerciseOnWorkout,
  setNewItem: React.Dispatch<React.SetStateAction<string | null | undefined>>
): void => {
  exerciseVolume.reps = item;
  setNewItem(item);
};
export const handleRestChangeExerciseOnWorkout = (
  item: ExerciseVoulmeItem,
  exerciseVolume: ExerciseOnWorkout,
  setNewItem: React.Dispatch<React.SetStateAction<string | null | undefined>>
): void => {
  exerciseVolume.rest = item;
  setNewItem(item);
};
export const handleWeightChangeExerciseOnWorkout = (
  item: ExerciseVoulmeItem,
  exerciseVolume: ExerciseOnWorkout,
  setNewItem: React.Dispatch<React.SetStateAction<string | null | undefined>>
): void => {
  exerciseVolume.weight = item;
  setNewItem(item);
};
