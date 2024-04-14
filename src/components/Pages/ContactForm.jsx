import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";

const ContactForm = () => {
	return (
		<Formik
			initialValues={{ email: "", password: "", rememberMe: false }}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{({ values, handleChange, handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							name="email"
							placeholder="Enter email"
							value={values.email}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							placeholder="Password"
							value={values.password}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check
							type="checkbox"
							name="rememberMe"
							label="Check me out"
							checked={values.rememberMe}
							onChange={handleChange}
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
