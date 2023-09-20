import React, { useState, useEffect } from "react";
import "../../styles/components/inputs/_checkbox.scss";

const Checkbox = (props) => {
	const { text = "", value = false } = props;
	const [isChecked, setIsChecked] = useState(value);

	// Watch for changes in the `value` prop
	useEffect(() => {
		setIsChecked(value);
	}, [value]);

	const toggleCheckBox = () => {
		setIsChecked(!isChecked);
		props.onChange(!isChecked);
		props.onClick();
	};

	return (
		<div className={`sd-input-wrapper ${props.className}`}>
			<label className="custom-checkbox" onClick={toggleCheckBox}>
				{text}
				<input type="checkbox" checked={isChecked} readOnly />
				<span className="checkmark"></span>
			</label>
		</div>
	);
};

export default Checkbox;