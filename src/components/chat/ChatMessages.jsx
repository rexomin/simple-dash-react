import React from "react";
import "../../styles/components/chat/_chat-messages.scss";

function ChatMessages() {
	const messages = Array.from({ length: 10 }, (_, i) => i + 1); // Create an array of 10 elements for iteration

	return (
		<div className="sd-chat-messages">
			{messages.map((i) => (
				<div
					key={i}
					className={`sd-chat-message ${i % 2 === 0 ? "right" : ""}`}
				>
					<div className="sd-chat-message-content">
						<div className="sd-message-sender">
							Jessica, Support team
						</div>
						<div className="sd-message-text">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Corporis veniam sint consectetur sequi esse
							eveniet natus placeat. Omnis pariatur ex esse
							molestiae, quod aliquid minus velit ab sed enim
							expedita quisquam ad ipsa nobis modi doloremque iure
							dolorem rem, odio quibusdam harum blanditiis minima
							placeat suscipit! Quis laboriosam ipsam officiis
							odit aliquid fuga totam beatae! Modi voluptatibus
							quidem dolores exercitationem.
						</div>
					</div>
					<div className="sd-chat-message-date">
						September 15, 2021 - 11:30
					</div>
				</div>
			))}
		</div>
	);
}

export default ChatMessages;
