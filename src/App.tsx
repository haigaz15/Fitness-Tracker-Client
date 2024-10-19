import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExerciseList from "./pages/ExerciseList/ExerciseList";
import Workout from "./pages/Workout/Workout";
import Analytics from "./pages/Analytics/Analytics";
import DashboardContainer from "./pages/Dashboard/DashboardContainer";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
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
          element: <ExerciseList />,
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
