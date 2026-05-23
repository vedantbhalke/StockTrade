import React from "react";

function Hero() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
                <h1>Pricing</h1>

                <h3 className="text-muted mt-3 fs-5">
                    Commission-free investing and low-cost options trading for modern investors
                </h3>
            </div>

            <div className="row p-5 mt-5 text-center">

                <div className="col-12 col-md-4 p-4 d-flex flex-column align-items-center">
                    <img src="models/twentyimage.png" className="img-fluid mb-3" style={{ width: "80px", height: "80px", objectFit: "contain" }} />

                    <h1 className="fs-3">Commission-free investing</h1>

                    <p className="text-muted">
                        Invest in U.S. stocks and ETFs with $0 commission trading and no hidden account fees.
                    </p>
                </div>

                <div className="col-12 col-md-4 p-4 d-flex flex-column align-items-center">
                    <img src="models/zeroimage.png" alt='logo' className="img-fluid mb-3" style={{ width: "100px", height: "82px", objectFit: "contain" }} />

                    <h1 className="fs-3">Options & active trading</h1>

                    <p className="text-muted">
                        Competitive pricing for options and advanced trading tools designed for active investors and traders.
                    </p>
                </div>

                <div className="col-12 col-md-4 p-4 d-flex flex-column align-items-center">
                    <img src="models/twentyimage.png" alt='logo' className="img-fluid mb-3" style={{ width: "80px", height: "80px", objectFit: "contain" }} />

                    <h1 className="fs-3">Retirement & mutual funds</h1>

                    <p className="text-muted">
                        Build long-term wealth with retirement accounts, mutual funds, and diversified investment portfolios.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Hero;