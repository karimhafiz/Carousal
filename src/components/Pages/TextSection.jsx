import React from "react";
import { Row, Col } from "react-bootstrap";

const TextSection = ({ title, children }) => {
	return (
		<Row className="mt-5">
			<Col>
				<h2>{title}</h2>
				{children}
			</Col>
		</Row>
	);
};

export default TextSection;
