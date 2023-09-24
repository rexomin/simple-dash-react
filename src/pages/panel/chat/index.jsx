import React, { useEffect, useState } from "react";
import { Avatar, Badge, Btn, SectionCard } from "../../../components";
import "../../../styles/pages/chat/_index.scss";
import ChatSection from "../../../components/chat/ChatSection";
import EventEmitter from "../../../utils/EventEmitter";
import NewTicketModal from "./NewTicketModal";

function Chat() {
	useEffect(() => {
		EventEmitter.emit("setPanelTitleText", "Chat");
	});

	const [isChatOpen, setIsChatOpen] = useState(false);
	const [selectedChat, setSelectedChat] = useState(null);

	// New ticket modal
	const [showNewTicketModal, setShowNewTicketModal] = useState(false);
	const handleOpenNewTicketModal = () => setShowNewTicketModal(true);
	const handleCloseNewTicketModal = () => setShowNewTicketModal(false);

	const selectChat = (index) => {
		setIsChatOpen(true);
		setSelectedChat(index);
	};

	const deselectChat = () => {
		setIsChatOpen(false);
		setSelectedChat(null);
	};

	const tickets = [0, 1, 2, 3];

	return (
		<>
		<NewTicketModal open={showNewTicketModal} onClose={handleCloseNewTicketModal} />

		<div className="panel-content-wrapper">
			<div className="panel-content-container">
				<div className="support">
					<div className="row my-gutters">
						<div
							className={`col tickets-col ${
								isChatOpen ? "chat-open" : ""
							}`}
						>
							<SectionCard
								className="tickets-list-card"
								title="Tickets Lists"
								headerRight={
									<Btn type="primary" onClick={handleOpenNewTicketModal}>
										<i className="fas fa-plus btn-icon"></i>{" "}
										Create New Ticket
									</Btn>
								}
							>
								<div className="tickets-list">
									<table className="tickets-list-table">
										<thead>
											<tr>
												<th className="min-width"></th>
												<th>User</th>
												<th>Title</th>
												<th>Number</th>
												<th>Project</th>
												<th>Subject</th>
												<th>Date</th>
												<th className="min-width">
													Status
												</th>
											</tr>
										</thead>
										<tbody>
											{tickets.map((ticket, index) => (
												<tr
													className={`ticket-list-row ${
														selectedChat === index
															? "active"
															: ""
													}`}
													key={index}
													onClick={() =>
														selectChat(index)
													}
												>
													<td>
														<Avatar>
															<span>MK</span>
														</Avatar>
													</td>
													<td>Felix Woolley</td>
													<td>Problem with files</td>
													<td>#100</td>
													<td>Website Redesign</td>
													<td>Technical</td>
													<td>October 17</td>
													<td>
														<Badge className="bg-blue fg-white">
															Answered
														</Badge>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</SectionCard>
						</div>

						{isChatOpen && (
							<div className="col chat-col">
								<ChatSection deselectChat={deselectChat} />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default Chat;
