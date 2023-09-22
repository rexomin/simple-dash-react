import React, { useState, useEffect, useCallback } from "react";
import "../../styles/layout/_sidebar.scss";
import { NavLink } from "react-router-dom";
import { Avatar } from "../../components";
import EventEmitter from "../../utils/EventEmitter";

function Sidebar({ dark, ...props }) {
	const [sidebarShowDesktop, setSidebarShowDesktop] = useState(true);
	const [sidebarShowMobile, setSidebarShowMobile] = useState(false);

	const renderSidebar = useCallback(() => {
		const sidebarElement = document.querySelector(".sidebar");

		if (window.innerWidth <= 990) {
			if (sidebarShowMobile) {
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
			if (sidebarShowDesktop) {
				sidebarElement.classList.add("show");
			} else {
				sidebarElement.classList.remove("show");
			}
		}
	}, [sidebarShowDesktop, sidebarShowMobile]);

	const openSidebar = () => {
		if (window.innerWidth <= 990) {
			setSidebarShowMobile(() => true);
		} else {
			setSidebarShowDesktop(() => true);
		}
	};

	const closeSidebar = () => {
		if (window.innerWidth <= 990) {
			setSidebarShowMobile(() => false);
		} else {
			setSidebarShowDesktop(() => false);
		}
	};

	const toggleSidebar = () => {
		if (window.innerWidth <= 990) {
			if (sidebarShowMobile) {
				closeSidebar();
			} else {
				openSidebar();
			}
		} else {
			if (sidebarShowDesktop) {
				closeSidebar();
			} else {
				openSidebar();
			}
		}
	};

	useEffect(() => {
		EventEmitter.addListener("openSidebar", openSidebar);
		EventEmitter.addListener("closeSidebar", closeSidebar);
		EventEmitter.addListener("toggleSidebar", toggleSidebar);

		renderSidebar();

		window.onresize = () => {
			renderSidebar();
		};
		
		return () => {
			window.onresize = null;
		}
	});

	useEffect(() => {
		renderSidebar();
	}, [renderSidebar, sidebarShowDesktop, sidebarShowMobile]);

	return (
		<div className="sidebar-wrapper">
			<div className={`sidebar ${dark ? "dark" : ""}`}>
				<div className="logo-wrapper">
					<div className="sidebar-logo">
						<img
							src={require("../../assets/images/logo-dark.png")}
							alt="Logo"
						/>
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
							<NavLink to="/panel/users" active-class="active">
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
							<NavLink to="/panel/settings" active-class="active">
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
