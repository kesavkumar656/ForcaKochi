// MODULES //
import Image from "next/image";
// COMPONENTS //

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeUpcomingMatches.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// IMAGES //

// DATA //

/** HomeUpcomingMatches Section */
export default function HomeUpcomingMatches() {
	const Data = [
		{ id: "1", date: "Sep 7th, Sat" },
		{
			id: "2",
			date: "Sep 13th, Fri",
		},
		{ id: "3", date: "Sep 18th, Wed" },
		{
			id: "10",
			date: "Sep 27th, Fri",
		},
		{
			id: "4",
			date: "Sep 7th, Sat",
		},
		{ id: "5", date: "Sep 13th, Fri" },
		{
			id: "6",
			date: "Sep 18th, Wed",
		},

		{ id: "7", date: "Sep 27th, Fri" },
		{ id: "8", date: "Oct 1st, Tues" },
		{ id: "9", date: "Oct 9th, Wed" },
	];
	const [SwipperState, useSwipperState] = useState(null);
	return (
		<section className={styles.HomeUpcomingMatches}>
			<div className="container">
				<h1 className="text_uppercase color_secondary font_primary text_700 text_lg">
					Upcoming Matches
				</h1>
				<div className={`${styles.table}`}>
					<Swiper
						style={{
							"--swiper-navigation-color": "#fff",
							"--swiper-pagination-color": "#fff",
						}}
						loop={true}
						spaceBetween={10}
						navigation={true}
						thumbs={{ swiper: SwipperState }}
						modules={[FreeMode, Navigation, Thumbs]}
					>
						{Data.map((slide) => (
							<SwiperSlide key={slide.id}>
								<div>
									<h3 className="color_white">{slide.date}</h3>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<Swiper
						onSwiper={useSwipperState}
						spaceBetween={50}
						slidesPerView={1}
						// navigation="true"
						pagination={{ clickable: true }}
						thumbs={{ swiper: SwipperState }}
						modules={[FreeMode, Navigation, Thumbs]}
						scrollbar={{ draggable: true }}
					>
						{Data.map((slide) => (
							<SwiperSlide key={slide.id}>
								<div className={`${styles.ClubDiv}`}>
									<div>
										<div>
											{/* <Image src={slide.leftLogo} alt=""></Image> */}
											<h1>{slide.LeftClub}</h1>
										</div>
										<h1 className="color_secondary text_500">VS</h1>
										<div>
											{/* <Image src={slide.rightLogo} alt=""></Image> */}
											<h1>{slide.RightClub}</h1>
										</div>
									</div>
									<div></div>
									<div></div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
