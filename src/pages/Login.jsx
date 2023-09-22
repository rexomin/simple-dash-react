import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/pages/_login.scss";
import { Checkbox, Input } from "../components";

function Login() {
	return (
		<div className="login-wrapper">
			<div className="login-content-wrapper">
				<div className="login-content">
					<h4 className="login-title">Login</h4>
					<div className="login-desc">Continue to website.</div>

					<form className="login-form" action="">
						<Input
							id="email-input"
							className=""
							type="email"
							placeholder="Email Address"
						/>
						<Input
							id="password-input"
							className="mt-4"
							type="password"
							placeholder="Password"
						/>

						<div className="login-bottom mt-4">
							<div className="login-remember">
								<Checkbox text="Remember me" />
							</div>

							<div className="login-forget">
								<button id="forget-btn">
									Forget password?
								</button>
							</div>
						</div>

						<div className="login-button mt-4">
							<button id="login-btn">Login</button>
						</div>

						<div className="login-create-account mt-5">
							<span>Don't have an account?</span>
							<NavLink to="/register">Create one now</NavLink>
						</div>
					</form>
				</div>
			</div>

			<div className="login-spacefiller">
				<img
					className="login-logo"
					src={require("../assets/images/logo-dark.png")}
					alt="Logo"
				/>
			</div>
		</div>
	);
}

export default Login;
