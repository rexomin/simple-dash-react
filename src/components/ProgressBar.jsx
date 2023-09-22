import React from "react";
import "../styles/components/_progress-bar.scss";

function ProgressBar(props) {
	const { value } = props;

	const fillStyle = {
		width: `${value}%`,
	};

	return (
		<div {...props} className={`progress-bar ${props.className}`}>
			<div className="line-wrapper">
				<div className="line-bg">
					<div className="line-fill" style={fillStyle}></div>
				</div>
			</div>

			<div className="text">{value}%</div>
		</div>
	);
}

export default ProgressBar;
