import React from "react";
import "../styles/components/_btn.scss";

const Btn = (props) => {
	const { type = "", disabled = false } = props;

	const handleClick = (event) => {
		if (!disabled) {
			props.onClick(event);
		}
	};

	return (
		<button
			className={`btn ${type ? `btn-${type}` : ""} ${
				disabled ? "disabled" : ""
			}` + props.className}
			onClick={handleClick}
			disabled={disabled}
		>
			{props.children}
		</button>
	);
};

export default Btn;