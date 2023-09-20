import {
	AuthCode,
	Avatar,
	AvatarStack,
	AvatarWithName,
	Badge,
	Btn,
	Checkbox,
	Input,
	SelectInput,
} from "../components";
import Textarea from "../components/inputs/TextArea";

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
				<h4 class="mb-2">Avatar With Name</h4>

				<AvatarWithName name="Asghar Taraghe">
					<Avatar class="ms-2" size="md" color="blue">
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
					select-options={[{ title: "me" }, { title: "others" }]}
				/>
				<AuthCode />
			</div>
		</div>
	);
}
