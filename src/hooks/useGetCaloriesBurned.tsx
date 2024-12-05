import { useEffect, useState } from "react";
import { BurnedCalories } from "../types/workout-stat";
import workoutStatAPiServiceInstance from "../services/WorkoutStatAPIService";

const useGetCaloriesBurned = () => {
  const [burnedCalories, setBurnedCalories] = useState<BurnedCalories[]>([]);

  useEffect(() => {
    const fetchCaloriesBurnedPerDay = async () => {
      try {
        const newBurnedCalories =
          await workoutStatAPiServiceInstance.getBurnedCalories();
        setBurnedCalories(newBurnedCalories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCaloriesBurnedPerDay();
  }, []);
  return burnedCalories;
};

export default useGetCaloriesBurned;
