const mainDivStyle = {
  display: "flex",
  marginTop: "80px",
  width: "100%",
};
const firstCDivStyle = {
  flex: 4,
};

const secondCDivStyle = {
  flex: 18,
  height: "100vh",
};
const horizontalLineStyle = {
  width: "11px",
  margin: "0 -5px",
  borderLeft: "1px solid rgba(255, 255, 255, 0)",
  cursor: "col-resize",
};
const DashbaordPresenter: React.FC<{ children: React.ReactNode[] }> = ({
  children,
}) => {
  const [left, right] = children;
  return (
    <div style={mainDivStyle}>
      <div style={firstCDivStyle}>{left}</div>
      <span style={horizontalLineStyle}></span>
      <div style={secondCDivStyle}>{right}</div>
    </div>
  );
};

export default DashbaordPresenter;
