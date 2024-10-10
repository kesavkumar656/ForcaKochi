/* eslint-disable require-jsdoc */
import React, { useState } from "react";

const ExpandableDiv = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div>
			<button type="button" onClick={handleClick}>
				{isExpanded ? "Shrink" : "Expand"}
			</button>
			<div
				style={{
					width: isExpanded ? "100%" : "100px",
					transition: "width 0.5s ease",
				
					backgroundColor: "#f0f0f0",
					padding: "20px",
				}}
			>
				<p>This content will expand as the div grows.</p>
			</div>
		</div>
	);
};

export default ExpandableDiv;
