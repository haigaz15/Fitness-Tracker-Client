import { ExerciseOnWorkout } from "./exercise-types";

export interface WorkoutSession {
  name: string;
  workoutDate: string;
  notes: string;
  exercises: ExerciseOnWorkout[];
}
