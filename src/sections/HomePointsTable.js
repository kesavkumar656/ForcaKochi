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
			Img: "/img/HomePointsTable/forca.png",
			P: "2",
			D: "1",
			L: "0",
			GF: "4",
			GA: "1",
			GD: "+3",
			PTS: "4",
		},
		{
			no: "2",
			Img: "/img/HomePointsTable/calicut.png",

			P: "2",
			D: "1",
			L: "0",
			GF: "4",
			GA: "1",
			GD: "+3",
			PTS: "4",
		},
		{
			no: "3",
			Img: "/img/HomePointsTable/kannur.png",

			P: "2",
			D: "1",
			L: "0",
			GF: "4",
			GA: "1",
			GD: "+3",
			PTS: "4",
		},
		{
			no: "4",
			Img: "/img/HomePointsTable/malappuram.png",

			P: "2",
			D: "1",
			L: "0",
			GF: "4",
			GA: "1",
			GD: "+3",
			PTS: "4",
		},
		{
			no: "5",
			Img: "/img/HomePointsTable/kombans.png",

			P: "2",
			D: "1",
			L: "0",
			GF: "4",
			GA: "1",
			GD: "+3",
			PTS: "4",
		},
		{
			no: "6",
			Img: "/img/HomePointsTable/thrissur.png",

			P: "2",
			D: "1",
			L: "0",
			GF: "4",
			GA: "1",
			GD: "+3",
			PTS: "4",
		},
	];
	return (
		<section className={styles.HomePointsTable}>
			<div className="container section_spacing text_uppercase font_secondary">
				<table className={`${styles.blueTable}`}>
					<thead>
						<tr>
							<th>Pos</th>
							<th>Team</th>
							<th>P</th>
							<th>W</th>
							<th>D</th>
							<th>L</th>
							<th>GF</th>
							<th>GA</th>
							<th>GD</th>
							<th>PTS</th>
						</tr>
					</thead>

					<tbody>
						{tableData.map((data, index) => (
							<tr key={index} className={`${styles.TableData } `}>
								<td>{data.no}</td>
								<td>
									<Image width={60} height={60} src={data.Img} alt="" />{" "}
								</td>
								<td>{data.P}</td>
								<td>{data.D}</td>
								<td>{data.L}</td>
								<td>{data.GF}</td>
								<td>{data.GA}</td>
								<td>{data.GD}</td>
								<td>{data.PTS}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
