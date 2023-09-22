import React from "react";
import "../styles/components/_table.scss";

function Table(props) {
	return (
		<div className="table-wrapper">
			<table className="table">{props.children}</table>
		</div>
	);
}

export default Table;
