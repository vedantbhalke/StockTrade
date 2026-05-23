import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [liveStocks, setLiveStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/allHoldings`).then((res) => {
      setHoldings(res.data);
      setLoading(false);
    });
  }, [API_URL]);

  useEffect(() => {
    if (holdings.length === 0) return;

    const fetchLivePrices = async () => {
      try {
        const symbols = holdings.map(stock => stock.name);
        const promises = symbols.map(symbol =>
          fetch(`${API_URL}/api/stocks/quote/${symbol}`).then(res => res.json())
        );

        const results = await Promise.all(promises);

        const liveData = results.map(stock => ({
          name: stock.symbol,
          price: stock.regularMarketPrice,
        }));

        setLiveStocks(liveData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchLivePrices();
    const interval = setInterval(fetchLivePrices, 5000);
    return () => clearInterval(interval);
  }, [holdings, API_URL]);

  const totalInvestment = holdings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = holdings.reduce((sum, stock) => {
    const live = liveStocks.find((s) => s.name === stock.name);
    const price = live ? live.price : stock.price;
    return sum + price * stock.qty;
  }, 0);

  const pnl = currentValue - totalInvestment;
  const pnlPercent = totalInvestment > 0 ? ((pnl / totalInvestment) * 100).toFixed(2) : 0;
  const isProfitable = pnl >= 0;

  const marginAvailable = 3740;
  const marginsUsed = 0;
  const openingBalance = 3740;

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="username">
        <h6>Hi, VB!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>
        <div className="data">
          <div className="first">
            <h3>${(marginAvailable / 1000).toFixed(2)}k</h3>
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Margins used <span>${marginsUsed}</span>
            </p>
            <p>
              Opening balance <span>${(openingBalance / 1000).toFixed(2)}k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>
        <div className="data">
          <div className="first">
            <h3 className={isProfitable ? "profit" : "loss"}>
              ${(pnl / 1000).toFixed(2)}k{" "}
              <small>
                {isProfitable ? "+" : ""}
                {pnlPercent}%
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />
          <div className="second">
            <p>
              Current Value <span>${(currentValue / 1000).toFixed(2)}k</span>
            </p>
            <p>
              Investment <span>${(totalInvestment / 1000).toFixed(2)}k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;