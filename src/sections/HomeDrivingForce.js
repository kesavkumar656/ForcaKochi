// MODULES //

// COMPONENTS //

import background from "@/../../public/img/HomeDrivingForce/background.png";
import Button from "../components/Buttons/Button";
// SECTIONS //
// PLUGINS //
import Image from "next/image";

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeDrivingForce.module.scss";

// IMAGES //
import buttonImg from "@/../../public/img/HomeDrivingForce/plusButton.png";
import { useState } from "react";
// DATA //

/** HomeDrivingForce Section */
export default function HomeDrivingForce() {
	const [activeCard, setActiveCard] = useState(null);

	// eslint-disable-next-line require-jsdoc
	const handlePopup = (index) => {
		setActiveCard(activeCard === index ? null : index);
	};

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
						<Image className={`${styles.background}`} src={background} alt="" />
					</div>
					<h1
						className={`${styles.heading} color_secondary font_primary text_center text_xl text_uppercase text_700`}
					>
						Meet the driving force of Kochi
					</h1>

					<div className={`${styles.OwnerInfo}`}>
						{Data.map((OwnerInfo, index) => (
							<div key={index} className={`${styles.MapDiv} color_white`}>
								<div
									className={`${styles.wrapper} ${
										activeCard === index ? styles.active : styles.inactive
									}`}
								>
									<div className={`${styles.card}`}>
										<Image
											className={`${styles.Image}`}
											width={300}
											height={600}
											alt=""
											src={OwnerInfo.ownerIMG}
										/>
										<div className={styles.animation}>
											<p className={`${styles.para}`}>
												{OwnerInfo.Name} {OwnerInfo.position}
											</p>

											<button onClick={() => handlePopup(index)}>
												<Image src={buttonImg} width={30} alt="" height={30} />
											</button>
										</div>
									</div>

									<p
										className={`${
											activeCard === index ? styles.active : styles.inactive
										} color_primary`}
									>
										Sumant Bahl started his career in 1994 as part of the pioneering team
										of Pay TV distribution in India. He was an integral part of the
										transformational journey of Indian television with the launch of major
										channels, including Star Movies, Zee Cinema and Star World. Following
										this, he joined Time Warner and was involved in the launch of HBO and
										Cartoon Network channels in India. In 2004, Mr Bahl moved to the UK as
										Head of Distribution & Marketing for Zee Europe. Mr Bahl began his
										entrepreneurial journey in 2008 by setting up a TV Media consultancy,
										and an advertising agency specialising in marketing Ethnic Asian
										brands in the UK. In 2015 Sumant Bahl along with Jaspal Bahra founded
										Grace Entertainment which has orchestrated several mega shows in the
										UK, Europe, New Zealand, and Australia.
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

/** HomeDrivingForce Section */
// export default function HomeDrivingForce() {
// 	const [PopUpMenu, setPopUpMenu] = useState(false);

// 	// eslint-disable-next-line require-jsdoc
// 	const handlePopup = () => {
// 		setPopUpMenu(!PopUpMenu);
// 	};
// 	const Data = [
// 		{
// 			ownerIMG: "/img/HomeDrivingForce/Actor1.png",
// 			Name: "Prithviraj Sukumaran, ",
// 			position: "Owner",
// 			button: "/img/HomeDrivingForce/plusButton.png",
// 		},
// 		{
// 			ownerIMG: "/img/HomeDrivingForce/Actor2.png",
// 			Name: "Shameem Backer C K, ",
// 			position: "Owner",
// 			button: "/img/HomeDrivingForce/plusButton.png",
// 		},
// 		{
// 			ownerIMG: "/img/HomeDrivingForce/Actor3.png",
// 			Name: "Mohammed Shyjal,  ",
// 			position: "Owner",
// 			button: "/img/HomeDrivingForce/plusButton.png",
// 		},
// 		{
// 			ownerIMG: "/img/HomeDrivingForce/Actor4.png",
// 			Name: "Supriya Menon, ",
// 			position: "Owner",
// 			button: "/img/HomeDrivingForce/plusButton.png",
// 		},
// 	];
// 	return (
// 		<section className={`${styles.HomeDrivingForce}`}>
// 			<div className="container ">
// 				<div className={`${styles.Wrapper}`}>
// 					<div className="next_cover_image objectFitCover">
// 						<Image
// 							className={`${styles.background} `}
// 							src={background}
// 							alt=""
// 						></Image>
// 					</div>
// 					<h1
// 						className={`${styles.heading} color_secondary font_primary text_center text_xl text_uppercase text_700`}
// 					>
// 						Meet the driving force of Kochi
// 					</h1>

// 					<div className={`${styles.OwnerInfo}`}>
// 						{Data.map((OwnerInfo, index) => (
// 							<div key={index} className={`${styles.MapDiv} color_white`}>
// 								<div className={`${styles.wrapper}`}>
// 									<div className={`${styles.card}`}>
// 										<Image
// 											className={`${styles.Image}`}
// 											width={300}
// 											height={600}
// 											alt=""
// 											src={OwnerInfo.ownerIMG}
// 										/>
// 										<div className={styles.animation}>
// 											<p className={`${styles.para} `}>
// 												{OwnerInfo.Name} {OwnerInfo.position}
// 											</p>

// 											<button onClick={handlePopup}>
// 												<Image src={buttonImg} width={30} alt="" height={30}></Image>
// 											</button>
// 										</div>
// 									</div>

// 									<p className={`${styles.AboutInfo ? styles.active : styles.inactive}`}>
// 										Sumant Bahl started his career in 1994 as part of the pioneering team
// 										of Pay TV distribution in India. He was an integral part of the
// 										transformational journey of Indian television with the launch of major
// 										channels, including Star Movies, Zee Cinema and Star World. Following
// 										this, he joined Time Warner and was involved in the launch of HBO and
// 										Cartoon Network channels in India. In 2004, Mr Bahl moved to the UK as
// 										Head of Distribution & Marketing for Zee Europe. Mr Bahl began his
// 										entrepreneurial journey in 2008 by setting up a TV Media consultancy,
// 										and an advertising agency specialising in marketing Ethnic Asian
// 										brands in the UK. In 2015 Sumant Bahl along with Jaspal Bahra founded
// 										Grace Entertainment which has orchestrated several mega shows in the
// 										UK, Europe, New Zealand, and Australia.
// 									</p>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
