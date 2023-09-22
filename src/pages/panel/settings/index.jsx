import { useEffect } from "react";
import EventEmitter from "../../../utils/EventEmitter";

export default function Settings() {
	useEffect(() => {
		EventEmitter.emit("setPanelTitleText", "Settings");
	});

	return (
		<div className="panel-content-container">
			<div className="panel-content">
                Settings
            </div>
		</div>
	);
}
