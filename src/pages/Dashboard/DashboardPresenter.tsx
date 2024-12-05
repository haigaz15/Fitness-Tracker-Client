import { Box, Toolbar } from "@mui/material";

interface dashboardPresenterProps {
  renderHeader: (styles: { [key: string]: any }) => React.ReactNode;
  renderMiddleScreen: (styles: { [key: string]: any }) => React.ReactNode;
  renderLowerScreen: (styles: { [key: string]: any }) => React.ReactNode;
  styles: {
    container: { [key: string]: any };
    header: { [key: string]: any };
    middleScreen: { [key: string]: any };
    lowerScreen: { [key: string]: any };
  };
}

const DashboardPresenter: React.FC<dashboardPresenterProps> = ({
  renderHeader,
  renderMiddleScreen,
  renderLowerScreen,
  styles,
}) => {
  return (
    <Box sx={{ ...styles.container }}>
      <Toolbar />
      {renderHeader && renderHeader(styles.header)}
      {renderMiddleScreen && renderMiddleScreen(styles.middleScreen)}
      {renderLowerScreen && renderLowerScreen(styles.lowerScreen)}
    </Box>
  );
};

export default DashboardPresenter;
