import React from 'react'

const MovieDetails = () => {
  return (
    <div class="container section single-movie">
				<div class="row">
					<div class="col-sm-7">
						<h2>Synopsis</h2>
						<div class="row">
							<div class="col-sm-5">
								<img src="http://via.placeholder.com/265x340" alt="Transformers: The Last Knight" class="poster"/>
								<div class="share">
									<a href="#">
										<i class="fa fa-facebook"></i>
									</a>
									<a href="#">
										<i class="fa fa-twitter"></i>
									</a>
									<a href="#">
										<i class="fa fa-pinterest"></i>
									</a>
									<a href="#">
										<i class="fa fa-google-plus"></i>
									</a>
								</div>
							</div>
							<div class="col-sm-7">
								<h3 class="no-underline">The plot</h3>
								<p>Humans and Transformers are at war, Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.</p>

								<p>Optimus Prime finds his home planet, Cybertron, now a dead planet, in which he comes to find he was responsible for killing. He finds a way to bring the planet back to life, but in order to do so, he needs to find an artifact, which is on Earth.</p>

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
