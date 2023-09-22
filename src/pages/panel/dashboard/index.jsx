import { useEffect } from "react";
import EventEmitter from "../../../utils/EventEmitter";
import Statistics from "./Statistics";

export default function Dashboard() {
	useEffect(() => {
		EventEmitter.emit("setPanelTitleText", "Dashboard");
	});

	return (
		<div className="panel-content-container">
			<div className="panel-content">
				<Statistics />
			</div>

			<div className="panel-content  mt-4">
				Here is the dashboard!
			</div>
		</div>
	);
}
