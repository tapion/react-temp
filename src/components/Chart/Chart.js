import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
    const amounts = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...amounts);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxValue}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
