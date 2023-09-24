import { useEffect, useState } from "react";
import EventEmitter from "../../../utils/EventEmitter";
import { Loading } from "../../../components";

export default function Settings() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		EventEmitter.emit("setPanelTitleText", "Settings");

		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<div className="panel-content-container">
			{loading ? (
				<Loading thickness={4} className="mx-auto mt-3" />
			) : (
				<div className="panel-content">Settings</div>
			)}
		</div>
	);
}
