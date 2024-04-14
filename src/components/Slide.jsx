import React from "react";

export default function Slide({ item }) {
	return (
		<div className="item">
			{item.imageURL ? <img src={item.imageURL} alt="" /> : null}

			<div className="content">
				<div className="title">{item.title}</div>
				<div className="type">{item.type}</div>
				<div className="description">{item.description}</div>
				<div className="button">
					<button>SEE MORE</button>
				</div>
			</div>
		</div>
	);
}
