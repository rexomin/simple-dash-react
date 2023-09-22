import React, { useState, useEffect } from "react";
import "../../styles/layout/_sidebar.scss";
import { NavLink } from "react-router-dom";
import {Avatar} from "../../components";

function Sidebar({ dark }) {
	const [sidebar, setSidebar] = useState({
		desktopShow: true,
		mobileShow: false,
	});

	useEffect(() => {
		initSidebar();

		window.onresize = () => {
			renderSidebar();
		};
	}, []);

	const initSidebar = () => {
		renderSidebar();
	};

	const renderSidebar = () => {
		const sidebarElement = document.querySelector(".sidebar");

		if (window.innerWidth <= 990) {
			if (sidebar.mobileShow) {
				sidebarElement.classList.add("show");
				document
					.querySelector(".sidebar-backdrop")
					.classList.add("show");
			} else {
				sidebarElement.classList.remove("show");
				document
					.querySelector(".sidebar-backdrop")
					.classList.remove("show");
			}
		} else {
			if (sidebar.desktopShow) {
				sidebarElement.classList.add("show");
			} else {
				sidebarElement.classList.remove("show");
			}
		}
	};

	const openSidebar = () => {
		const sidebarElement = document.querySelector(".sidebar");

		if (window.innerWidth <= 990) {
			setSidebar({ ...sidebar, mobileShow: true });
		} else {
			setSidebar({ ...sidebar, desktopShow: true });
		}

		renderSidebar();
	};

	const closeSidebar = () => {
		const sidebarElement = document.querySelector(".sidebar");

		if (window.innerWidth <= 990) {
			setSidebar({ ...sidebar, mobileShow: false });
		} else {
			setSidebar({ ...sidebar, desktopShow: false });
		}

		renderSidebar();
	};

	const toggleSidebar = () => {
		const sidebarElement = document.querySelector(".sidebar");

		if (window.innerWidth <= 990) {
			if (sidebar.mobileShow) {
				closeSidebar();
			} else {
				openSidebar();
			}
		} else {
			if (sidebar.desktopShow) {
				closeSidebar();
			} else {
				openSidebar();
			}
		}
	};

	return (
		<div className="sidebar-wrapper">
			<div className={`sidebar ${dark ? "dark" : ""}`}>
				<div className="logo-wrapper">
					<div className="sidebar-logo">
						<img src={require("../../assets/images/logo-dark.png")} alt="Logo" />
					</div>
				</div>

				<div className="sidebar-top">
					<ul className="sidebar-nav">
						<li>
							<NavLink
								to="/panel/dashboard"
								active-class="active"
							>
								<i className="nav-icon fas fa-home"></i>
								<span className="nav-text">Dashboard</span>
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/panel/users"
								active-class="active"
							>
								<i className="nav-icon fas fa-users"></i>
								<span className="nav-text">Users</span>
							</NavLink>
						</li>

						<li>
							<NavLink to="/panel/chat" active-class="active">
								<i className="nav-icon fas fa-comments"></i>
								<span className="nav-text">Chat</span>
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="sidebar-bottom">
					<ul className="sidebar-nav">
						<li>
							<NavLink
								to="/panel/components"
								active-class="active"
							>
								<i className="nav-icon fas fa-layer-group"></i>
								<span className="nav-text">Components</span>
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/panel/settings"
								active-class="active"
							>
								<i className="nav-icon fas fa-gear"></i>
								<span className="nav-text">Settings</span>
							</NavLink>
						</li>
					</ul>

					<div className="sidebar-account">
						<div className="sidebar-account-img">
							<Avatar>
								<img
									src={require("../../assets/images/avatar.jpg")}
									alt="Avatar"
								/>
							</Avatar>
						</div>

						<div className="sidebar-account-text">
							<div className="sidebar-account-name">
								<span>Louise Thompson</span>
							</div>
							<div className="sidebar-account-desc">
								<span>Enterprise plan</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="sidebar-backdrop" onClick={closeSidebar}></div>
		</div>
	);
}

export default Sidebar;