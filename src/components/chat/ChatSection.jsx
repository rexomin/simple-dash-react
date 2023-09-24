import React from "react";
import "../../styles/components/chat/_chat-section.scss";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatFooter from "./ChatFooter";

function ChatSection({ deselectChat }) {
	return (
		<div className="sd-chat">
			<ChatHeader deselectChat={deselectChat} />
			<ChatMessages />
			<ChatFooter />
		</div>
	);
}

export default ChatSection;
