import React, { useState, useEffect } from "react";
import Menu from "./Menu";

const TopBar = () => {
  const [indices, setIndices] = useState({
    sp500: { price: 0, change: 0, changePercent: 0 },
    dowJones: { price: 0, change: 0, changePercent: 0 },
  });

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchIndices = async () => {
      try {
        const sp500Response = await fetch(`${API_URL}/api/stocks/quote/^GSPC`);
        const sp500Data = await sp500Response.json();

        const dowResponse = await fetch(`${API_URL}/api/stocks/quote/^DJI`);
        const dowData = await dowResponse.json();

        setIndices({
          sp500: {
            price: sp500Data.regularMarketPrice,
            change: sp500Data.regularMarketChange,
            changePercent: sp500Data.regularMarketChangePercent,
          },
          dowJones: {
            price: dowData.regularMarketPrice,
            change: dowData.regularMarketChange,
            changePercent: dowData.regularMarketChangePercent,
          },
        });
      } catch (error) {
        console.error('Error fetching indices:', error);
      }
    };

    fetchIndices();
    const interval = setInterval(fetchIndices, 10000);
    return () => clearInterval(interval);
  }, [API_URL]);

  const isPositive = (change) => change >= 0;

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">S&P 500</p>
          <p className="index-points">{indices.sp500.price.toFixed(2)}</p>
          <p className={`percent ${isPositive(indices.sp500.change) ? 'profit' : 'loss'}`}>
            {isPositive(indices.sp500.change) ? '+' : ''}
            {indices.sp500.changePercent?.toFixed(2)}%
          </p>
        </div>

        <div className="sensex">
          <p className="index">DOW JONES</p>
          <p className="index-points">{indices.dowJones.price.toFixed(2)}</p>
          <p className={`percent ${isPositive(indices.dowJones.change) ? 'profit' : 'loss'}`}>
            {isPositive(indices.dowJones.change) ? '+' : ''}
            {indices.dowJones.changePercent?.toFixed(2)}%
          </p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;