// MODULES //
import { useEffect, useRef } from "react";
// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Image from "next/image";
// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeBroadCast.module.scss";

// IMAGES //
import gsap from "gsap";

import Threejs from "@/../public/img/HomeBroadcast/threejs.png";
import ThreeJs from "../components/ThreeJs";
// DATA //

/** HomeBroadCast Section */
export default function HomeBroadCast() {
	const threejs = useRef();
	const containerRef = useRef();

	// gsap.to(threejs.current, {
	// 	y: -1000,
	// 	scrollTrigger: {
	// 		trigger: containerRef.current,
	// 		start: "top bottom",
	// 		end: "bottom top",
	// 		scrub: true,
	// 		markers: true,
	// 	},
	// });
	const Data = [
		{
			country: "India",
			imgData: "/img/HomeBroadcast/img1.png",
			TimeZone: "(GMT +5:30)",
		},
		{
			imgData: "/img/HomeBroadcast/img2.png",
			country: "India",
			TimeZone: "(GMT +5:30)",
		},
		{
			imgData: "/img/HomeBroadcast/img3.png",
			country: "India",
			TimeZone: "(GMT +5:30)",
		},
		{
			imgData: "/img/HomeBroadcast/img4.png",
			country: "India",
			TimeZone: "(GMT +5:30)",
		},
		{
			imgData: "/img/HomeBroadcast/img5.png",
			country: "India",
			TimeZone: "(GMT +5:30)",
		},
		{
			imgData: "/img/HomeBroadcast/img6.png",
			country: "India",
			TimeZone: "(GMT +5:30)",
		},
	];
	return (
		<section className={`${styles.HomeBroadCast} section_spacing bg_primary`}>
			<div className="container " ref={containerRef}>
				<div className={styles.wrapper}>
					<div>
						<h1
							className={`${styles.heading} text_center  text_md font_primary text_500 color_secondary text_uppercase`}
						>
							Our Broadcast Partners
						</h1>
						<div className={`${styles.country}  `}>
							{Data.map((CountryData, index) => (
								<div key={index} className={`${styles.MapDiv} color_white`}>
									<Image alt="" src={CountryData.imgData} width={90} height={50} />

									<div>
										<p className={`${styles.countryName} text_sm text_center text_500`}>
											{CountryData.country}
										</p>
										<p className={`${styles.TimeZone} `}>{CountryData.TimeZone}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className={styles.threejs} ref={threejs}>
						<ThreeJs></ThreeJs>
					</div>
				</div>
				<div></div>
			</div>
		</section>
	);
}
