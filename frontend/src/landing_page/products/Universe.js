import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>Our Investment Ecosystem</h1>

                <p>
                    Expand your investing experience with our integrated financial tools and partner platforms
                </p>

                <div className="col-4 p-3 mt-5">
                    <img src="models/smallcaseLogo.png" />
                    <p className="text-small text-muted">
                        Automated portfolio investing platform
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="models/smallcaseLogo.png" />
                    <p className="text-small text-muted">
                        Advanced market research tools
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="models/smallcaseLogo.png" />
                    <p className="text-small text-muted">
                        Retirement and wealth planning
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="models/smallcaseLogo.png" />
                    <p className="text-small text-muted">
                        ETF and mutual fund investing
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="models/smallcaselogo.png" />
                    <p className="text-small text-muted">
                        Financial news and market insights
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="models/smallcaseLogo.png" />
                    <p className="text-small text-muted">
                        Smart portfolio analytics
                    </p>
                </div>
                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;