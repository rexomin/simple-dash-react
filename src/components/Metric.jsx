import React, { useEffect, useRef } from "react";
import "../styles/components/_metric.scss";

function Metric() {
	const canvasRef = useRef(null);

	useEffect(() => {
		// Create a script element for the external library
		const script = document.createElement("script");
		script.src = "/assets/libs/circle-progress-bar/circle-progress-bar.min.js";
		script.async = true;

		const onScriptLoad = () => {
			// TODO: This code should become dynamic so we can use this component anywhere
			const canvas = canvasRef.current;
			const circleProgressBar = new window.CircleProgressBar(canvas, {
				lineWidth: 8,
				radius: 42, // width / 2 - lineWidth
				colors: ["#0000FF", "#4B0082", "#9400D3"],
			});

			// set initial value
			circleProgressBar.setValue(0.9);
		};

		// Attach the script to the DOM
		document.body.appendChild(script);

		// Listen for the script to load
		script.addEventListener("load", onScriptLoad);

		// Clean up when the component unmounts
		return () => {
			script.removeEventListener("load", onScriptLoad);
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className="metric">
			<div className="metric-text">
				<div className="metric-title">Todays sales</div>
				<div className="metric-value">2,456</div>
			</div>

			<div className="metric-chart">
				<canvas ref={canvasRef} width="100" height="100"></canvas>
				<div className="chart-text">
					<i className="isax isax-user" style={{ fontSize: "20px" }}></i>
				</div>
			</div>
		</div>
	);
}

export default Metric;
