import React from 'react'

const Hero = () => {
  return (
    <div id="content_hero" style={{backgroundimage: 'url("http://via.placeholder.com/1440x435")'}}>
				
    <img src="images/scroll-arrow.svg" alt="Scroll down" class="scroll" />

  
    <div class="container">
        <div class="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
            <div class="col-md-9">
                <span class="title">Action, Adventure, Sci-Fi</span>
                <h1>Transformers: The Last Knight</h1>
                <p>Humans and Transformers are at war, Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.</p>
                <div class="buttons">
                    <span class="certificate">
                        PG
                    </span>
                    <a href="https://youtu.be/ScMzIvxBSi4" data-vbtype="video" class="venobox btn btn-default">
                        <i class="material-icons">play_arrow</i>
                        <span>Play trailer</span>
                    </a>
                    <div class="star-rating">
                        <i class="material-icons">star_rate</i>
                        <i class="material-icons">star_rate</i>
                        <i class="material-icons">star_rate</i>
                        <i class="material-icons">star_rate</i>
                        <i class="material-icons">star_rate</i>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default Hero
