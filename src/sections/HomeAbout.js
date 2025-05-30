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
		<section id="About" className={`${styles.HomeAbout} bg_primary `}>
			<Image className={styles.BGLight} src={Background} alt=" "></Image>
			<div className={`${styles.Background} container`}>
				<div>
					<div className={`${styles.textDiv} section_spacing `}>
						<h1
							className={`${styles.Heading} text_xxl color_secondary text_uppercase  font_primary text_700 `}
						>
							Nammude Forca, Nammude Kochi
						</h1>
						<p
							className={`${styles.Para} col-xs-7 text_lg text_center  color_white  text_200`}
						>
							Kerala is home to some of the most die-hard football fans in India. You
							can feel the passion for the sport in every nook and corner of the State.
							This is the passion that represents and drives Forca Kochi FC. You can
							hear it in our songs, see it in every tackle, and feel it in every fan.
						</p>
					</div>
				</div>
			</div>
			<div className={`${styles.groundDiv}  `}>
				<div className="next_image">
					<Image className={`${styles.parentImage}`} src={Ground} alt=" "></Image>
				</div>

				<div className={`${styles.yellowPlayer} `}>
					<Image src={yellow} alt=""></Image>
				</div>

				<div className={`${styles.football}`}>
					<Image src={football} alt=""></Image>
				</div>

				<div className={`${styles.greenPlayer}`}>
					<Image src={green} alt=""></Image>
				</div>
			</div>
		</section>
	);
}
