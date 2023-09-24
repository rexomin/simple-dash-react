import React from "react";
import "../styles/components/_btn.scss";
import Loading from "./Loading";

const Btn = ({
	type,
	children,
	onClick = () => {},
	disabled = false,
	loading = false,
	...props
}) => {
	const handleClick = (event) => {
		if (!disabled) {
			onClick(event);
		}
	};

	return (
		<button
			className={
				`btn ${type ? `btn-${type}` : ""} ${
					disabled ? "disabled" : ""
				}` + props.className
			}
			onClick={handleClick}
			disabled={disabled}
		>
			{loading && (
				<div className="btn-loader">
					<Loading size={20} thickness={2} color="#fff" />
				</div>
			)}

			<span className={"btn-content" + (loading ? " btn-loading" : "")}>
				{children}
			</span>
		</button>
	);
};

export default Btn;
