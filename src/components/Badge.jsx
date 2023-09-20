import React from "react";
import "../styles/components/_badge.scss";

const Badge = (props) => {
	return <span className={`badge ${props.className}`}>{props.children}</span>;
};

export default Badge;
