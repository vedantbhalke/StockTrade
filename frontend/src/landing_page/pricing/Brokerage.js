import React from "react";

function Brokerage() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8 p-4">
                    <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none" }}>
                        <h3 className="fs-5">Trading fee calculator</h3>
                    </a>

                    <ul
                        style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
                        className="text-muted"
                    >
                        <li>
                            Assisted broker trades and advanced order support may include
                            additional service fees per executed order.
                        </li>

                        <li>
                            Digital trade confirmations and account statements will be
                            delivered electronically via email.
                        </li>

                        <li>
                            Physical copies of account statements or trade confirmations may
                            incur mailing and processing charges.
                        </li>

                        <li>
                            International and non-U.S. resident accounts may be subject to
                            additional regulatory and transaction fees.
                        </li>

                        <li>
                            Margin trading and options trading are subject to approval and may
                            involve additional risks and borrowing costs.
                        </li>

                        <li>
                            Accounts with unsettled balances, margin deficiencies, or special
                            handling requirements may incur additional trading fees.
                        </li>
                    </ul>
                </div>

                <div className="col-4 p-4">
                    <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none" }}>
                        <h3 className="fs-5">View full pricing details</h3>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;