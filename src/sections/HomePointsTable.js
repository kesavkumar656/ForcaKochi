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
							<tr key={index}>
								<td>{data.no}</td>
								<td><Image width={50} height={50}  src={data.Img} alt=""/> </td>
								<td>{data.P}</td>
								<td>{data.D}</td>
								<td>{data.L}</td>
								<td>{data.GF}</td>
								<td>{data.GA}</td>
								<td>{data.GD}</td>
								<td>{data.PTS}</td>
							</tr>
						))}

						{/* <tr>
							<td>cell1_2</td>
							<td>cell2_2</td>
							<td>cell3_2</td>
							<td>cell4_2</td>
							<td>cell5_2</td>
							<td>cell6_2</td>
							<td>cell7_2</td>
							<td>cell8_2</td>
							<td>cell9_2</td>
							<td>cell10_2</td>
						</tr>
						<tr>
							<td>cell1_3</td>
							<td>cell2_3</td>
							<td>cell3_3</td>
							<td>cell4_3</td>
							<td>cell5_3</td>
							<td>cell6_3</td>
							<td>cell7_3</td>
							<td>cell8_3</td>
							<td>cell9_3</td>
							<td>cell10_3</td>
						</tr>
						<tr>
							<td>cell1_4</td>
							<td>cell2_4</td>
							<td>cell3_4</td>
							<td>cell4_4</td>
							<td>cell5_4</td>
							<td>cell6_4</td>
							<td>cell7_4</td>
							<td>cell8_4</td>
							<td>cell9_4</td>
							<td>cell10_4</td>
						</tr>
						<tr>
							<td>cell1_5</td>
							<td>cell2_5</td>
							<td>cell3_5</td>
							<td>cell4_5</td>
							<td>cell5_5</td>
							<td>cell6_5</td>
							<td>cell7_5</td>
							<td>cell8_5</td>
							<td>cell9_5</td>
							<td>cell10_5</td>
						</tr>
						<tr>
							<td>cell1_6</td>
							<td>cell2_6</td>
							<td>cell3_6</td>
							<td>cell4_6</td>
							<td>cell5_6</td>
							<td>cell6_6</td>
							<td>cell7_6</td>
							<td>cell8_6</td>
							<td>cell9_6</td>
							<td>cell10_6</td>
						</tr> */}
					</tbody>
				</table>
			</div>
		</section>
	);
}
