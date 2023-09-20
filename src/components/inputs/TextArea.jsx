import React from "react";
import "../../styles/components/inputs/_textarea.scss";

const Textarea = (props) => {
	const {
		type = "text",
		placeholder = "",
		label = "",
		id = "",
		value = "",
		onChange = () => {},
	} = props;

	const handleInput = (e) => {
		onChange(e.target.value);
	};

	return (
		<div className={`sd-input-wrapper ${props.className}`}>
			{label && <label htmlFor={id}>{label}</label>}
			<textarea
				id={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleInput}
			></textarea>
		</div>
	);
};

export default Textarea;
