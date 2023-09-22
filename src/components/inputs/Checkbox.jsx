import React from "react";
import "../../styles/components/inputs/_checkbox.scss";

const Checkbox = ({ text, value, onChange = () => {}, ...props }) => {
	return (
		<div className={`sd-input-wrapper ${props.className}`}>
			<label className="custom-checkbox">
				{text}
				<input
					type="checkbox"
					checked={value}
					onChange={(e) => onChange(e.target.checked)}
				/>
				<span className="checkmark"></span>
			</label>
		</div>
	);
};

export default Checkbox;
