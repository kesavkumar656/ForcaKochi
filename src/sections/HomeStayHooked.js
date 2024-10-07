// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Image from "next/image";
// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeStayHooked.module.scss";

// IMAGES //
import Social1 from "@public/../../public/img/HomeStayHooked/social1.png";
import Social2 from "@public/../../public/img/HomeStayHooked/social2.png";
import Social3 from "@public/../../public/img/HomeStayHooked/social3.png";
import Social4 from "@public/../../public/img/HomeStayHooked/social4.png";
import Social5 from "@public/../../public/img/HomeStayHooked/social5.png";
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
						<div className={styles.SocialDiv}>
							<Image alt="" src={Social1}></Image>
							<Image alt="" src={Social2}></Image>
							<Image alt="" src={Social3}></Image>
							<Image alt="" src={Social4}></Image>
							<Image alt="" src={Social5}></Image>
						</div>
					</div>

					<div className={styles.background}>
						<Image alt="" src={background} width={600} height={200}></Image>
						<Image alt="" src={football} width={500} height={200}></Image>
					</div>
				</div>
			</div>
		</section>
	);
}
