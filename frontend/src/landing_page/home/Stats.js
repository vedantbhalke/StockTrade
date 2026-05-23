import React from "react";

function Stats() {
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">Trust built on transparency</h1>
                    <h2 className="fs-4">Client-first always</h2>
                    <p className="text-muted">
                        That's why millions of investors trust us to manage their wealth and long-term investments across U.S. markets.
                    </p>
                    <h2 className="fs-4">No noise, no gimmicks</h2>
                    <p className="text-muted">
                        No spam, no gamification, and no aggressive push notifications. Just a clean, professional investing experience built for serious investors.
                    </p>
                    <h2 className="fs-4">A complete investing ecosystem</h2>
                    <p className="text-muted">
                        More than just a trading app — access research tools, retirement accounts, ETFs, mutual funds, and financial insights all in one place.
                    </p>
                    <h2 className="fs-4">Invest better with confidence</h2>
                    <p className="text-muted">
                        We help you make smarter financial decisions with tools for long-term investing, risk management, and portfolio growth.
                    </p>
                </div>
                <div className="col-6 p-5">
                    <img src="models/ecosystem.png" style={{ width: "90%" }} />
                    <div className="text-center">
                        <a href="" className="mx-5" style={{ textDecoration: "none" }}>
                            Explore our products{" "}
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href="" style={{ textDecoration: "none" }}>
                            Try Kite demo{" "}
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;