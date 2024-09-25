// MODULES //
import { useRef, useState } from "react";
// COMPONENTS //
import { Swiper, SwiperSlide } from "swiper/react";
// SECTIONS //
import { Navigation } from "swiper/modules";
import { EffectCards } from "swiper/modules";
// PLUGINS //
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import img1 from "@/../../public/img/HomeKochiMoment/img1.jpg";
// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeKochiMoment.module.scss";

// IMAGES //

// DATA //

/** HomeKochiMoment Section */
export default function HomeKochiMoment() {
	return (
		<section className={styles.HomeKochiMoment}>
			<div className="container">
				<h1 className="color_secondary font_primary text_lg text_uppercase text_700">
					The Forca Kochi moments
				</h1>
				<Swiper
					navigation={true}
					effect={"cards"}
					slideShadows={false}
					grabCursor={true}
					perSlideOffset={10}
					modules={[EffectCards, Navigation]}
					className={styles.cardSlider}
				>
					<SwiperSlide>
						<Image src={img1} alt=""></Image>
					</SwiperSlide>
					<SwiperSlide>
						<Image src={img1} alt=""></Image>
					</SwiperSlide>
					<SwiperSlide>
						<Image src={img1} alt=""></Image>
					</SwiperSlide>
					<SwiperSlide>
						<Image src={img1} alt=""></Image>
					</SwiperSlide>
					<SwiperSlide>
						<Image src={img1} alt=""></Image>
					</SwiperSlide>
					<SwiperSlide>
						<Image src={img1} alt=""></Image>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}
