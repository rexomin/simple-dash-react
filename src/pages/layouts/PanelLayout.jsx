import React, { useState, useEffect } from "react";
import "../../styles/layout/_panel-layout.scss";
import Sidebar from "./Sidebar";
import EventEmitter from "../../utils/EventEmitter";

function PanelLayout({ children, ...props }) {
	const [loading, setLoading] = useState({
		panel: false,
		container: false,
	});
	const [panelTitleText, setPanelTitleText] = useState("");
	const [mobilePopover, setMobilePopover] = useState({
		show: false,
	});

	const toggleSidebar = () => {
		EventEmitter.emit("toggleSidebar");
	};

	useEffect(() => {
		// Set up your listeners here, for example:
		// emitter.on('setPanelTitleText', (newText) => {
		//   setPanelTitleText(newText);
		// });
		// Remember to unsubscribe or clean up the listeners when the component unmounts.
		// return () => {
		//   emitter.off('setPanelTitleText');
		// };
	}, []); // Add dependencies if needed

	return (
		<div className="panel-wrapper">
			<div className="panel-loading">
				{loading.panel &&
					{
						/* Render loading component */
					}}
			</div>

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

						<div className="panel-container-header-right">
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
									<sd-avatar>
										<img
											src="../../assets/pics/avatar.jpg"
											alt="Avatar"
										/>
									</sd-avatar>
								</button>

								{mobilePopover.show && (
									<div className="profile-popover-content">
										<sd-avatar size="xxl">
											<img
												src="../../assets/pics/avatar.jpg"
												alt="Avatar"
											/>
										</sd-avatar>

										<div className="profile-popover-name">
											Louise Thompson
										</div>

										<sd-btn
											className="profile-popover-logout-btn"
											type="outline"
										>
											Logout
										</sd-btn>
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="panel-content-wrapper">{children}</div>
				</div>
			</div>
		</div>
	);
}

export default PanelLayout;
