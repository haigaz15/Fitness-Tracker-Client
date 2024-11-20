import React from "react";
import { ExerciseListType, ExerciseOnWorkout } from "./exercise-types";
import { Dayjs } from "dayjs";

export interface WorkoutSession {
  id: string;
  name: string;
  workoutDate: Date;
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
  exercises: ExerciseListType[];
  handleLoadMoreExercises?: (e: React.SyntheticEvent) => void;
  autoCompleteOpen: boolean;
  setAutoCompleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loadingExercises?: boolean;
  autocompleteRefCall?: (node: HTMLDivElement | null) => void;
  handleSaveWorkout: (
    workoutName: string,
    workoutDate: Dayjs | null,
    workoutNotes: string,
    workoutExercises: ExerciseOnWorkout[],
    setWorkoutExercises: React.Dispatch<
      React.SetStateAction<ExerciseOnWorkout[]>
    >,
    setWorkoutForum: React.Dispatch<
      React.SetStateAction<{
        name: string;
        date: Dayjs | null;
        notes: string;
      }>
    >
  ) => void;
  handleSearchedExercises: (
    e: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => void;
}

export interface WorkoutPresenterProps {
  renderWorkoutList: () => React.ReactNode;
  renderWorkoutListItem: () => React.ReactNode;
  mainStyle: { [key: string]: any };
  workoutListStyle: { [key: string]: any };
  workoutExStyle: { [key: string]: any };
}

export interface WorkoutSessionVolume {
  totalReps: number;
  totalSets: number;
  totalWeight: number;
  totalRest: number;
}
