// MODULES //
import Image from "next/image";
// COMPONENTS //

import Stadium from "@/../public/img/HomeHero/stadium.png";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "@/styles/sections/HomeHero.module.scss";
import ArrowDown from "@/../public/img/HomeHero/ArrowDownn.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

// IMAGES //

// DATA //

/** HomeHero Section */
export default function HomeHero() {
	return (
		<div className=" section_spacing color_white">
			<div className={`${styles.hero_wrap}  container `}>
				<div className={`${styles.heading}`}>
					<h1
						className={`${styles.FootbalTxt} font_primary text_700  text_uppercase text_xxl color_secondary`}
					>
						Football has a new force
					</h1>
					<p className={`${styles.text} text_sm`}>
						Ready to experience the thrill with Forca Kochi FC
					</p>

					<div className={styles.Image}>
						<Image alt="" src={ArrowDown}></Image>
					</div>
				</div>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<Image alt=" " src={Stadium}></Image>
					</SwiperSlide>
					<SwiperSlide>
						
						<Image alt=" " src={Stadium}></Image>
					</SwiperSlide>
					<SwiperSlide>
						
						<Image alt=" " src={Stadium}></Image>
					</SwiperSlide>
					<SwiperSlide>
						
						<Image alt=" " src={Stadium}></Image>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
