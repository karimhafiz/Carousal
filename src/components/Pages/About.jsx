import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import GalleryCarousel from "./GalleryCarousel"; // Assuming GalleryCarousel component is in the same directory
import catImage from "../../assets/brrCat.jpg"; // Importing an image
import catImage2 from "../../assets/happyCat.jpg";
import catVideo from "../../assets/cat.mp4"; // Importing a video
import TextSection from "./TextSection";
import ContactForm from "./ContactForm";
const AboutUs = () => {
	const carouselItems = [
		{
			type: "image",
			src: catImage,
			title: "Slide 1",
			caption: "Caption for slide 1",
		},
		{
			type: "video",
			src: catVideo,
			title: "Magestic Lordship",
			caption: "Caption for video slide",
		},
		{
			type: "image",
			src: catImage2,
			title: "Happy Cat",
			caption: "Caption for video slide",
		},
		// Add more items as needed
	];

	return (
		<Container>
			<Row className="mt-5">
				<Col>
					<h1>About Us</h1>
					<p>Welcome to our company!</p>
				</Col>
			</Row>

			<TextSection title="Our Gallery">
				<GalleryCarousel items={carouselItems} />
			</TextSection>
			<TextSection title="Contact Us">
				<ContactForm />
			</TextSection>
		</Container>
	);
};

export default AboutUs;
