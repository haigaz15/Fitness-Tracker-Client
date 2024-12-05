import axios from "axios";
import { STATURL } from "../types/url-enums";
import { BurnedCalories } from "../types/workout-stat";
class WorkoutStatAPIService {
  async getBurnedCalories(): Promise<BurnedCalories[]> {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/${STATURL.GET_CALORRIES_PER_SESSION}`,
      config
    );
    return result.data.burnedCalories;
  }
}
const workoutStatAPiServiceInstance = new WorkoutStatAPIService();

export default workoutStatAPiServiceInstance;
