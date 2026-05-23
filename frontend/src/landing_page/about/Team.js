import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center">Leadership</h1>
            </div>

            <div
                className="row p-3 text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-3 text-center">
                    <img
                        src="models/CharlesSchwab.png"
                        style={{ borderRadius: "100%", width: "50%" }}
                        alt="Charles Schwab"
                    />

                    <h4 className="mt-5">Charles R. Schwab</h4>
                    <h6>Founder & Chairman</h6>
                </div>

                <div className="col-6 p-3">
                    <p>
                        Charles R. Schwab founded the company in 1971 with the vision of
                        making investing more accessible, transparent, and affordable for
                        everyday investors across the United States.
                    </p>

                    <p>
                        Under his leadership, the company helped transform the brokerage
                        industry through innovation, investor-first services, and modern
                        financial technology platforms.
                    </p>

                    <p>
                        His vision continues to shape the future of investing, retirement
                        planning, and wealth management for millions of investors.
                    </p>

                    <p>
                        Connect on <a href="">Homepage</a> / <a href="">LinkedIn</a> /{" "}
                        <a href="">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;