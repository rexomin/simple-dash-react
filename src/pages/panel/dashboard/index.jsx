import { useEffect } from "react";
import EventEmitter from "../../../utils/EventEmitter";

export default function Dashboard() {
	useEffect(() => {
		EventEmitter.emit("setPanelTitleText", "Dashboard");
	});

	return (
		<div className="panel-content-container">
			<div className="panel-content">Dashboard</div>
		</div>
	);
}
