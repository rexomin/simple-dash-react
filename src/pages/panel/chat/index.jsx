import { useEffect } from "react";
import EventEmitter from "../../../utils/EventEmitter";

export default function Chat() {
	useEffect(() => {
		EventEmitter.emit("setPanelTitleText", "Chat");
	});

	return (
		<div className="panel-content-container">
			<div className="panel-content">
                Chat
            </div>
		</div>
	);
}
