// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeAbout.module.scss";

// IMAGES //
import Background from "@/../public/img/homeAbout/background.jpg";
import Ground from "@/../public/img/homeAbout/background2.png";
import football from "@/../public/img/homeAbout/football.png";
import green from "@/../public/img/homeAbout/Green.png";
import yellow from "@/../public/img/homeAbout/Yellow.png";
// DATA //

/** HomeAbout Section */
export default function HomeAbout() {
	return (
		<section className={styles.HomeAbout}>
			<div className={styles.Background}>
				<div className="next_image">
					<Image src={Background} alt=" "></Image>
					<div className={`${styles.textDiv} container `}>
						<h1
							className={`${styles.Heading} text_xxl color_secondary font_primary text_700 `}
						>
							Nammude Forca, Nammude Kochi
						</h1>
						<p className={`${styles.Para} text_center  color_white text_md text_200`}>
							Kerala is home to some of the most die-hard football fans in India. You
							can feel the passion for the sport in every nook and corner of the State.
							This is the passion that represents and drives Forca Kochi FC. You can
							hear it in our songs, see it in every tackle, and feel it in every fan.
						</p>
					</div>
				</div>
			</div>
			<div className={`${styles.groundDiv} `}>
				<Image className={`${styles.parentImage}`} src={Ground} alt=" "></Image>

				<Image className={`${styles.yellowPlayer} `} src={yellow} alt=""></Image>

				<Image className={`${styles.footbball}`} src={football} alt=""></Image>

				<Image className={`${styles.greenPlayer}`} src={green} alt=""></Image>
			</div>
		</section>
	);
}
