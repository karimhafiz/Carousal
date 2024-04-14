import React from "react";
import { Carousel } from "react-bootstrap";

const VideoCarousel = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<video controls>
					<source src="path/to/video.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<Carousel.Caption>
					<h3>First Slide</h3>
					<p>Description of the first slide.</p>
				</Carousel.Caption>
			</Carousel.Item>
			{/* Add more Carousel.Item components for additional videos */}
		</Carousel>
	);
};

export default VideoCarousel;
