import { ExerciseStore } from "./ExerciseStore";
import { WorkoutStore } from "./WorkoutStore";

export class RootStore {
  exerciseStore: ExerciseStore;
  workoutStore: WorkoutStore;

  constructor() {
    this.exerciseStore = new ExerciseStore();
    this.workoutStore = new WorkoutStore();
  }
}

export interface RootStoreModel {
  exerciseStore: ExerciseStore;
  workoutStore: WorkoutStore;
}
