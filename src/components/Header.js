// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/img/logo.png";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// IMAGES //
import Arrow from "@/../public/img/icons/arrow.svg";

// DATA //

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/** Function to toggle dropdown */
	const toggleDropdown = (dropdownKey) => {
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey
		);
	};

	return (
		<div
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			}  `}
		>
			<div className="container ">
				<div className={`${styles.header_inside} container-fluid`}>
					{/* Logo wrap */}

					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`}>
						{/* Add "has_dropdown" class if your link has dropdown */}

						<div className={styles.link_title}>
							<p>About Us</p>
						</div>
						{/* Dropdown is opened when link is clicked */}
					</div>
					<div
						className={`${styles.links} ${styles.has_dropdown} ${
							openDropdown === "blogs" ? styles.dropdown_opened : ""
						} dropdown`}
						onClick={() => toggleDropdown("blogs")}
					>
						<div className={styles.link_title}>
							<p>Ticket & Merchandise</p>
						</div>
						{/* Dropdown is opened when link is clicked */}
					</div>

					<div className={styles.links}>
						<Link href="">
							<div className={styles.link_title}>Gallary</div>
						</Link>
					</div>
					<Link href="/">
						<div className={styles.image_wrap}>
							<Image src={Logo} alt="Logo" />
						</div>
					</Link>
					<div className={styles.links}>
						<Link href="">
							<div className={styles.link_title}>Community</div>
						</Link>
					</div>
					<div className={styles.links}>
						<Link href="">
							<div className={styles.link_title}>Owners</div>
						</Link>
					</div>
					<div className={styles.links}>
						<Link href="">
							<div className={styles.link_title}>Get in Touch</div>
						</Link>
					</div>
				</div>

				{/* Hamburger icon visible in mobile only */}
				<div className={styles.hamburger_icon} onClick={toggleSidebar}>
					<span className={styles.hamburger_line}></span>
					<span className={styles.hamburger_line}></span>
					<span className={styles.hamburger_line}></span>
				</div>
			</div>
		</div>
	);
}
