import DashboardPresenter from "./DashboardPresenter";

const LeftScreen = () => {
  return <p>Hello</p>;
};
const RightScreen = () => {
  return <p>World</p>;
};
const DashboardContainer: React.FC = () => {
  return (
    <DashboardPresenter>
      <LeftScreen />
      <RightScreen />
    </DashboardPresenter>
  );
};

export default DashboardContainer;
