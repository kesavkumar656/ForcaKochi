// MODULES //
import Image from "next/image";
// COMPONENTS //

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/controller";

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeUpcomingMatches.module.scss";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Controller } from "swiper/modules";
// IMAGES //
import Team1Image from "@/../public/img/homeUpcomingMatches/team1.png";
import Team2Image from "@/../public/img/homeUpcomingMatches/team2.png";
// DATA //

/** HomeUpcomingMatches Section */
export default function HomeUpcomingMatches() {
	const Data = [
		{
			id: "1",
			NthMatch:"1",
			date: "Sep 7th, Sat",
			team1: "Forca Kochi",
			team1Img: Team1Image,
			team2Img: Team2Image,
			team2: "Thiruvanthapuram kombans fc",
		},
		{
			id: "2",
			NthMatch:"2",

			date: "Sep 13th, Fri",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
		{
			id: "3",
			NthMatch:"3",

			date: "Sep 18th, Wed",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
		{
			id: "10",
			NthMatch:"10",

			date: "Sep 27th, Fri",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
		{
			id: "4",
			NthMatch:"4",

			date: "Sep 7th, Sat",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
		{
			id: "5",
			NthMatch:"5",

			date: "Sep 13th, Fri",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
		{
			id: "6",
			NthMatch:"6",

			date: "Sep 18th, Wed",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},

		{
			id: "7",
			NthMatch:"7",

			date: "Sep 27th, Fri",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
		{
			id: "8",
			NthMatch:"8",

			date: "Oct 1st, Tues",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
		{
			id: "9",
			NthMatch:"9",

			date: "Oct 9th, Wed",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
	];
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [mainSwiper, setMainSwiper] = useState(null);
	const [controlledSwiper, setControlledSwiper] = useState(null);

	return (
		<section className={`${styles.HomeUpcomingMatches} bg_white  `}>
			<div className="container ">
				<h1 className="text_uppercase color_secondary font_primary text_700 text_lg section_spacing">
					Upcoming Matches
				</h1>
				<div className={`${styles.table} bg_primary `}>
					{/* First Swiper with thumbs control */}
					<Swiper
						className={`${styles.DateDiv}`}
						spaceBetween={50}
						slidesPerView={5}
						loop={true}
						navigation={true}

						thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
						modules={[FreeMode, Thumbs, Controller]}
						onSwiper={setMainSwiper}
						controller={{ control: controlledSwiper }}
					>
						{Data.map((slide) => (
							<SwiperSlide key={slide.id}>
								<div>
									<h3 >{slide.date}</h3>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Second Swiper to control the first one */}
					<Swiper
						onSwiper={setControlledSwiper} // Set state for the second Swiper
						spaceBetween={50}
						slidesPerView={1}
						pagination={{ clickable: true }}
						modules={[FreeMode, Controller]} // Include Controller module
						controller={{ control: mainSwiper }} // Link to first Swiper
					>
						{Data.map((slide) => (
							<SwiperSlide key={slide.id}>
								<div className={`${styles.ClubDiv}`}>
									<div className={`${styles.nth_match}`}>											<p>Match {slide.NthMatch}</p>
									</div>
									<div className={`${styles.MatchSchedule}`}>
										
										<div className={`${styles.team1} `}>
											<Image width={100} height={100} src={slide.team1Img} alt=""></Image>
											<h1 className="  color_white text_uppercase font_primary">
												{slide.team1}
											</h1>
										</div>
										
										<h2 className="color_secondary text_500 ">VS</h2>
										<div className={`${styles.team2} `}>
											<Image width={100} height={100} src={slide.team2Img} alt=""></Image>
											<h1 className="color_white text_uppercase font_primary">
												{slide.team2}
											</h1>
										</div>
										
									</div>
									<div className={`${styles.liveTxt}`}>
										<div><p>	Live</p></div>
									
									</div>
									<div className={`${styles.Place} `}>
										<h1 className="color_White text_sm  text_100">
											Jawaharlal Nehru International Stadium Kochi | Friday, 7th August
											2024 at 01:00pm
										</h1>
									</div>
									<div className={`${styles.Booking} color_white `}>
										<button className="bg_secondary font_secondary color_primary">
											Book Your Tickets
										</button>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
