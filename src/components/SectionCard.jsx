import React from "react";
import "../styles/components/_section-card.scss";

function SectionCard({title, headerRight, footer, children, ...props}) {
	return (
		<div className={`sd-section-card ${props.className}`}>
			<div className="sd-section-card-header">
				<div className="sd-section-card-title">{title}</div>

				<div className="sd-section-card-title-right">
					{headerRight}
				</div>
			</div>

			<div className="sd-section-card-content">{children}</div>

			<div className="sd-section-card-footer">{footer}</div>
		</div>
	);
}

export default SectionCard;
