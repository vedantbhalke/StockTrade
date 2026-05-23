import React from "react";

function Hero() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2 text-center">
                    We transformed investing in America with commission-free trading
                    <br />
                    and continue to innovate through modern financial technology.
                </h1>
            </div>

            <div
                className="row p-5 mt-5 border-top text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-5">
                    <p>
                        Our journey began in 1971 with the mission of making investing more
                        accessible, affordable, and transparent for everyday Americans. Built on
                        the belief that everyone deserves access to financial opportunities, our
                        platform focuses on removing barriers through technology-driven investing
                        solutions.
                    </p>

                    <p>
                        Today, our advanced trading platforms, powerful research tools, and
                        investor-first approach have helped us become one of the most recognized
                        brokerage platforms in the United States.
                    </p>

                    <p>
                        Millions of investors place trades and manage their portfolios every day
                        using our ecosystem of web and mobile investing applications, retirement
                        accounts, and wealth management services.
                    </p>
                </div>

                <div className="col-6 p-5">
                    <p>
                        In addition, we continue to invest heavily in investor education,
                        financial literacy, and long-term wealth building initiatives for modern
                        traders and investors.
                    </p>

                    <p>
                        Our technology-focused ecosystem supports innovation across trading,
                        banking, retirement planning, and portfolio management, helping investors
                        navigate U.S. financial markets with confidence.
                    </p>

                    <p>
                        Even today, we continue building new products and experiences designed to
                        improve investing for the next generation. Stay updated through our latest
                        announcements, educational content, and market insights.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;