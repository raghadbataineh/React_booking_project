import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


export default function Category() {
	// const [APIData, setAPIData] = useState([]);
	// useEffect(() => {
	// 	axios
	// 		.get("https://651d8b9844e393af2d59fb79.mockapi.io/movies")
	// 		.then((response) => {
	// 			setAPIData(response.data);
	// 		});
	// }, []);
	// const getData = () => {
	// 	axios
	// 		.get(`https://651d8b9844e393af2d59fb79.mockapi.io/movies`)
	// 		.then((getData) => {
	// 			setAPIData(getData.data);
	// 		});
	// };
	return (
		<div className="container section">
			<div className="row">
				<div className="col-sm-12" id="afterHeader">
					<h2>Categories</h2>
					{/* {APIData.map((data) => {
						return (
							<div className="movie-slide col-md-4">
								<div className="movie-poster">
									<a href="#">
										<img
											src={data.image}
											alt="Movie title"
											style={{ height: '400px' }}
										/>
									</a>
								</div>
								<h4 style={{ marginLeft: '10px', marginTop: '10px', fontWeight: 'bold' }} className="no-underline">{data.name}</h4>
								<button className='btn btn-primary'>View More</button>
							</div>
						);
					})} */}
				</div>
			</div>
		</div>
	)
}