// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeAbout.module.scss";

// IMAGES //
import Background from "@/../public/img/HomeHero/background.jpg";
import Ground from "@/../public/img/HomeHero/background2.png";
// DATA //

/** HomeAbout Section */
export default function HomeAbout() {
	return (
		<section className={styles.HomeAbout}>
			<div className={`${styles.Ground}`}>
				<div className={styles.Background}>
					<div className="next_image">
						<Image src={Background} alt=" "></Image>
					</div>
					<div className="next_image">
						<Image src={Ground} alt=" "></Image>
					</div>
					<div className={styles.textDiv}>
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
		</section>
	);
}
