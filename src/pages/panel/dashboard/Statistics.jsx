import { StatisticBox } from "../../../components";

export default function Statistics() {
	return (
		<div className="row gy-4">
			<div className="col-12 col-md-6 col-lg-3">
				<StatisticBox className="bg-blue fg-white" />
			</div>
			<div className="col-12 col-md-6 col-lg-3">
				<StatisticBox className="bg-orange fg-white" />
			</div>
			<div className="col-12 col-md-6 col-lg-3">
				<StatisticBox className="bg-green fg-white" />
			</div>
			<div className="col-12 col-md-6 col-lg-3">
				<StatisticBox className="bg-purple fg-white" />
			</div>
		</div>
	);
}
