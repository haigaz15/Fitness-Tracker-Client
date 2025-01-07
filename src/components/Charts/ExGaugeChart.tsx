import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { useEffect, useRef, useState } from "react";
interface ExGaugeChartProps {
  gaugePercentage: number;
}
const GaugePointer: React.FC<ExGaugeChartProps> = ({ gaugePercentage }) => {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  const pathRef = useRef<SVGPathElement | null>(null);
  const [isRendered, setIsRendered] = useState(false);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  useEffect(() => {
    // Set isRendered to true once pathLength is determined
    if (pathLength && pathLength > 0) {
      setIsRendered(true);
    }
  }, [pathLength]);

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <path
        ref={pathRef}
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={1}
        strokeDasharray={`${
          pathLength ? (pathLength + 10) / 2 : 0
        } ${pathLength}`} // Half transparent, half colored
        strokeDashoffset={isRendered ? pathLength : 0} // Initially set the stroke offset to pathLength (invisible)
      />
      {/* Text in the center */}
      <text
        x={cx}
        y={cy}
        fill="red"
        fontSize="34"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {gaugePercentage}%
      </text>
    </g>
  );
};

const ExGaugeChart: React.FC<ExGaugeChartProps> = ({ gaugePercentage }) => {
  return (
    <GaugeContainer
      width={250}
      height={200}
      startAngle={-90}
      endAngle={90}
      value={gaugePercentage > 100 ? 100 : gaugePercentage}
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer
        gaugePercentage={gaugePercentage > 100 ? 100 : gaugePercentage}
      />
    </GaugeContainer>
  );
};

export default ExGaugeChart;
