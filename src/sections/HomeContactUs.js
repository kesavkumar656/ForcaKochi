// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //
import "swiper/css/pagination";
import "swiper/css/navigation";
// PLUGINS //
import { Pagination, Navigation } from "swiper/modules";

import Logo from "@/../../public/img/logo.png";
// UTILS //
import Button from "../components/Buttons/Button";
// STYLES //
import styles from "@/styles/sections/HomeContactUs.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// IMAGES //

// DATA //

/** HomeContactUs Section */
export default function HomeContactUs() {
	return (
		<section className={styles.HomeContactUs}>
			<div className="container section_spacing">
				<div className={`${styles.Wrapper} `}>
					<div className={styles.ContactUs}>
						<div>
							<h1 className="color_secondary text_700 text_md font_primary text_uppercase">
								Contact Us
							</h1>
							<p className="color_white text_300 text_sm">
								For queries, feel free to reach out to us.
							</p>
						</div>
						<div className={`${styles.inputDiv}`}>
							<input placeholder="Name"></input>
							<div>
								<input placeholder="Email Id"></input>
								<input placeholder="Phone No"></input>
							</div>
							<div>
								<input placeholder="Subject"></input>
							</div>

							<div>
								<input className="Message" placeholder="Message"></input>
							</div>

							<Button
								className={styles.button}
								shape="square"
								color="secondary"
								variant="filled"
							>
								<p className="text_reg ">Submit</p>
							</Button>
						</div>
					</div>
					<div className={styles.rightClm}>
						<Swiper
							slidesPerView={1}
							loop={true}
							pagination={true}
							modules={[Pagination]}
						>
							<SwiperSlide>
								<h1 className="color_secondary text_700 text_md font_primary text_uppercase">
									Lorem
								</h1>
								<p>Lorem Ipsum sub-copy here.</p>
								<div className={`${styles.rowTwo}`}>
									<Image width={80} height={80} src={Logo} alt=""></Image>
									<p className="text_uppercase">@forcakochi</p>
								</div>
								<p>
									ഒരു പുതിയ അധ്യായം കുറിക്കാൻ “ഫോഴ്സാ കൊച്ചി” 😍⚽️ കാൽപന്തിന്റെ
									ലോകത്തിലേക്ക് വിജയം നേടാൻ ഞങ്ങൾ കളത്തിൽ ഇറങ്ങുകയാണ്. പലനാടുകളിലെ
									ലോകോത്തര പ്രതിഭകളെയും കൊച്ചിയുടെ സ്വന്തം ആവേശം നിറഞ്ഞ ആരാധകരെയും
									ഒന്നിപ്പിക്കാൻ, ഒരു പുത്തൻ ചരിത്രം തുടങ്ങാൻ!
									<span className="color_primary">
										{" "}
										#ForcaKochiFC #SuperLeagueKerala #SLK{" "}
									</span>
								</p>
							</SwiperSlide>
							<SwiperSlide>
								<h1 className="color_secondary text_700 text_md font_primary text_uppercase">
									Lorem
								</h1>
								<p>Lorem Ipsum sub-copy here.</p>
								<div>
									<Image src={Logo} alt=""></Image>
									<p>@forcakochi</p>
								</div>
								<p>
									ഒരു പുതിയ അധ്യായം കുറിക്കാൻ “ഫോഴ്സാ കൊച്ചി” 😍⚽️ കാൽപന്തിന്റെ
									ലോകത്തിലേക്ക് വിജയം നേടാൻ ഞങ്ങൾ കളത്തിൽ ഇറങ്ങുകയാണ്. പലനാടുകളിലെ
									ലോകോത്തര പ്രതിഭകളെയും കൊച്ചിയുടെ സ്വന്തം ആവേശം നിറഞ്ഞ ആരാധകരെയും
									ഒന്നിപ്പിക്കാൻ, ഒരു പുത്തൻ ചരിത്രം തുടങ്ങാൻ!
									<span className="color_secondary">
										#ForcaKochiFC #SuperLeagueKerala #SLK
									</span>
								</p>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
}
