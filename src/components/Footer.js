// MODULES //

// COMPONENTS //

// SECTIONS //
import Image from "next/image";
// PLUGINS //
import fb from "@public/../../public/img/icons/social/fb.svg";
import insta from "@public/../../public/img/icons/social/insta.svg";
import linkedin from "@public/../../public/img/icons/social/linkedin.svg";
import twitter from "@public/../../public/img/icons/social/twitter.svg";
import yt from "@public/../../public/img/icons/social/yt.svg";
import MadeByTing from "@public/../../public/img/MadeByTing.svg";
// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //

// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer
			className={`${styles.main_footer} font_secondary bg_primary color_white`}
		>
			<p>© {new Date().getFullYear()} Copyright</p>
			<div className={styles.social}>
				<a>
					{" "}
					<Image alt="" src={fb} width={20}></Image>
				</a>
				<a>
					<Image alt="" src={linkedin} width={20}></Image>
				</a>
				<a>
					<Image alt="" src={twitter} width={20}></Image>
				</a>

				<a>
					<Image alt="" src={yt} width={20}></Image>
				</a>
			</div>
			<div>
				<Image alt="" src={MadeByTing}></Image>
			</div>
		</footer>
	);
}
