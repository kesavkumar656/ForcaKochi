// MODULES //

// COMPONENTS //

import background from "@/../../public/img/HomeDrivingForce/background.png";

// SECTIONS //

// PLUGINS //
import Image from "next/image";
// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeDrivingForce.module.scss";

// IMAGES //

// DATA //

/** HomeDrivingForce Section */
export default function HomeDrivingForce() {
	const Data = [
		{
			ownerIMG: "/img/HomeDrivingForce/Actor1.png",
			Name: "Prithviraj Sukumaran, ",
			position: "Owner",
			button: "/img/HomeDrivingForce/plusButton.png",
		},
		{
			ownerIMG: "/img/HomeDrivingForce/Actor2.png",
			Name: "Shameem Backer C K, ",
			position: "Owner",
			button: "/img/HomeDrivingForce/plusButton.png",
		},
		{
			ownerIMG: "/img/HomeDrivingForce/Actor3.png",
			Name: "Mohammed Shyjal,  ",
			position: "Owner",
			button: "/img/HomeDrivingForce/plusButton.png",
		},
		{
			ownerIMG: "/img/HomeDrivingForce/Actor4.png",
			Name: "Supriya Menon, ",
			position: "Owner",
			button: "/img/HomeDrivingForce/plusButton.png",
		},
	];
	return (
		<section className={`${styles.HomeDrivingForce}`}>
			<div className="container ">
				<div className={`${styles.Wrapper}`}>
					<div className="next_cover_image objectFitCover">
						<Image
							className={`${styles.background} `}
							src={background}
							alt=""
						></Image>
					</div>
					<h1
						className={`${styles.heading} color_secondary font_primary text_center text_xl text_uppercase text_700`}
					>
						Meet the driving force of Kochi
					</h1>
					<div className={`${styles.OwnerInfo}`}>
						{Data.map((OwnerInfo, index) => (
							<div key={index} className={`${styles.MapDiv} color_white`}>
								<Image width={300} height={600} alt="" src={OwnerInfo.ownerIMG} />
								<div className={styles.animation}>
									<p className={`${styles.para} `}>
										{OwnerInfo.Name} {OwnerInfo.position}
									</p>
									<Image width={50} height={50} src={OwnerInfo.button} alt=""></Image>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
