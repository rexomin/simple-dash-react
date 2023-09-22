import React from "react";
import "../styles/components/_micro-card.scss";

const MicroCard = (props) => {
	return <div {...props} className={`micro-card ${props.className}`}
	>{props.children}</div>;
};

export default MicroCard;
