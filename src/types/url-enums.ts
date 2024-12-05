export enum EXERCISEURL {
  GET_EXERCISES = "exercise-library",
}
export enum WORKOUTURL {
  GET_WORKOUTWITHEXERCISE = "workouts",
  POST_WORKOUTWITHEXERCISE = "workout",
  PUT_STARTWORKOUTSESSION = "workout-session/start",
  PUT_ENDWORKOUTSESSION = "workout-session/end",
  PUT_UPDATEWORKOUTSESSION = "workout-session",
  PUT_UPDATEWOKROUT_EXERCISE = "workout/workout-exercise",
}

export enum STATURL {
  GET_CALORRIES_PER_SESSION = "workout-stat/calories",
}
