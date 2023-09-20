import { Avatar } from "../components";

export default function Components() {
	return (
		<div className="content-wrapper-lg py-4">
			<h1>Components</h1>
			<hr />

			<div>
				<h4 class="mb-4">Avatars</h4>

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

		</div>
	);
}
