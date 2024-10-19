import { ExerciseStore } from "./ExerciseStore";

export class RootStore {
  exerciseStore: ExerciseStore;

  constructor() {
    this.exerciseStore = new ExerciseStore();
  }
}

export interface RootStoreModel {
  exerciseStore: ExerciseStore;
}
