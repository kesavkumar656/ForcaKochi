// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //
import Background from "@/../public/img/HomeSuperLeague/SuperLeagueBG.png";
// STYLES //
import styles from "@/styles/sections/HomeSuperLeague.module.scss";

// IMAGES //

// DATA //

/** HomeSuperLeague Section */
export default function HomeSuperLeague() {
	return (
		<section className={`${styles.HomeSuperLeague} section_spacing`}>
			<div className={`${styles.wrapper} container`}>
				<div className={`${styles.textDiv}  `}>
					<div
						className={`${styles.heading} font_primary text_xl text_800  color_secondary text_uppercase`}
					>
						Super League Kerala
					</div>
					<div>
						<p className={`${styles.para}  text_primary text_100 text_sm`}>
							Designed to support, promote and boost football across Kerala, SLK opens
							new doors and creates endless opportunities for professional footballers
							at the grassroots level.
						</p>
					</div>
				</div>
				<div className={`${styles.BackgroundDiv}  `}>
					<Image className={styles.BackgroundImg} src={Background} alt=""></Image>
				</div>
			</div>
		</section>
	);
}
