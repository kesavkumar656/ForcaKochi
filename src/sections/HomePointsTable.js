// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //
import Image from "next/image";
// STYLES //
import styles from "@/styles/sections/HomePointsTable.module.scss";

// IMAGES //

// DATA //

/** HomePointsTable Section */
export default function HomePointsTable() {
	const tableData = [
		{
			no: "1",
			ClubName: "Forca KochI fc",

			Img: "/img/HomePointsTable/forca.png",
			P: "2",
			D: "1",
			L: "0",
			GF: "4",
			GA: "1",
			W: "1",
			GD: "+3",
			PTS: "4",
		},
		{
			no: "2",
			Img: "/img/HomePointsTable/calicut.png",
			ClubName: "Calicut Football Club",

			P: "2",
			D: "1",
			L: "0",
			GF: "4",
			W: "1",
			GA: "1",
			GD: "+3",
			PTS: "4",
		},
		{
			no: "3",
			Img: "/img/HomePointsTable/kannur.png",
			ClubName: "Kannur Squad FC",

			P: "2",
			D: "1",
			L: "0",
			GF: "4",
			GA: "1",
			GD: "+3",
			W: "1",
			PTS: "4",
		},
		{
			no: "4",
			Img: "/img/HomePointsTable/malappuram.png",
			ClubName: "Thiruvanthapuram kombans fc",

			P: "2",
			D: "1",
			L: "0",
			GF: "4",
			GA: "1",
			GD: "+3",
			PTS: "4",
			W: "1",
		},
		{
			no: "5",
			Img: "/img/HomePointsTable/kombans.png",
			ClubName: "Malappuram FC",

			P: "2",
			D: "1",
			L: "0",
			W: "1",
			GF: "4",
			GA: "1",
			GD: "+3",
			PTS: "4",
		},
		{
			no: "6",
			ClubName: "Thrissur Roar FC",

			Img: "/img/HomePointsTable/thrissur.png",
			P: "2",
			D: "1",
			W: "1",
			L: "0",
			GF: "4",
			GA: "1",
			GD: "+3",
			PTS: "4",
		},
	];
	return (
		<section className={`${styles.HomePointsTable} section_spacing bg_primary`}>
			<div className="container  text_uppercase">
				<div>
					<h1 className="text_center text_lg text_uppercase font_primary  color_secondary text_700">
						Points table
					</h1>
				</div>

				<div className="table-container">
					<table>
						<tbody>
							<tr className={`${styles.heading} `}>
								<th>Pos</th>
								<th></th>
								<th className={styles.HeadingTeam}>Team</th>
								<th>P</th>
								<th>W</th>
								<th>D</th>
								<th>L</th>
								<th>GF</th>
								<th>GA</th>
								<th>GD</th>
								<th>PTS</th>
							</tr>
						</tbody>

						<tbody>
							{tableData.map((data, index) => (
								<tr key={index} className={`${styles.TableData}`}>
									<td className={styles.no} data-label="Pos">
										{data.no}
									</td>
									<td data-label="Team">
										<Image
											className={styles.ClubImage}
											width={100}
											height={60}
											src={data.Img}
											alt=""
										/>
									</td>
									<td className={`${styles.ClubName} `}>
										<p>{data.ClubName}</p>
									</td>
									<td className={styles.points} data-label="P">
										{data.P}
									</td>
									<td className={styles.points} data-label="W">
										{data.W}
									</td>
									<td className={styles.points} data-label="D">
										{data.D}
									</td>
									<td className={styles.points} data-label="L">
										{data.L}
									</td>
									<td className={styles.points} data-label="GF">
										{data.GF}
									</td>
									<td className={styles.points} data-label="GA">
										{data.GA}
									</td>
									<td className={styles.points} data-label="GD">
										{data.GD}
									</td>
									<td className={styles.points} data-label="PTS">
										{data.PTS}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}
