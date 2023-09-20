import React from "react";
import "../styles/components/_avatar-with-name.scss";

const AvatarWithName = (props) => {
	const { name } = props;

	return (
		<div className="avatar-with-name">
			{props.children}

			<div className="avatar-name">
				<span>{name}</span>
			</div>
		</div>
	);
};

export default AvatarWithName;
