// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Image from "next/image";
// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeBroadCast.module.scss";

// IMAGES //

// DATA //

/** HomeBroadCast Section */
export default function HomeBroadCast() {
	const Data = [{}];
	return (
		<section className={styles.HomeBroadCast}>
			<div>
				<div>
					<h1
						className={`${styles.heading} text_md font_primary text_500 color_secondary text_uppercase`}
					>
						Our Broadcast Partners
					</h1>
					<div>
						{Data.map((CountryData, index) => (
							<div key={index}>
								<Image
									key
									alt=""
									src={CountryData.image}
									width={50}
									height={50}
								></Image>
								<p></p>
							</div>
						))}
					</div>
				</div>
				<div></div>
			</div>
		</section>
	);
}
