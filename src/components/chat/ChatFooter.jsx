import React from "react";
import "../../styles/components/chat/_chat-footer.scss";

function ChatFooter() {
	return (
		<div className="sd-chat-footer">
			<div className="sd-chat-message-input">
				<textarea
					className="sd-chat-input"
					placeholder="Type your answer"
				></textarea>
				<button className="sd-chat-attach-btn">
					<i className="fas fa-paperclip"></i>
					Attach Files
				</button>
			</div>
			<div className="sd-chat-footer-right">
				<button className="sd-chat-send-btn">
					<i className="fas fa-paper-plane"></i>
					Send
				</button>
			</div>
		</div>
	);
}

export default ChatFooter;
