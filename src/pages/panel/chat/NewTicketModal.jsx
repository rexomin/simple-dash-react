import * as React from "react";
import { Backdrop, Fade } from "@mui/material";
import Modal from "@mui/material/Modal";
import "../../../styles/pages/chat/_new-ticket-modal.scss";
import { Btn, Input, SelectInput, Textarea, UploadLoading } from "../../../components";

export default function NewTicketModal({ open, onClose, ...props }) {
	return (
		<>
			<Modal
				open={open}
				onClose={onClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
				sx={{ padding: "10px !important" }}
			>
				<Fade in={open}>
					<div className="modal-content-wrap">
						<div className="modal-content new-ticket">
							<div className="new-ticket-header">
								<button className="close-btn" onClick={onClose}>
									<i className="fas fa-times"></i>
								</button>
								<div className="new-ticket-title">
									New Ticket
								</div>
							</div>

							<div className="new-ticket-content">
								<form className="new-ticket-form">
									<div className="form-row">
										<Input
											label="Title"
											type="text"
											id="new-ticket-title"
											name="new-ticket-title"
											required
										/>
									</div>
									<div className="form-row">
										<SelectInput
											label="Select Subject"
											options={[
												{
													value: "1",
													title: "Subject 1",
												},
												{
													value: "2",
													title: "Subject 2",
												},
												{
													value: "3",
													title: "Subject 3",
												},
											]}
										/>
									</div>
									<div className="form-row">
										<Textarea
                                            label="Message"
											id="new-ticket-desc"
											name="new-ticket-desc"
											placeholder="Explain the problem"
											required
										></Textarea>
									</div>
									<div className="form-row">
										<Btn
											className="new-ticket-submit-btn"
											type="button"
											onClick={() => {
												// Handle attaching files logic here
											}}
										>
											<i className="fas fa-plus btn-icon"></i>{" "}
											Attach Files
										</Btn>
									</div>
									<div className="form-row">
										<UploadLoading/>
									</div>
									<div className="form-btns d-flex">
										<Btn
											className="new-ticket-submit-btn"
											type="primary"
										>
											Submit
										</Btn>
										<Btn
											className="new-ticket-cancel-btn"
											type="outline"
											onClick={onClose}
										>
											Cancel
										</Btn>
									</div>
								</form>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</>
	);
}
