// MODULES //
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/controller";

// STYLES //
import styles from "@/styles/sections/HomeUpcomingMatches.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import location from "@/../public/img/homeUpcomingMatches/location.png";
import { FreeMode, Navigation, Thumbs, Controller } from "swiper/modules";

// IMAGES //
import Team1Image from "@/../public/img/homeUpcomingMatches/team1.png";
import Team2Image from "@/../public/img/homeUpcomingMatches/team2.png";

// DATA //
const Data = [
	{
		id: "1",
		NthMatch: "1",
		date: "Sep 7th, Sat",
		team1: "Forca Kochi",
		team1Img: Team1Image,
		team2Img: Team2Image,
		team2: "Calicut FC",
	},
	{
		id: "2",
		NthMatch: "2",

		date: "Sep 13th, Fri",
		team1: "Forca Kochi",
		team2: "Calicut FC",
		team1Img: Team2Image,
		team2Img: Team1Image,
	},
	// {
	// 	id: "3",
	// 	NthMatch: "3",

	// 	date: "Oct 18th, Wed",
	// 	team1: "Forca Kochi",
	// 	team2: "Calicut FC",
	// 	team1Img: Team1Image,
	// 	team2Img: Team2Image,
	// },
	{
		id: "10",
		NthMatch: "10",

		date: "Sep 27th, Fri",
		team1: "Forca Kochi",
		team2: "Calicut FC",
		team1Img: Team2Image,
		team2Img: Team1Image,
	},
	{
		id: "4",
		NthMatch: "4",

		date: "Sep 7th, Sat",
		team1: "Forca Kochi",
		team2: "Calicut FC",
		team1Img: Team1Image,
		team2Img: Team2Image,
	},
	{
		id: "5",
		NthMatch: "5",

		date: "Sep 13th, Fri",
		team1: "Forca Kochi",
		team2: "Malappuram FC",
		team1Img: Team2Image,
		team2Img: Team1Image,
	},
	{
		id: "6",
		NthMatch: "6",

		date: "Sep 18th, Wed",
		team1: "Forca Kochi",
		team2: "Malappuram FC",
		team1Img: Team2Image,
		team2Img: Team2Image,
	},

	{
		id: "7",
		NthMatch: "7",

		date: "Sep 27th, Fri",
		team1: "Forca Kochi",
		team2: "Malappuram FC",
		team1Img: Team1Image,
		team2Img: Team1Image,
	},
	{
		id: "8",
		NthMatch: "8",

		date: "Oct 1st, Tues",
		team1: "Forca Kochi",
		team2: "Malappuram FC",
		team1Img: Team1Image,
		team2Img: Team2Image,
	},
	{
		id: "9",
		NthMatch: "9",

		date: "Oct 9th, Wed",
		team1: "Forca Kochi",
		team2: "Malappuram FC",
		team1Img: Team2Image,
		team2Img: Team1Image,
	},
];

/** HomeUpcomingMatches Section */
export default function HomeUpcomingMatches() {
	const [ActiveTab, setActiveTab] = useState(0);
	const [swiperInstance, setSwiperInstance] = useState(null);
	const CurrentMatch = Data[ActiveTab];

	// eslint-disable-next-line require-jsdoc
	const handleSlideChange = (swiper) => {
		setActiveTab(swiper.activeIndex);
	};

	// eslint-disable-next-line require-jsdoc
	const handleSlideClick = (index) => {
		setActiveTab(index);
		swiperInstance.slideTo(index);
	};

	return (
		<section className={`${styles.HomeUpcomingMatches}  section_spacing`}>
			<div className="container">
				<h1 className="text_center text_uppercase color_secondary font_primary text_700 text_lg">
					Upcoming Matches
				</h1>
				<div className={`${styles.table} bg_primary `}>
					<Swiper
						loop={true}
						modules={[Navigation]}
						onSwiper={setSwiperInstance}
						className={`${styles.DateDiv}`}
						spaceBetween={50}
						slidesPerView={5}
						navigation
						initialSlide={ActiveTab}
						onSlideChange={handleSlideChange}
						breakpoints={{
							320: {
								slidesPerView: 2,
								spaceBetween: 20,
							},

							480: {
								slidesPerView: 3,
								spaceBetween: 30,
							},

							640: {
								slidesPerView: 4,
								spaceBetween: 40,
							},
						}}
					>
						{Data.map((slide, index) => (
							<SwiperSlide key={slide.id}>
								<div
									className={`${styles.date} ${
										index === ActiveTab ? styles.active : ""
									}`}
									onClick={() => handleSlideClick(index)}
								>
									<p className="text_sm font_secondary text_300">{slide.date}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<div className={`${styles.ClubDiv}`}>
						<div className={`${styles.nth_match} text_uppercase `}>
							<p>Match {CurrentMatch.NthMatch}</p>
						</div>
						<div className={`${styles.MatchSchedule}`}>
							<div className={`${styles.team1}`}>
								<Image
									className={styles.team1IMG}
									width={100}
									height={100}
									src={CurrentMatch.team1Img}
									alt=""
								/>
								<h1 className="text_700 color_white text_uppercase font_primary">
									{CurrentMatch.team1}
								</h1>
							</div>

							<div className={`${styles.Versus} color_secondary text_500`}>
								<h2>VS</h2>
							</div>
							<div className={`${styles.team2}`}>
								<h1 className="text_700 color_white text_uppercase font_primary">
									{CurrentMatch.team2}
								</h1>
								<Image
									className={styles.team2IMG}
									width={100}
									height={100}
									src={CurrentMatch.team2Img}
									alt=""
								/>
							</div>
						</div>
						<div className={`${styles.liveTxt}`}>
							<div>
								<p>Live</p>
							</div>
						</div>
						<div className={`${styles.Place}`}>
							<Image alt="" src={location}></Image>
							<h1 className="color_white text_sm text_100">
								Jawaharlal Nehru International Stadium Kochi | {CurrentMatch.date} 2024
								at 01:00pm
							</h1>
						</div>
						<div className={`${styles.Booking} color_white`}>
							<button className="bg_secondary font_secondary color_primary">
								Book Your Tickets
							</button>
							<button className=" font_secondary color_primary">
								Add to Calender
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
