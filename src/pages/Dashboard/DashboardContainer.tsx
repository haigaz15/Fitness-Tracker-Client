import { Button, useMediaQuery, useTheme } from "@mui/material";
import ExBarChart from "../../components/Charts/ExBarChart";
import DashboardHeader from "../../components/DashboardScreens/DashboardHeader";
import DashboardLower from "../../components/DashboardScreens/DashboardLower";
import DashboardMiddle from "../../components/DashboardScreens/DashboardMiddle";
import useGetCaloriesBurned from "../../hooks/useGetCaloriesBurned";
import DashboardPresenter from "./DashboardPresenter";
import ExGaugeChart from "../../components/Charts/ExGaugeChart";
import { useState } from "react";

const headerStyles = {
  container: {
    display: "flex",
    width: "100%",
    height: "20%",
  },
  leftCard: {
    flex: 8,
    marginRight: 3,
    marginLeft: 2,
  },
  rightCard: {
    flex: 4,
    marginRight: 2,
  },
};

const middleScreenStyles = {
  container: {
    display: "flex",
    marginTop: 2,
    width: "100%",
    height: "35%",
  },
  leftCard: {
    flex: 4,
    marginRight: 3,
    marginLeft: 2,
  },
  rightCard: {
    flex: 4,
    marginRight: 2,
  },
};

const lowerScreenStyles = {
  container: {
    display: "flex",
    marginTop: 2,
    width: "100%",
    height: "100px",
  },
  leftCard: {
    flex: 4,
    marginRight: 3,
    marginLeft: 2,
  },
  rightCard: {
    flex: 4,
    marginRight: 2,
  },
};

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  marginTop: 3,
};

const styles = {
  container: containerStyles,
  header: headerStyles,
  middleScreen: middleScreenStyles,
  lowerScreen: lowerScreenStyles,
};

const DashboardContainer: React.FC = () => {
  const burnedCalories = useGetCaloriesBurned();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const barStyles = {
    width: isSmallScreen ? 300 : isMediumScreen ? 400 : 600,
    height: isSmallScreen ? 180 : isMediumScreen ? 200 : 250,
  };
  const [gaugePercentage, setGaugePercentage] = useState<number>(10);
  return (
    <DashboardPresenter
      renderHeader={(styles: { [key: string]: any }) => (
        <DashboardHeader
          styles={styles}
          leftCardContent={() => (
            <Button onClick={() => setGaugePercentage((prev) => prev + 10)}>
              Increment Intensity
            </Button>
          )}
          rightCardContent={() => (
            <ExGaugeChart gaugePercentage={gaugePercentage} />
          )}
        />
      )}
      renderMiddleScreen={(styles: { [key: string]: any }) => (
        <DashboardMiddle
          styles={styles}
          leftCardContent={() => (
            <ExBarChart
              burnedCalories={burnedCalories}
              title={"Burned Calories Per Week"}
              styles={barStyles}
            />
          )}
        />
      )}
      renderLowerScreen={(styles: { [key: string]: any }) => (
        <DashboardLower styles={styles} />
      )}
      styles={styles}
    />
  );
};

export default DashboardContainer;
