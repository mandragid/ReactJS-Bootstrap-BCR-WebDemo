import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

const BarChart = (props) => {
	return <Bar data={props.chartData} />;
};

BarChart.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
};

export default BarChart;
