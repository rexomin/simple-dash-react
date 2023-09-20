import React, { useState, useEffect, useRef } from "react";
import "../../styles/components/inputs/_select-input.scss";

const SelectInput = (props) => {
	const {
		label = "",
		placeholder = "Select Option",
		selectOptions = [],
		value = "",
		onChange = () => {},
	} = props;

	const [showOptions, setShowOptions] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const selectRef = useRef(null);

	useEffect(() => {
		// Close options when clicking outside the select element
		const handleClickOutside = (event) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target)
			) {
				setShowOptions(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleOpenOptions = () => {
		setShowOptions(!showOptions);
	};

	const changeSelectedOption = (newOption) => {
		setSelectedOption(newOption);
		setShowOptions(false);
		onChange(newOption);
	};

	return (
		<div className={`sd-input-wrapper ${props.className}`}>
			{label && <div className="label">{label}</div>}
			<div
				className={`sd-select ${showOptions ? "open" : ""}`}
				onClick={toggleOpenOptions}
				ref={selectRef}
			>
				<span
					className={`sd-select-text ${
						selectedOption === null ? "" : "selected"
					}`}
				>
					{selectedOption === null
						? placeholder
						: selectedOption.title}
				</span>
				<i className="sd-select-icon fas fa-chevron-down"></i>

				<ul className="sd-select-options">
					{selectOptions.map((selectOption, index) => (
						<li
							key={index}
							onClick={() => changeSelectedOption(selectOption)}
						>
							{selectOption.title}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SelectInput;
