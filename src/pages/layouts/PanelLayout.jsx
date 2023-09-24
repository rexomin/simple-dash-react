import React, { useState, useEffect } from "react";
import "../../styles/layout/_panel-layout.scss";
import Sidebar from "./Sidebar";
import EventEmitter from "../../utils/EventEmitter";
import { Avatar, Btn, Loading } from "../../components";
import { Outlet } from "react-router-dom";

function PanelLayout({ children, ...props }) {
	const [panelLoading, setPanelLoading] = useState(false);
	const [panelTitleText, setPanelTitleText] = useState("");
	const [mobilePopover, setMobilePopover] = useState({
		show: false,
	});

	const toggleSidebar = () => {
		EventEmitter.emit("toggleSidebar");
	};

	useEffect(() => {
		EventEmitter.addListener("setPanelTitleText", (data) => {
			setPanelTitleText(data);
		});

		EventEmitter.addListener("setPanelLoading", (data) => {
			setPanelLoading(data);
		});
	}, []); // Add dependencies if needed

	return (
		<div className="panel-wrapper">
			{panelLoading && (
				<div className="panel-loading">
					<Loading size={64} />
				</div>
			)}

			{!panelLoading && (
				<div className="panel">
					<Sidebar dark={true} />

					<div className="panel-container">
						<div className="panel-container-header">
							<div className="panel-container-header-left">
								<button
									className="sidebar-toggle-btn"
									onClick={toggleSidebar}
								>
									<i className="fas fa-bars"></i>
								</button>
								<h6 className="panel-container-header-title">
									{panelTitleText}
								</h6>
							</div>

							<div className="panel-container-header-right ms-auto">
								<div className="profile-popover">
									<button
										className="profile-popover-toggle-btn"
										onClick={() =>
											setMobilePopover({
												...mobilePopover,
												show: !mobilePopover.show,
											})
										}
									>
										<Avatar>
											<img
												src={require("../../assets/images/avatar.jpg")}
												alt="Avatar"
											/>
										</Avatar>
									</button>

									{mobilePopover.show && (
										<div className="profile-popover-content">
											<Avatar size="xxl">
												<img
													src={require("../../assets/images/avatar.jpg")}
													alt="Avatar"
												/>
											</Avatar>

											<div className="profile-popover-name">
												Louise Thompson
											</div>

											<Btn
												className="profile-popover-logout-btn"
												type="outline"
											>
												Logout
											</Btn>
										</div>
									)}
								</div>
							</div>
						</div>

						<div className="panel-content-wrapper">
							<Outlet />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default PanelLayout;
