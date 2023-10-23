/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import {
// 	HeroSection,
// 	Navbar,
// 	About,
// 	Portfolio,
// 	Technologies,
// 	Contact,
// } from "./components/index.js";
// import AOS from "aos";

// function App() {
// 	return (
// 		<>
// 			<Navbar />
// 			<HeroSection />
// 			<About />
// 			<Portfolio />
// 			<Technologies />
// 			<Contact />
// 		</>
// 	);
// }

// export default App;

import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure to import AOS CSS

import {
	HeroSection,
	Navbar,
	About,
	Portfolio,
	Technologies,
	Contact,
} from "./components/index.js";

class App extends Component {
	componentDidMount() {
		AOS.init({
			duration: 1000, // Animation duration in milliseconds
			easing: "ease-in-out", // Easing function
			offset: 200, // Offset (in pixels) from the trigger point
		});
	}

	render() {
		return (
			<>
				<Navbar />
				<HeroSection />
				<About />
				<Portfolio />
				<Technologies />
				<Contact />
			</>
		);
	}
}

export default App;
