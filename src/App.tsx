import React from "react";
import "./App.css";
import Bar from "./components/AppBar/Bar";
import NavBar from "./components/NavBar/NavBar";
import Navigations from "./types/Navigations";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ExerciseListType } from "./types/ExerciseListTypes";
import genorateExercises from "./utils/generator";
import ExerciseList from "./pages/ExerciseList/ExerciseList";
import Workout from "./pages/Workout/Workout";
import Analytics from "./pages/Analytics/Analytics";

function Layout() {
  return (
    <>
      <Bar />
      <div className="app-container">
        <NavBar
          navigations={[
            Navigations.HOME,
            Navigations.EXERCISELIBRARY,
            Navigations.WORKOUTS,
            Navigations.ANALYTICS,
          ]}
        />
        <Outlet />
      </div>
    </>
  );
}

function App() {
  const exercises: ExerciseListType[] = genorateExercises();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
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
