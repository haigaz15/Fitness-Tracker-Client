import { Box } from "@mui/material";
import React from "react";

interface LogProps {
  renderLeftScreen: () => React.ReactNode;
  renderRightScreen: () => React.ReactNode;
  containerStyle: { [key: string]: any };
  leftScreenStyle: { [key: string]: any };
  rightScreenStyle: { [key: string]: any };
}

const LogPresenter: React.FC<LogProps> = ({
  renderLeftScreen,
  renderRightScreen,
  containerStyle,
  leftScreenStyle,
  rightScreenStyle,
}) => {
  return (
    <Box sx={{ ...containerStyle }}>
      <Box sx={{ ...leftScreenStyle }}>
        {renderLeftScreen && renderLeftScreen()}
      </Box>
      <Box sx={{ ...rightScreenStyle }}>
        {renderRightScreen && renderRightScreen()}
      </Box>
    </Box>
  );
};

export default LogPresenter;
