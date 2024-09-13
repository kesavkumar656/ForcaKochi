// MODULES //

// COMPONENTS //

// SECTIONS //
import Image from "next/image";
// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomePowerHouse.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper";

// IMAGES //

// DATA //

/** HomePowerHouse Section */
export default function HomePowerHouse() {
	const Data = [
		{
			id: "1",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo1.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
		{
			id: "2",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo2.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
		{
			id: "3",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo1.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
		{
			id: "4",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo2.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
		{
			id: "5",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo1.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
		{
			id: "6",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo2.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
		{
			id: "7",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo1.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
		{
			id: "8",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo2.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
		{
			id: "9",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo1.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
		{
			id: "10",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo2.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
		{
			id: "11",
			playerimg: "@/../public/img/homePowerHouse/player.png",
			name: "@/../public/img/homePowerHouse/playerinfo1.png",
			bg: "@/../public/img/homePowerHouse/cardBG.png",
		},
	];
	return (
		<section className={styles.HomePowerHouse}>
			<div className="container section_spacing">
				<div>Meet the Powerhouse of Forca Kochi</div>
				<div>
					<Swiper
						spaceBetween={50}
						slidesPerView={5}
						navigation
						pagination={{ clickable: true }}
						modules={[Navigation, Pagination, Scrollbar]}
						scrollbar={{ draggable: true }}
					>
						{/* {Data.map((slide) => (
							<SwiperSlide key={slide.id}>
								<div>
									<Image src={slide.playerimg} alt={slide.id} />
									<h3>{slide.name}</h3>
								</div>
							</SwiperSlide>
						))}
						 */}
						<SwiperSlide src="@/../public/img/HomeHero/ArrowDownn.png"></SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
}
