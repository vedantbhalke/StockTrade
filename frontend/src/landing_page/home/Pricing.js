import React from "react";

function Pricing() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>
                        We pioneered commission-free investing and transparent pricing in U.S. markets. No hidden fees — just clear, straightforward costs for every investor.
                    </p>
                    <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none" }}>
                        See Pricing{" "}
                        <i class="fa fa-long-arrow-right" alt='logo' aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-2"></div>
                <div className="col-6  mb-5">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className="mb-3">$0</h1>
                            <p>
                                Commission-free stock & ETF trades
                                <br />
                                Direct mutual funds and long-term investing
                            </p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className="mb-3">$20</h1>
                            <p>Per options and intraday trade
                                Advanced trading orders and derivatives access</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;