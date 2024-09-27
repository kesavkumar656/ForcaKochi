// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Image from "next/image";
// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeStayHooked.module.scss";

// IMAGES //
import Social from "@public/../../public/img/HomeStayHooked/social.png";
import background from "@public/../../public/img/HomeStayHooked/diamond.png";
import football from "@public/../../public/img/HomeStayHooked/football.png";
// DATA //

/** HomeStayHooked Section */
export default function HomeStayHooked() {
	return (
		<section
			className={`${styles.HomeStayHooked} bg_primary_light section_spacing `}
		>
			<div className="container ">
				<div className={`${styles.wrapper} `}>
					<div className={styles.textDiv}>
						<h1 className="color_secondary font_primary text_500 text_lg text_uppercase">
							Stay Hooked
						</h1>
						<p className="color_white text_300 font_secondary text_sm">
							Keep up with the latest updates and follow us to catch every moment of
							action.
						</p>
						<div>
							<Image className={styles.SocialDiv} alt="" src={Social}></Image>
						</div>
					</div>

					<div className={styles.background}>
						<Image alt="" src={background} width={600} height={200}></Image>
						<Image alt="" src={football} width={500} height={200} ></Image>
					</div>
				</div>
			</div>
		</section>
	);
}
