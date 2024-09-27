// MODULES //
import { useEffect } from "react";
// COMPONENTS //
import { Swiper, SwiperSlide } from "swiper/react";
import SliderArrow from "../components/SliderArrow";

// SECTIONS //
import { Navigation } from "swiper/modules";
import { EffectCards } from "swiper/modules";
// PLUGINS //
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import img1 from "@/../../public/img/HomeKochiMoment/img1.jpg";
import LArrow from "@/../../public/img/HomeKochiMoment/leftArrow.png";
import RArrow from "@/../../public/img/HomeKochiMoment/rightArrow.png";

// STYLES //
import styles from "@/styles/sections/HomeKochiMoment.module.scss";

/** HomeKochiMoment Section */
export default function HomeKochiMoment() {
	return (
		<section className={`${styles.HomeKochiMoment} bg_terinary`}>
			<div className="container">
				<h1 className="color_secondary font_primary text_lg text_uppercase text_700">
					The Forca Kochi moments
				</h1>
				<div className={styles.Wrapper}>
					<Swiper
						className={styles.SliderDiv}
						navigation={{
							prevEl: ".custom-prev",
							nextEl: ".custom-next",
						}}
						loop={true}
						rotate={true}
						effect={"cards"}
						slideShadows={false}
						grabCursor={true}
						perSlideOffset={15}
						modules={[EffectCards, Navigation]}
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
						<div className="slider_arrows">
							<button className="custom-prev">
								<Image src={LArrow} alt=""></Image>
							</button>
							<button className="custom-next">
								<Image src={RArrow} alt=""></Image>
							</button>
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	);
}
