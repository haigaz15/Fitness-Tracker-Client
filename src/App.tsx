import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExerciseList from "./pages/ExerciseList/ExerciseList";
import Analytics from "./pages/Analytics/Analytics";
import DashboardContainer from "./pages/Dashboard/DashboardContainer";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/UserProfile";
import WorkoutContainer from "./pages/Workout/WorkoutContainer";
import WorkoutListItems from "./components/Workout/WorkoutListItems";
import ProgramContainer from "./pages/Programs/ProgramContainer";
import LogContainer from "./pages/Log/LogContainer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-up",
      element: <LogContainer />,
    },
    {
      path: "/sign-in",
      element: <LogContainer />,
    },
    {
      path: "/user-profile",
      element: <UserProfile />,
      children: [
        { index: true, element: <DashboardContainer /> },
        { path: "dashboard", element: <DashboardContainer /> },
        {
          path: "exercise-library",
          element: <ExerciseList />,
        },
        {
          path: "workouts",
          element: <WorkoutContainer />,
          children: [{ path: ":id", element: <WorkoutListItems /> }],
        },
        { path: "analytics", element: <Analytics /> },
        { path: "programs", element: <ProgramContainer /> },
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
