import React from "react";
import banner1 from "../images/banner1.jpg"
import banner2 from "../images/banner2.jpg"
import banner3 from "../images/banner3.jpg"

import "./banner.css"

function Banner()
{
    return(
        <React.Fragment>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="Size" src={banner1} alt="First slide" />
                <div class="carousel-caption d-none d-md-block">
                    <h1>Get News</h1>
                    <p>"Stay Informed, Stay Ahead: Get the Latest News Updates Here!"</p>
                </div>
                </div>
                <div className="carousel-item">
                <img className="Size" src={banner2} alt="Second slide" />
                <div class="carousel-caption d-none d-md-block">
                    <h1>Your News</h1>
                    <p>"Crafting Realities: Your News, Your Voice"</p>
                </div>
                </div>
                <div className="carousel-item">
                <img className="Size" src={banner3} alt="Third slide" />
                <div class="carousel-caption d-none d-md-block">
                    <h1>Honest Insight</h1>
                    <p>"Truth Unveiled: Where Integrity Meets Information"</p>
                </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </React.Fragment>
    );
}

export default Banner;