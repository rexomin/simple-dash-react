import React from "react";
import "../../styles/components/inputs/_input.scss";

const Input = ({
	id,
	type = "text",
	placeholder,
	value,
	disabled = false,
	label,
	onChange = () => {},
	...props
}) => {
	const handleInput = (e) => {
		onChange(e.target.value);
	};

	return (
		<div className={`sd-input-wrapper ${props.className}`}>
			{id && label && <label htmlFor={id}>{label}</label>}
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleInput}
				disabled={disabled}
			/>
		</div>
	);
};

export default Input;
