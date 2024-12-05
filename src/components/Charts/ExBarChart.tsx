import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { BurnedCalories } from "../../types/workout-stat";
import { Typography } from "@mui/material";

interface BarChartProps {
  burnedCalories: BurnedCalories[];
  title: string;
  styles: { [key: string]: any };
}
const ExBarChart: React.FC<BarChartProps> = ({
  burnedCalories,
  title,
  styles,
}) => {
  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const burnedCaloriesMap: { [key: string]: number } = {};
  daysOfTheWeek.forEach((day) => {
    burnedCaloriesMap[day] = 0;
  });

  burnedCalories.forEach((burnedCalory) => {
    burnedCaloriesMap[burnedCalory.day] = burnedCalory.burnedCaloriesPerDay;
  });
  const xData = Object.keys(burnedCaloriesMap);
  const barCount = Object.values(burnedCaloriesMap);

  return (
    <>
      {" "}
      <Typography variant="h5">{title}</Typography>
      <BarChart
        sx={{ marginTop: 1 }}
        xAxis={[
          {
            scaleType: "band",
            data: xData,
            label: "Day of the Week",
          },
        ]}
        series={[
          {
            data: barCount,
            color: "#FF3D00",
            label: "burned calories in (kcal)",
          },
        ]}
        width={styles.width}
        height={styles.height}
      />
    </>
  );
};

export default ExBarChart;
