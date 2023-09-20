import React from "react";
import "../styles/components/_avatar.scss";

const Avatar = (props) => {
	const { size = "md", color = "primary" } = props;

	const getSizeClass = () => {
		return `avatar-${size}`;
	};

	const getColorClass = () => {
		if (color === "") return "";
		return `avatar-${color}`;
	};

	return (
		<div className={`avatar ${getSizeClass()} ${getColorClass()} ${props.className}`}>
			<div className="avatar-content">{props.children}</div>
		</div>
	);
};

export default Avatar;
