"use client";
import "@splidejs/react-splide/css";
import "./carouselStyles.css";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

export default function Carousel() {
	return (
		<Splide
			options={{
				type: "loop",
				autoplay: true,
				interval: 1000,
				arrows: true,
				pagination: true,
			}}
			hasTrack={true}
			className="splide"
			aria-label="splide carousel for images"
		>
			<SplideSlide>
				<img src="/cast1.jpg" className="splide__slide" />
			</SplideSlide>
			<SplideSlide>
				<img src="/cast2.jpg" className="splide__slide" />
			</SplideSlide>
			<SplideSlide>
				<img src="/cast3.jpg" className="splide__slide" />
			</SplideSlide>
			<div className="splide__progress">
				<div className="splide__progress__bar" />
			</div>
		</Splide>
	);
}
