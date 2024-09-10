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
			<div className={`${styles.Ground} container-fluid `}>
				<div className={styles.Background}>
					<Image src={Background} alt=" "></Image>
					<Image src={Ground} alt=" "></Image>
					<div></div>{" "}
					<h1 className={`${styles.Heading}`}>Nammude Forca, Nammude Kochi</h1>
					<p className={`${styles.Para} text_reg`}>
						Kerala is home to some of the most die-hard football fans in India. You
						can feel the passion for the sport in every nook and corner of the State.
						This is the passion that represents and drives Forca Kochi FC. You can
						hear it in our songs, see it in every tackle, and feel it in every fan.
					</p>
				</div>
			</div>
		</section>
	);
}
