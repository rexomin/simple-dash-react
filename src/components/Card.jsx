import React from "react";
import "../styles/components/_card.scss";

const Card = (props) => {
	return <div {...props} className={`card ${props.className}`}>
        {props.children}
    </div>;
};

export default Card;
