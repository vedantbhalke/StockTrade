import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5 " id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="#" onClick={(e) => e.preventDefault()}>Track Tickets</a>
            </div>
            <div className="row p-2 m-3 justify-content-between">
                <div className="col-6 p-3">
                    <h1 className="fs-3">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input placeholder="Eg. how do I activate F&O" />
                    <br />
                    <div className="row">
                        <div className="col-4">
                            <a href="#" onClick={(e) => e.preventDefault()}>Track account opening</a>
                        </div>
                        <div className="col-4">
                            <a href="#" onClick={(e) => e.preventDefault()}>Track segment activation</a>
                        </div>
                        <div className="col-4">
                            <a href="#" onClick={(e) => e.preventDefault()}>Intraday margins</a>
                        </div>

                        <div className="col-4 mt-2">
                            <a href="#" onClick={(e) => e.preventDefault()}>Kite user manual</a>
                        </div>
                    </div>
                </div>
                <div className="col-5 p-3">
                    <h1 className="fs-3" id="i">Featured</h1>
                    <ol>
                        <li>
                            <a href="#" onClick={(e) => e.preventDefault()}>Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => e.preventDefault()}>Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;