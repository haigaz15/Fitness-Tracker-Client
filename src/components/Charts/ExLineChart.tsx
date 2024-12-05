import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const ExLineChart: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <LineChart
        sx={{ marginTop: 1 }}
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
};

export default ExLineChart;
