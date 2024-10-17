const mainDivStyle = {
  display: "flex",
  marginTop: "80px",
  width: "300px",
};
const firstCDivStyle = {
  flex: 1,
};

const secondCDivStyle = {
  flex: 20,
  backgroundColor: "red",
};
const DashbaordPresenter: React.FC<{ children: React.ReactNode[] }> = ({
  children,
}) => {
  const [left, right] = children;
  return (
    <div style={mainDivStyle}>
      <div style={firstCDivStyle}>{left}</div>
      <div style={secondCDivStyle}>{right}</div>
    </div>
  );
};

export default DashbaordPresenter;
