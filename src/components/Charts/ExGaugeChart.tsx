import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
interface ExGaugeChartProps {
  gaugePercentage: number;
}
const GaugePointer = () => {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
};
const ExGaugeChart: React.FC<ExGaugeChartProps> = ({ gaugePercentage }) => {
  return (
    <GaugeContainer
      width={200}
      height={200}
      startAngle={-90}
      endAngle={90}
      value={gaugePercentage > 100 ? 100 : gaugePercentage}
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer />
    </GaugeContainer>
  );
};

export default ExGaugeChart;
