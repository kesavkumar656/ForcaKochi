// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import HomeHero from "@/sections/HomeHero";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";
import HomeAbout from "../src/sections/HomeAbout";
import HomeSuperLeague from "../src/sections/HomeSuperLeague";
import HomePowerHouse from "../src/sections/HomePowerHouse";
import HomeUpcomingMatches from "../src/sections/HomeUpcomingMatches";
import HomePointsTable from "../src/sections/HomePointsTable";
import HomeBroadCast from "../src/sections/HomeBroadCast";
import HomeKochiMoment from "../src/sections/HomeKochiMoment";
import HomeStayHooked from "../src/sections/HomeStayHooked";
import HomeDrivingForce from "../src/sections/HomeDrivingForce";
import HomeContactUs from "../src/sections/HomeContactUs";
import HomeSponsors from "../src/sections/HomeSponsors";
// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Forca Kochi"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage} 	 `}>
				{/* <HomeHero></HomeHero>
				<HomeAbout></HomeAbout>
				<HomeSuperLeague></HomeSuperLeague>
				<HomeUpcomingMatches></HomeUpcomingMatches>
				<HomePowerHouse></HomePowerHouse>
				<HomePointsTable></HomePointsTable> */}
				<HomeBroadCast></HomeBroadCast>
				{/* <HomeKochiMoment></HomeKochiMoment>
				<HomeStayHooked></HomeStayHooked>
				<HomeDrivingForce></HomeDrivingForce>
				<HomeContactUs></HomeContactUs>
				<HomeSponsors></HomeSponsors> */}
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
