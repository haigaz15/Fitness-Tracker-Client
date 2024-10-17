import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ExerciseListType } from "./types/exercise-types";
import ExerciseList from "./pages/ExerciseList/ExerciseList";
import Workout from "./pages/Workout/Workout";
import Analytics from "./pages/Analytics/Analytics";
import DashboardContainer from "./pages/Dashboard/DashboardContainer";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/UserProfile";
import useFetchExercises from "./hooks/useFetchExercises";

function App() {
  const exercises: ExerciseListType[] | null = useFetchExercises();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user-profile",
      element: <UserProfile />,
      children: [
        { index: true, element: <DashboardContainer /> },
        { path: "dashboard", element: <DashboardContainer /> },
        {
          path: "exercise-library",
          element: <ExerciseList exercises={exercises} />,
        },
        { path: "workouts", element: <Workout /> },
        { path: "analytics", element: <Analytics /> },
      ],
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
