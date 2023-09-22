import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/pages/_register.scss";
import { Input } from "../components";

function Register() {
	return (
		<div className="register-wrapper">
			<div className="register-content-wrapper">
				<div className="register-content">
					<h4 className="register-title">Register</h4>
					<div className="register-desc">Create an account.</div>

					<form className="register-form" action="">
						<Input
							id="email-input"
							className=""
							type="email"
							placeholder="Email Address"
						/>
						<Input
							id="name-input"
							className="mt-4"
							placeholder="Name (optional)"
						/>
						<Input
							id="password-input"
							className="mt-4"
							type="password"
							placeholder="Password"
						/>

						<div className="register-button mt-4">
							<button id="register-btn">Register</button>
						</div>

						<div className="register-create-account mt-5">
							<span>Already have an account?</span>
							<NavLink to="/login">Login</NavLink>
						</div>
					</form>
				</div>
			</div>

			<div className="register-spacefiller">
				<img
					className="register-logo"
					src={require("../assets/images/logo-dark.png")}
					alt="Logo"
				/>
			</div>
		</div>
	);
}

export default Register;
