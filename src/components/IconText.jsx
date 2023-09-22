import React from "react";
import PropTypes from "prop-types";
import "../styles/components/_icon-text.scss";

function IconText(props) {
	const { icon, children } = props;

	return (
		<div className="icon-text">
			{icon && <i className={icon}></i>}
			<div className="text">{children}</div>
		</div>
	);
}

IconText.propTypes = {
	icon: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default IconText;
