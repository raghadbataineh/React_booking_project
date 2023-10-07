import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
	const [movies, setMovies] = useState([]);
	const { id } = useParams();
	const { typeid } = useParams();
	useEffect(() => {
		axios
			.get(`https://651d8b9844e393af2d59fb79.mockapi.io/types/${typeid}/movies/${id}`)
			.then((response) => {
				setMovies(response.data);

				// Extract unique showtime days from movie data
				// const uniqueDays = Array.from(
				// 	new Set(
				// 		response.data.flatMap((movie) =>
				// 			movie.showtimes.map((showtime) => showtime.day)
				// 		)
				// 	)
				// );
				//setAvailableDays(uniqueDays);
				//setSelectedDay(uniqueDays[0] || ''); // Set the initial day to the first available day
			});
	}, [id]);
	return (
		<div class="container section single-movie">
			<div class="row">
				<div class="col-sm-7">
					<h2>Synopsis</h2>
					<div class="row">
						<div class="col-sm-5">
							<img src={movies.image} alt="Transformers: The Last Knight" class="poster" />
						</div>
						<div class="col-sm-7">
							<h3 class="no-underline">{movies.name}</h3>
							<p>{movies.description}</p>
							<ul class="movie-info">
								<li><i>Director</i> Michael Bay</li>
								<li><i>Starring</i> Mark Wahlberg, Anthony Hopkins</li>
								<li><i>Release date</i> 23 June 2017</li>
								<li><i>Running time</i> 114 mins</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-sm-4 col-sm-push-1">
					<h2>Viewing times</h2>
					<ul class="show-times">
						<li><i>Monday</i> <span class="time past">13:00</span> <span class="time">16:00</span> <span class="time">19:30</span> <span class="time">22:00</span></li>
						<li><i>Tuesday</i> <span class="time past">13:00</span> <span class="time">15:30</span> <span class="time">19:30</span> <span class="time">22:00</span></li>
						<li class="today"><i>Today</i> <span class="time past">12:00</span> <span class="time">16:00</span> <span class="time">19:30</span> <span class="time">22:00</span></li>
						<li><i>Thursday</i> <span class="time past">13:00</span> <span class="time">16:00</span> <span class="time">20:15</span> <span class="time">22:00</span></li>
						<li><i>Friday</i> <span class="time past">13:00</span> <span class="time">14:45</span> <span class="time">19:30</span> <span class="time">22:00</span></li>
						<li><i>Saturday</i> <span class="time past">14:15</span> <span class="time">16:00</span> <span class="time">19:30</span> <span class="time">22:00</span></li>
						<li><i>Sunday</i> <span class="time past">13:00</span> <span class="time">16:00</span> <span class="time">19:30</span> <span class="time">22:20</span></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default MovieDetails
