import React, { useState } from "react";
import Slide from "../Slide";
import Thumbnail from "../Thumbnail"; // Import Thumbnail component
import "../Slider.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const items = [
	{
		id: 0,
		imageURL: img1,
		title: "MAGIC SLIDER",
		type: "FLOWER",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
	},
	{
		id: 1,
		imageURL: img2,
		title: "MAGIC SLIDER",
		type: "Nature",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
	},
	{
		id: 2,
		imageURL: img3,
		title: "MAGIC SLIDER",
		type: "NATURE",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
	},
	{
		id: 3,
		imageURL: img4,
		title: "MAGIC SLIDER",
		type: "FLOWER",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
	},
];

function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const currentItem = items.find((item) => item.id === currentIndex);

	const onNext = () => {
		setCurrentIndex((prevIndex) => {
			const nextIndex = (prevIndex + 1) % items.length;
			const updatedItems = [...items];
			const activeItem = updatedItems.splice(nextIndex, 1)[0];
			updatedItems.push(activeItem);
			return nextIndex;
		});
	};

	const onPrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className="slider">
			<div className="list">
				<Slide item={currentItem} />
			</div>

			<div className="thumbnail">
				{items.map((item) => (
					<Thumbnail
						key={item.id}
						item={item}
						isActive={item.id === currentIndex}
						onClick={() => setCurrentIndex(item.id)}
						currentIndex={currentIndex}
						totalItems={items.length}
					/>
				))}
			</div>

			<div className="nextPrevArrows">
				<button className="prev" onClick={onPrev}>
					&lt;
				</button>
				<button className="next" onClick={onNext}>
					&gt;
				</button>
			</div>
		</div>
	);
}

export default Home;
