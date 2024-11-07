import React from "react";
import { ExerciseListType, ExerciseOnWorkout } from "./exercise-types";

export interface WorkoutSession {
  name: string;
  workoutDate: string;
  notes: string;
  exercises: ExerciseOnWorkout[];
}

export interface CreateNewWorkoutProps {
  open: boolean;
  handleClose: () => void;
  exercises: ExerciseListType[];
  setExercises: React.Dispatch<React.SetStateAction<ExerciseListType[]>>;
  currentPage: number;
  autoCompleteOpen: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setAutoCompleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface WorkoutHeadProps {
  openCreateWorkout: boolean;
  setOpenCreateWorkout: React.Dispatch<React.SetStateAction<boolean>>;
  exercises: ExerciseListType[];
  setExercises: React.Dispatch<React.SetStateAction<ExerciseListType[]>>;
  currentPage: number;
  autoCompleteOpen: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setAutoCompleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CreateNewWorkoutModalProps {
  exercsies: ExerciseListType[];
  handleLoadMoreExercises?: (e: React.SyntheticEvent) => void;
  autoCompleteOpen: boolean;
  setAutoCompleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loadingExercises?: boolean;
  autocompleteRefCall?: (node: HTMLDivElement | null) => void;
}

export interface WorkoutPresenterProps {
  renderWorkoutList: () => React.ReactNode;
  renderWorkoutEx: () => React.ReactNode;
  mainStyle: { [key: string]: any };
  workoutListStyle: { [key: string]: any };
  workoutExStyle: { [key: string]: any };
}
