import { Box, IconButton, Stack, Typography } from "@mui/material";
import LogPresenter from "./LogPresenter";
import SignUp from "../../components/Log/SignUp";
import {
  FitnessCenter,
  Group,
  HealthAndSafety,
  Star,
} from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLocation, useNavigate } from "react-router-dom";
import SignIn from "../../components/Log/SignIn";

const motivationalTexts = [
  {
    title: "Transform Your Body",
    description:
      "Unlock your potential and achieve your fitness goals with workouts designed to inspire strength and confidence.",
    icon: "FitnessCenter", // Use an MUI Icon like <FitnessCenter />
  },
  {
    title: "Feel Strong, Live Longer",
    description:
      "Boost your energy, sharpen your mind, and embrace a healthier, more vibrant life through movement.",
    icon: "HealthAndSafety", // Use an MUI Icon like <HealthAndSafety />
  },
  {
    title: "Be Your Best Self",
    description:
      "Build strength, resilience, and confidence—inside and out. Your transformation starts today.",
    icon: "Star", // Use an MUI Icon like <Star />
  },
  {
    title: "Join a Community That Cares",
    description:
      "Connect, celebrate, and grow stronger together. Motivation is better when shared.",
    icon: "Groups", // Use an MUI Icon like <Groups />
  },
];

const LogContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const containerStyle = {
    display: "flex",
    backgroundColor: "rgba(244, 215, 197, 0.3)",
  };

  const leftScreenStyle = {
    width: "100%",
    height: "100%",
  };

  const rightScreenStyle = {
    width: "100%",
    height: "80vh",
  };

  const checkAndReturnIcon = (iconTitle: string): React.ReactNode => {
    switch (iconTitle) {
      case "FitnessCenter":
        return <FitnessCenter />;
      case "HealthAndSafety":
        return <HealthAndSafety />;
      case "Star":
        return <Star />;
      default:
        return <Group />;
    }
  };
  return (
    <Box>
      <LogPresenter
        renderLeftScreen={() => (
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 2,
              }}
            >
              <IconButton
                color="primary"
                edge="end"
                size="large"
                onClick={() => navigate("/")}
              >
                <ArrowBackIosIcon fontSize="large" />
              </IconButton>
            </Box>
            {location.pathname === "/sign-up" ? <SignUp /> : <SignIn />}
          </Box>
        )}
        renderRightScreen={() => (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 8,
              mt: 5,
            }}
          >
            {motivationalTexts.map((mtext, index) => (
              <Box sx={{ display: "flex", gap: 2 }}>
                {checkAndReturnIcon(mtext.icon)}
                <Stack key={`${mtext.title} ${index}`}>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {mtext.title}
                  </Typography>
                  <Typography variant="body2">{mtext.description}</Typography>
                </Stack>
              </Box>
            ))}
          </Box>
        )}
        containerStyle={containerStyle}
        leftScreenStyle={leftScreenStyle}
        rightScreenStyle={rightScreenStyle}
      />
    </Box>
  );
};

export default LogContainer;
