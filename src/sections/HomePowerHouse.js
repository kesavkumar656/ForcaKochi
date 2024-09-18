// MODULES //

// COMPONENTS //

// SECTIONS //
import Image from "next/image";
// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomePowerHouse.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";

// IMAGES //
import BG from "@/../public/img/homePowerHouse/cardBG.png";
import Player from "@/../public/img/homePowerHouse/player.png";
import PlayerInfo from "@/../public/img/homePowerHouse/playerinfo2.png";
import PlayerInfo1 from "@/../public/img/homePowerHouse/playerinfo1.png";
// DATA //

/** HomePowerHouse Section */
export default function HomePowerHouse() {
	const Data = [
		{
			id: "1",
			playerimg: Player,
			name: PlayerInfo1,
			bg: BG,
		},
		{
			id: "2",
			playerimg: Player,
			name: PlayerInfo,
			bg: BG,
		},
		{
			id: "3",
			playerimg: Player,
			name: PlayerInfo1,
			bg: BG,
		},
		{
			id: "4",
			playerimg: Player,
			name: PlayerInfo,
			bg: BG,
		},
		{
			id: "5",
			playerimg: Player,
			name: PlayerInfo1,
			bg: BG,
		},
		{
			id: "6",
			playerimg: Player,
			name: PlayerInfo,
			bg: BG,
		},
		{
			id: "7",
			playerimg: Player,
			name: PlayerInfo1,
			bg: BG,
		},
		{
			id: "8",
			playerimg: Player,
			name: PlayerInfo,
			bg: BG,
		},
		{
			id: "9",
			playerimg: Player,
			name: PlayerInfo1,
			bg: BG,
		},
		{
			id: "10",
			playerimg: Player,
			name: PlayerInfo,
			bg: BG,
		},
		{
			id: "11",
			playerimg: Player,
			name: PlayerInfo,
			bg: BG,
		},
	];
	return (
		<section className={`${styles.HomePowerHouse} bg_white`}>
			<div className="container section_spacing">
				<div className="color_secondary text_700  font_primary text_lg text_uppercase text_center">Meet the Powerhouse of Forca Kochi</div>
				<div className={`${styles.playerTable} section_spacing`}>
					<Swiper
						spaceBetween={50}
						slidesPerView={4}
						navigation={false}
						pagination={{ clickable: true }}
						// modules={(Navigation, Pagination, Scrollbar)}
						scrollbar={{ draggable: true }}
						// button={true}
					>
						{Data.map((slide) => (
							<SwiperSlide key={slide.id} className={`${styles.tableWrapper}`}>
								<Image 
									src={slide.name}
									width={150}
									height={100}
									alt=""
								/>
								<Image src={slide.playerimg} width={200} height={300} alt={slide.id} />
								<Image className={`${styles.BackgroundIMG}`} alt="" src={BG}></Image>
								
							</SwiperSlide>
						))}

						{/* <SwiperSlide src="@/../public/img/HomeHero/ArrowDownn.png"></SwiperSlide> */}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
