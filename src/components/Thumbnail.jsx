import React from "react";

function Thumbnail({ item, isActive, onClick, currentIndex, totalItems }) {
	// const zIndex = isActive ? 2 : 1;
	// const distance = index - currentIndex;
	// const transform = `translateX(${distance * 20}px)`;
	const getThumbnailOrder = () => {
		let distance = item.id - currentIndex;
		if (distance < 0) distance += totalItems; // Adjust distance for negative values
		return distance;
	};

	return (
		<div
			className={`item ${isActive ? "active" : ""}`}
			onClick={onClick}
			style={{
				order: getThumbnailOrder(), // Set the order dynamically
			}}
			// style={{ zIndex, transform }}
		>
			<img src={item.imageURL} alt={`Thumbnail ${item.id}`} />
		</div>
	);
}

export default Thumbnail;
