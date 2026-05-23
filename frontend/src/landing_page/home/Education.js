import React from "react";

function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="models/education.svg" alt='logo' style={{ width: "70%" }} />
                </div>
                <div className="col-6">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p>
                        A complete learning platform for U.S. stock markets covering everything from investing basics to advanced trading strategies.
                    </p>
                    <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none" }}>
                        Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <p className="mt-5">
                        A community-driven Q&A platform where traders and investors can ask questions, share insights, and discuss market trends in real time.
                    </p>
                    <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none" }}>
                        TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;