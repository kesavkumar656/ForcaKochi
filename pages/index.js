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

// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage} bg_primary`}>
				<HomeHero></HomeHero>
				<HomeAbout className="container-fluid section_spacing"></HomeAbout>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
