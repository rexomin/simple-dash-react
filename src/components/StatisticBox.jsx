import { NavLink } from "react-router-dom";
import "../styles/components/_statistic-box.scss";

export default function StatisticBox({
    icon = "fas fa-users",
    title = "Total Users",
    amount = 100,
    link = "/panel/users",
    ...props
}) {
	return (
		<div className={`small-box ${props.className}`}>
			<div className="inner">
				<h3>{amount}</h3>
				<p>{title}</p>
			</div>
			<div className="icon">
				<i className={icon}></i>
			</div>
			<NavLink className="small-box-footer" to={link}>
				View All <i className="fas fa-chevron-right ms-1"></i>
			</NavLink>
		</div>
	);
}
