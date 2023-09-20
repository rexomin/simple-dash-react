import { Avatar, AvatarStack, AvatarWithName } from "../components";

export default function Components() {
	return (
		<div className="content-wrapper-lg py-4">
			<h1>Components</h1>
			<hr />

			<div className="py-2">
				<h4 class="mb-2">Avatars</h4>

				<div class="d-flex align-items-center">
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
				<h4 class="mb-2">Avatar Stack</h4>

				<AvatarStack>
					{Array.from({ length: 4 }, (_, i) => (
						<li className="avatar-stack-item" key={i}>
							<Avatar>
								<img src={require("../assets/images/avatar.jpg")} alt="Avatar" />
							</Avatar>
						</li>
					))}
				</AvatarStack>
			</div>

            <hr />

			<div className="py-2">
				<h4 class="mb-2">Avatar With Name</h4>

				<AvatarWithName name="Asghar Taraghe">
					<Avatar class="ms-2" size="md" color="blue">
						<span>AT</span>
					</Avatar>
				</AvatarWithName>
			</div>
		</div>
	);
}
