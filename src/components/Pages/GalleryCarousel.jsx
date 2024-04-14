import React from "react";
import { Carousel } from "react-bootstrap";

const GalleryCarousel = ({ items }) => {
	return (
		<Carousel
			interval={null}
			style={{
				boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
				borderRadius: "10px",
				overflow: "hidden",
			}}
		>
			{items.map((item, index) => (
				<Carousel.Item key={index}>
					{item.type === "image" && (
						<img
							className="d-block w-100"
							src={item.src}
							alt={`Slide ${index + 1}`}
						/>
					)}
					{item.type === "video" && (
						<video className="d-block w-100" controls>
							<source src={item.src} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					)}
					<Carousel.Caption>
						<h3>{item.title}</h3>
						<p>{item.caption}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default GalleryCarousel;
