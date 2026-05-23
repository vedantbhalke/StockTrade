import React from "react";

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
            <div className="container border-top mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <img src="models/logo.png" alt='logo' style={{ width: "40%" }} />
                        <p>
                            © 1971 - 2026, Not Charles Schwab Brokerage LLC. All rights reserved.
                        </p>
                    </div>
                    <div className="col">
                        <p>Accounts</p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Brokerage Accounts</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Retirement Accounts (IRAs)</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>401(k) Rollovers</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Banking & Checking Accounts</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Small Business Retirement Plans</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Zerodha.tech</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Press & media</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>More Account Types</a>
                        <br />
                    </div>
                    <div className="col">
                        <p>Investment Products</p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Stocks</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>ETFs (Exchange Traded Funds)</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Mutual Funds</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Bonds & Fixed Income</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Options Trading</a>
                        <br />
                    </div>
                    <div className="col">
                        <p>Trading & Platforms</p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Trading Platforms</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Mobile Trading Apps</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Options Trading</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Futures Trading</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Execution Quality</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Research & Tools</a>
                        <br />
                    </div>
                    <div className="col">
                        <p>About</p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Why Us</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Compare Platforms</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Pricing</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Careers</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>News & Media</a>
                        <br />
                        <a href="#" onClick={(e) => e.preventDefault()}>Corporate Responsibility</a>
                        <br />
                    </div>
                </div>
                <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
                    <p>
                        Please read the Schwab Intelligent Portfolios Solutions™ disclosure brochures for important information, pricing, and disclosures related to the Schwab Intelligent Portfolios and Schwab Intelligent Portfolios Premium programs.

                        Schwab Intelligent Portfolios® and Schwab Intelligent Portfolios Premium® are made available through Charles Schwab & Co. Inc. ("Schwab"), a dually registered investment advisor and broker dealer. Portfolio management services are provided by Charles Schwab Investment Management, Inc. ("CSIM"). Schwab and CSIM are subsidiaries of The Charles Schwab Corporation.

                        There is no advisory fee or commissions charged for Schwab Intelligent Portfolios. For Schwab Intelligent Portfolios Premium, there is an initial planning fee of $300 upon enrollment and a $30-per-month advisory fee charged on a quarterly basis as detailed in the Schwab Intelligent Portfolios Solutions™ disclosure brochures. Investors in Schwab Intelligent Portfolios and Schwab Intelligent Portfolios Premium (collectively, "Schwab Intelligent Portfolios Solutions") do pay direct and indirect costs. These include ETF operating expenses which are the management and other fees the underlying ETFs charge all shareholders. Schwab does not charge an advisory fee for the SIP Program in part because of the revenue Schwab Bank generates from the cash allocation (an indirect cost of the Program). The portfolios include a cash allocation to FDIC‐insured Deposit Accounts at Charles Schwab Bank, SSB ("Schwab Bank"). Schwab Bank earns income on the deposits, and earns more the larger the cash allocation. The lower the interest rate Schwab Bank pays on the cash, the lower the yield. Some cash alternatives outside of Schwab Intelligent Portfolios Solutions pay a higher yield. Schwab Intelligent Portfolios Solutions invests in Schwab ETFs. A Schwab affiliate, Charles Schwab Investment Management Inc., receives management fees on those ETFs. Schwab Intelligent Portfolios Solutions also invests in third-party ETFs. Schwab receives compensation from some of those ETFs for providing shareholder services, and also from market centers where ETF trade orders are routed for execution. Fees and expenses will lower performance, and investors should consider all program requirements and costs before investing. Expenses and their impact on performance, conflicts of interest, and compensation that Schwab and its affiliates receive are detailed in the Schwab Intelligent Portfolios Solutions disclosure brochures.


                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES
                        portal. Mandatory details for filing complaints on SCORES: Name,
                        SSN, Address, Mobile Number, E-mail ID. Benefits: Effective
                        Communication, Speedy redressal of the grievances
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read
                        all the related documents carefully before investing.
                    </p>

                    <p>
                        Schwab Asset Management® is the dba name for Charles Schwab Investment Management, Inc. (CSIM), the investment adviser for Schwab Funds and Schwab ETFs. Schwab Funds are distributed by Charles Schwab & Co., Inc. (Schwab) Member SIPC. Schwab ETFs are distributed by SEI Investments Distribution Co. (SIDCO). CSIM and Schwab are separate but affiliated companies and subsidiaries of The Charles Schwab Corporation, and are not affiliated with SIDCO.

                        *Schwab Network is brought to you by Charles Schwab Media Productions Company ("CSMPC"). CSMPC and Charles Schwab & Co., Inc. are separate but affiliated subsidiaries of The Charles Schwab Corporation. CSMPC is not a financial advisor, registered investment advisor, broker-dealer, or futures commissions merchant.

                        The Schwab Center for Financial Research is a division of Charles Schwab & Co., Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;