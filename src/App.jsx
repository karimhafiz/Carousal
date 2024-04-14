import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

export default function App() {
	return (
		<Router>
			<Header />
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	);
}
