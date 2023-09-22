import React from "react";
import "../styles/components/_btn.scss";

const Btn = ({ type, children, onClick = () => {}, disabled = false, ...props }) => {
	const handleClick = (event) => {
		if (!disabled) {
			onClick(event);
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
			{children}
		</button>
	);
};

export default Btn;