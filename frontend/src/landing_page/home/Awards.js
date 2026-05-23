import React from 'react';
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="models/largestBroker.svg" alt='logo' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>One of America's leading stock trading platforms</h1>
                    <p className='mb-5'>Millions of investors trust our platform for trading stocks, ETFs, options, and building long-term wealth in the U.S. markets.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks & ETFs</p></li>
                                <li><p>Options Trading</p></li>
                                <li><p>Cryptocurrency Markets</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>IPO Investing</p></li>
                                <li><p>Mutual Funds</p></li>
                                <li><p>Bonds & Treasury Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="/models/stockbroker.png.avif" alt='logo' style={{ width: "70%", display: "block", margin: "auto" }}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;