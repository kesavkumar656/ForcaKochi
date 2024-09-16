// // MODULES //

// // COMPONENTS //

// // SECTIONS //

// // PLUGINS //
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// // import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// // UTILS //

// // STYLES //
// import styles from "@/styles/components/Table.module.scss";

// // IMAGES //

// // DATA //

// /** Table Component */
// export default function Table() {
// 	const [thumbsSwiper, setThumbsSwiper] = useState(null);
// 	return (
// 		<div className="">
// 			<Swiper
// 				style={{
// 					"--swiper-navigation-color": "#fff",
// 					"--swiper-pagination-color": "#fff",
// 				}}
// 				loop={true}
// 				spaceBetween={10}
// 				navigation={true}
// 				thumbs={{ swiper: thumbsSwiper }}
// 				modules={[FreeMode, Navigation, Thumbs]}
// 				className="mySwiper2"
// 			>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 			</Swiper>
// 			<Swiper
// 				onSwiper={setThumbsSwiper}
// 				loop={true}
// 				spaceBetween={10}
// 				slidesPerView={4}
// 				freeMode={true}
// 				watchSlidesProgress={true}
// 				modules={[FreeMode, Navigation, Thumbs]}
// 				className="mySwiper"
// 			>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src="https://forcakochi.com/_next/static/media/Mallapuram_big.54bbd6a4.svg" />
// 				</SwiperSlide>
// 			</Swiper>
// 		</div>
// 	);
// }
