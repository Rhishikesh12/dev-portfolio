/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure to import AOS CSS
import { Link, Element, scroller } from "react-scroll";

import {
	HeroSection,
	Navbar,
	About,
	Portfolio,
	Skills,
	Contact,
	Experience,
	Footer,
} from "./components/index.jsx";

class App extends Component {
	componentDidMount() {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			offset: 200,
		});
	}

	render() {
		return (
			<>
				return (
				<div>
					<Navbar />
					<Element name='home'>
						<HeroSection />
					</Element>
					<Element name='about'>
						<About />
					</Element>
					<Element name='skills'>
						<Skills />
					</Element>
					<Element name='experience'>
						<Experience />
					</Element>
					<Element name='projects'>
						<Portfolio />
					</Element>
					<Footer />
				</div>
				);
			</>
		);
	}
}

export default App;
