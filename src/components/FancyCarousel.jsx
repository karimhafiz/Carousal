import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export default function FancyCarousel() {
	const slides = [
		{
			imageUrl: "https://via.placeholder.com/800x400",
			title: "Slide 1",
			description: "Description for Slide 1",
		},
		{
			imageUrl: "https://via.placeholder.com/800x400",
			title: "Slide 2",
			description: "Description for Slide 2",
		},
		{
			imageUrl: "https://via.placeholder.com/800x400",
			title: "Slide 3",
			description: "Description for Slide 3",
		},
	];

	const [index, setIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isPaused) {
				setIndex((prevIndex) =>
					prevIndex === slides.length - 1 ? 0 : prevIndex + 1
				);
			}
		}, 2000); // Change the interval as needed

		return () => clearInterval(interval);
	}, [index, isPaused, slides.length]);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const togglePause = () => {
		setIsPaused(!isPaused);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			{slides.map((slide, idx) => (
				<Carousel.Item key={idx}>
					<img
						className="d-block w-100"
						src={slide.imageUrl}
						alt={slide.title}
					/>
					<Carousel.Caption>
						<h3>{slide.title}</h3>
						<p>{slide.description}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}
