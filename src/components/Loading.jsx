import React from "react";
import "../styles/components/_loading.scss";

function Loading({
	withBg = false,
	size = 32,
	thickness = 6,
	color = "#0063f7",
	bgSize = 100,
    className,
    ...props
}) {
	const cssProps = {
		"--loader-size": `${size}px`,
		"--thickness": `${thickness}px`,
		"--spinner-color": color,
		"--bg-size": `${bgSize}px`,
	};

	const bgClass = withBg ? "with-bg" : "";

	return (
		<div className={`sd-loading ${className}`} style={cssProps}>
			<div className={`lds-dual-ring bg ${bgClass}`}></div>
		</div>
	);
}

export default Loading;
