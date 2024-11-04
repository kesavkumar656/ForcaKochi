// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Image from "next/image";
// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeSponsors.module.scss";

// IMAGES //

// DATA //

/** HomeSponsors Section */
export default function HomeSponsors() {
	const AssociatePartnerData = [
		{
			associate: "/img/HomeSponsors/AssociatePartners/1.png",
		},
		{
			associate: "/img/HomeSponsors/AssociatePartners/2.png",
		},
	];
	const PrincipalPartnersData = [
		{ principal: "/img/HomeSponsors/PrincipalPartners/1.png" },
		{ principal: "/img/HomeSponsors/PrincipalPartners/2.png" },
	];
	const OfficialData = [
		{ official: "/img/HomeSponsors/OfficialSponsor/4.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/5.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/1.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/2.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/3.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/6.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/7.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/8.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/9.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/10.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/11.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/12.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/13.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/14.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/15.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/16.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/17.png" },
		{ official: "/img/HomeSponsors/OfficialSponsor/18.png" },
	];
	return (
		<section className={`${styles.HomeSponsors} section_spacing `}>
			<div className="container">
				<h1
					className={`${styles.heading} color_secondary text_500 text_md font_primary text_uppercase `}
				>
					Our Sponsors
				</h1>
				<p className={`${styles.wrapper} text_sm`}> Principal Partners</p>
				<div className={`${styles.PrincipalPartners}`}>
					{PrincipalPartnersData.map((logo, index) => (
						<div key={index} className={styles.PrincipalPartnersDiv}>
							<Image width={100} height={80} alt="" src={logo.principal}></Image>
						</div>
					))}
				</div>
				<p className={`${styles.wrapper} text_sm`}>Associate Partners</p>
				<div className={`${styles.AssociatePartners}`}>
					{AssociatePartnerData.map((logo, index) => (
						<div key={index} className={styles.AssociatePartnersDiv}>
							<Image alt="" width={100} height={80} src={logo.associate}></Image>
						</div>
					))}
				</div>
				<p className={`${styles.wrapper} text_sm`}>Official Partners</p>
				<div className={`${styles.OfficialPartner}`}>
					{OfficialData.map((logo, index) => (
						<div key={index} className={styles.OfficialPartnerDiv}>
							<Image width={100} height={80} alt="" src={logo.official}></Image>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
