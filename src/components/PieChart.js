import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
	render() {
		const {analysisData} = this.props
		const options = {
            theme: "dark2", // "light1", "dark1", "dark2"
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "GRAPHICAL ANALYSIS"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: (analysisData.LyingPercentage)?analysisData.LyingPercentage:0, label: "No activity" },
					{ y: (analysisData.StandingPercentage)?analysisData.StandingPercentage:0, label: "Standing" },
					{ y: (analysisData.WalkingPercentage)?analysisData.WalkingPercentage:0, label: "Walking" },
					{ y: (analysisData.RunningPercentage)?analysisData.RunningPercentage:0, label: "Runing" },
					
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default App;  