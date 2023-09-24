import React from "react";
import "../styles/components/_upload-loading.scss";

function UploadLoading({ value }) {
	const loaderIndicatorStyles = {
		width: `${value}%`,
	};

	const isFinished = value >= 100;

	return (
		<div className="sd-upload-loading">
			<div className="sd-loader-container">
				<div
					className="sd-loader-indicator"
					style={loaderIndicatorStyles}
				></div>
				<div className="sd-loader-content">
					<div className="sd-loader-icon">
						<i className="fas fa-paperclip"></i>
					</div>
					<div className="sd-loader-text">Picture.PNG</div>
				</div>
			</div>
			<div className="sd-upload-finish-icon">
				<button className="sd-finish-btn" disabled={!isFinished}>
					<i className="fas fa-trash-alt"></i>
				</button>
			</div>
		</div>
	);
}

export default UploadLoading;
