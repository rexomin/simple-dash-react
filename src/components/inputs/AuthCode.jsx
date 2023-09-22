import React, { useState } from "react";
import "../../styles/components/inputs/_auth-code.scss";

const AuthCode = (props) => {
	const [code, setCode] = useState(["", "", "", "", "", ""]);

	const handleInputChange = (e, index) => {
		const inputValue = e.target.value;
		const newCode = [...code];

		//check if the input value is a number or empty string
		if(isNaN(parseInt(inputValue)) && inputValue !== "") {
			return;
		}

		if (!isNaN(parseInt(inputValue))) {
			newCode[index] = inputValue;
		} else if (inputValue === "") {
			newCode[index] = "";
		}

		setCode(newCode);

		if (inputValue !== "" && index < 5) {
			document.querySelectorAll(".code-input")[index + 1].focus(); // Go to the next input
		} else if (inputValue === "" && index > 0) {
			document.querySelectorAll(".code-input")[index - 1].focus(); // Go to the previous input
		}
	};

	return (
		<div className={`sd-auth-code ${props.className}`}>
			<div className="sd-auth-code-label">Authentication code</div>
			<div className="sd-auth-code-input">
				{code.map((value, index) => (
					<input
						key={index}
						className="code-input"
						type="tel"
						value={value}
						maxLength="1"
						onChange={(e) => handleInputChange(e, index)}
					/>
				))}
			</div>
		</div>
	);
};

export default AuthCode;
