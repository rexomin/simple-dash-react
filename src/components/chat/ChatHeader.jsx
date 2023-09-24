import React from "react";
import "../../styles/components/chat/_chat-header.scss";
import Btn from "../Btn";

function ChatHeader({deselectChat}) {
	return (
		<div className="sd-chat-header">
			<button className="back-btn" onClick={() => deselectChat()}>
				<i className="fas fa-chevron-left"></i>
			</button>

			<div className="sd-chat-title">Problem with files - #100</div>
			<div className="sd-chat-header-right">
				<Btn className="sd-btn" type="secondary">
					Resolve
				</Btn>
			</div>
		</div>
	);
}

export default ChatHeader;
