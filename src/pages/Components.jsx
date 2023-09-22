import {
	AuthCode,
	Avatar,
	AvatarStack,
	AvatarWithName,
	Badge,
	Btn,
	Card,
	Checkbox,
	IconText,
	Input,
	Textarea,
	Metric,
	MicroCard,
	ProgressBar,
	SelectInput,
	Table,
} from "../components";

export default function Components() {
	return (
		<div className="content-wrapper-lg py-4">
			<h1>Components</h1>
			<hr />

			<div className="py-2">
				<h4 className="mb-2">Avatars</h4>

				<div className="d-flex align-items-center">
					<Avatar size="sm">
						<img
							src={require("../assets/images/avatar.jpg")}
							alt="Avatar"
						/>
					</Avatar>
					<Avatar size="md" className="ms-2">
						<img
							src={require("../assets/images/avatar.jpg")}
							alt="Avatar"
						/>
					</Avatar>
					<Avatar size="lg" color="red" className="ms-2">
						MK
					</Avatar>
					<Avatar size="xl" color="green" className="ms-2">
						AG
					</Avatar>
					<Avatar size="xxl" color="blue" className="ms-2">
						AM
					</Avatar>
				</div>
			</div>

			<hr />

			<div className="py-2">
				<h4 className="mb-2">Avatar Stack</h4>

				<AvatarStack>
					{Array.from({ length: 4 }, (_, i) => (
						<li className="avatar-stack-item" key={i}>
							<Avatar>
								<img
									src={require("../assets/images/avatar.jpg")}
									alt="Avatar"
								/>
							</Avatar>
						</li>
					))}
				</AvatarStack>
			</div>

			<hr />

			<div className="py-2">
				<h4 className="mb-2">Avatar With Name</h4>

				<AvatarWithName name="Asghar Taraghe">
					<Avatar className="ms-2" size="md" color="blue">
						<span>AT</span>
					</Avatar>
				</AvatarWithName>
			</div>

			<hr />

			<div className="py-2">
				<h4 className="mb-4">Badges</h4>

				<Badge className="bg-orange fg-white">This Badge</Badge>
				<Badge className="bg-green fg-white ms-2">This Badge</Badge>
				<Badge className="bg-red fg-white ms-2">This Badge</Badge>
				<Badge className="bg-blue fg-white ms-2">This Badge</Badge>
				<Badge className="bg-purple fg-white ms-2">This Badge</Badge>
			</div>

			<hr />

			<div className="py-2">
				<h4 className="mb-4">Buttons</h4>

				<Btn>Click Me!</Btn>
				<Btn className="ms-2" type="primary">
					Click Me!
				</Btn>
				<Btn className="ms-2" type="secondary">
					Click Me!
				</Btn>
				<Btn className="ms-2" type="outline">
					Click Me!
				</Btn>
			</div>

			<hr />

			<div className="py-2">
				<h4 className="mb-4">Inputs</h4>

				<Input
					className="mb-4"
					id="name-input"
					placeholder="Enter your name"
				/>
				<Textarea
					className="mb-4"
					id="message-input"
					placeholder="Enter your message"
				/>
				<Checkbox className="mb-4" text="Please check me!" />
				<SelectInput
					className="mb-4"
					options={[{ title: "me" }, { title: "others" }]}
				/>
				<AuthCode />
			</div>

			<hr />

			<div className="py-2">
				<h4 className="mb-4">Cards</h4>
				<div className="d-flex align-items-center flex-wrap">
					<Card
						className="m-2"
						type="outline"
						style={{ maxWidth: "360px" }}
					>
						<div className="card-img">
							<img
								src={require("../assets/images/test.jpg")}
								alt="Card "
							/>
						</div>

						<div className="card-title mt-4">
							Boston family home
						</div>

						<div className="card-text mt-2">
							A beautiful townhouse in the heart of Miami's down
							town district. With 3 bedrooms and a heated pool.
						</div>

						<ul className="icon-texts mt-4">
							<li>
								<IconText icon="isax isax-car">
									3 bedrooms
								</IconText>
							</li>
							<li>
								<IconText icon="isax isax-car">
									3 bedrooms
								</IconText>
							</li>
							<li>
								<IconText icon="isax isax-car">
									3 bedrooms
								</IconText>
							</li>
						</ul>

						<div className="card-footer mt-4">
							<Btn className="full-width" type="outline">
								View listing details
							</Btn>
						</div>
					</Card>

					<Card className="m-2" style={{ maxWidth: "360px" }}>
						<div className="card-img">
							<img
								src={require("../assets/images/test.jpg")}
								alt="Card "
							/>
						</div>

						<div className="card-title mt-4">
							Wireframing exercise
						</div>

						<div className="card-text mt-2">23 Dec, 2022</div>

						<div className="card-footer d-flex mt-4">
							<div className="left">
								<AvatarStack>
									{Array.from({ length: 4 }, (_, i) => (
										<li
											className="avatar-stack-item"
											key={i}
										>
											<Avatar>
												<img
													src={require("../assets/images/avatar.jpg")}
													alt="Avatar"
												/>
											</Avatar>
										</li>
									))}
								</AvatarStack>
							</div>

							<div className="my-spacer"></div>

							<div className="right">
								<Badge className="bg-orange fg-white">
									Canceled
								</Badge>
							</div>
						</div>
					</Card>

					<Card className="m-2" style={{ maxWidth: "360px" }}>
						<div className="card-title">Wireframing exercise</div>

						<div className="card-text mt-2">23 Dec, 2022</div>

						<div className="card-footer d-flex mt-4">
							<div className="left">
								<Avatar>
									<span>MK</span>
								</Avatar>
							</div>

							<div className="my-spacer"></div>

							<div className="right">
								<Badge className="bg-green fg-white">
									Canceled
								</Badge>
							</div>
						</div>
					</Card>

					<Card className="m-2" style={{ maxWidth: "380px" }}>
						<div className="card-profile-avatar">
							<Avatar size="xxl">
								<span>MK</span>
							</Avatar>
						</div>

						<div className="card-profile-title mt-3">
							Rober Whistable
						</div>

						<div className="card-profile-desc mt-2">
							23 Dec, 2022
						</div>

						<div className="card-profile-details-wrapper mt-4">
							<ul className="card-profile-details">
								<li>
									<div className="detail-title">Projects</div>
									<div className="detail-value">24</div>
								</li>

								<div className="divider"></div>

								<li>
									<div className="detail-title">Tasks</div>
									<div className="detail-value">132</div>
								</li>

								<div className="divider"></div>

								<li>
									<div className="detail-title">Insights</div>
									<div className="detail-value">31</div>
								</li>
							</ul>
						</div>

						<div className="card-footer mt-4 center-btn">
							<Btn type="outline">View profile</Btn>
						</div>
					</Card>

					<MicroCard style={{ flex: "1" }}>
						<div className="micro-card-img">
							<img
								src={require("../assets/images/test.jpg")}
								alt="Card "
							/>
						</div>

						<div className="micro-card-content">
							<div className="micro-card-title">
								Boston family home
							</div>

							<div className="micro-card-desc">
								A beautiful townhouse in the heart of Miami's
								down town district. With 3 bedrooms and a heated
								pool.
							</div>
						</div>
					</MicroCard>
				</div>

				<hr />

				<div className="py-2">
					<h4 className="mb-4">Metric</h4>
					<Metric />
				</div>

				<hr />

				<div className="py-2">
					<h4 className="mb-4">Progressbar</h4>
					<ProgressBar value="0" />
					<ProgressBar className="mt-2" value="50" />
					<ProgressBar className="mt-2" value="75" />
					<ProgressBar className="mt-2" value="90" />
				</div>

				<hr />

				<div className="py-2">
					<h4 className="mb-4">Table</h4>

					<Table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Age</th>
								<th>Country</th>
								<th>Job</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>Matin</td>
								<td>20</td>
								<td>Iran</td>
								<td>Developer</td>
							</tr>

							<tr>
								<td>Mika</td>
								<td>2</td>
								<td>Australia</td>
								<td>-</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
}
