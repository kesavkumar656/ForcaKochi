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
			NthMatch: "1",
			date: "Sep 7th, Sat",
			team1: "Forca Kochi",
			team1Img: Team1Image,
			team2Img: Team2Image,
			team2: "Thiruvanthapuram kombans fc",
		},
		{
			id: "2",
			NthMatch: "2",

			date: "Sep 13th, Fri",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team2Image,
			team2Img: Team1Image,
		},
		{
			id: "3",
			NthMatch: "3",

			date: "Sep 18th, Wed",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
		{
			id: "10",
			NthMatch: "10",

			date: "Sep 27th, Fri",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team2Image,
			team2Img: Team1Image,
		},
		{
			id: "4",
			NthMatch: "4",

			date: "Sep 7th, Sat",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
		{
			id: "5",
			NthMatch: "5",

			date: "Sep 13th, Fri",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team2Image,
			team2Img: Team1Image,
		},
		{
			id: "6",
			NthMatch: "6",

			date: "Sep 18th, Wed",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team2Image,
			team2Img: Team2Image,
		},

		{
			id: "7",
			NthMatch: "7",

			date: "Sep 27th, Fri",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team1Image,
		},
		{
			id: "8",
			NthMatch: "8",

			date: "Oct 1st, Tues",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team1Image,
			team2Img: Team2Image,
		},
		{
			id: "9",
			NthMatch: "9",

			date: "Oct 9th, Wed",
			team1: "Forca Kochi",
			team2: "Thiruvanthapuram kombans fc",
			team1Img: Team2Image,
			team2Img: Team1Image,
		},
	];

	// eslint-disable-next-line require-jsdoc
	const handleSlideChange = (swiper) => {
		setActiveTab(swiper.activeIndex);
	};
	// eslint-disable-next-line require-jsdoc
	const handleSlideClick = (index) => {
		setActiveTab(index);
	};
	const [ActiveTab, setActiveTab] = useState(0);
	const CurrentMatch = Data[ActiveTab];
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
						pagination={true}
						navigation={true}
						modules={[FreeMode, Thumbs, Controller]}
						onSlideChange={handleSlideChange}
					>
						{Data.map((slide, index) => (
							<SwiperSlide key={slide.id} onClick={() => handleSlideClick(index)}>
								<div>
									<h3>{slide.date}</h3>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Second Swiper to control the first one */}

					<div className={`${styles.ClubDiv}`}>
						<div className={`${styles.nth_match} `}>
							<p>Match {CurrentMatch.NthMatch}</p>
						</div>
						<div className={`${styles.MatchSchedule} `}>
							<div className={`${styles.team1} `}>
								<Image
									width={100}
									height={100}
									src={CurrentMatch.team1Img}
									alt=""
								></Image>
								<h1 className=" text_700 color_white text_uppercase font_primary">
									{CurrentMatch.team1}
								</h1>
							</div>

							<h2 className="color_secondary text_500 ">VS</h2>
							<div className={`${styles.team2} `}>
								<h1 className="text_700 color_white text_uppercase font_primary">
									{CurrentMatch.team2}
								</h1>
								<Image
									width={100}
									height={100}
									src={CurrentMatch.team2Img}
									alt=""
								></Image>
							</div>
						</div>
						<div className={`${styles.liveTxt}`}>
							<div>
								<p> Live</p>
							</div>
						</div>
						<div className={`${styles.Place} `}>
							<h1 className="color_White text_sm  text_100">
								Jawaharlal Nehru International Stadium Kochi | {CurrentMatch.date} 2024
								at 01:00pm
							</h1>
						</div>
						<div className={`${styles.Booking} color_white `}>
							<button className="bg_secondary font_secondary color_primary">
								Book Your Tickets
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
