import React from "react";
import "../styles/components/_avatar-stack.scss";

const AvatarStack = (props) => {
	return <ul className="avatar-stack">{props.children}</ul>;
};

export default AvatarStack;
