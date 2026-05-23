import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [liveStocks, setLiveStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/allPositions`).then((res) => {
      setAllPositions(res.data);
      setLoading(false);
    });
  }, [API_URL]);

  useEffect(() => {
    if (allPositions.length === 0) return;

    const fetchLivePrices = async () => {
      try {
        const symbols = allPositions.map(stock => stock.name);
        const promises = symbols.map(symbol =>
          fetch(`${API_URL}/api/stocks/quote/${symbol}`).then(res => res.json())
        );

        const results = await Promise.all(promises);

        const liveData = results.map(stock => ({
          name: stock.symbol,
          price: stock.regularMarketPrice,
          change: stock.regularMarketChange,
          changePercent: `${stock.regularMarketChangePercent?.toFixed(2)}%`,
          isDown: stock.regularMarketChange < 0,
        }));

        setLiveStocks(liveData);
      } catch (error) {
        console.error('Error fetching live prices:', error);
      }
    };

    fetchLivePrices();
    const interval = setInterval(fetchLivePrices, 5000);
    return () => clearInterval(interval);
  }, [allPositions, API_URL]);

  const updatedPositions = allPositions.map((stock) => {
    const live = liveStocks.find((s) => s.name === stock.name);

    if (!live) return stock;

    const currentPrice = live.price;
    const currentValue = currentPrice * stock.qty;
    const investedValue = stock.avg * stock.qty;
    const pnl = currentValue - investedValue;

    return {
      ...stock,
      price: currentPrice,
      changePercent: live.changePercent,
      isLoss: live.isDown,
      pnl: pnl,
    };
  });

  if (loading) return <div>Loading positions...</div>;

  return (
    <>
      <h3 className="title">Positions ({updatedPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {updatedPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnlValue = curValue - stock.avg * stock.qty;
              const isProfit = pnlValue >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>${stock.avg.toFixed(2)}</td>
                  <td>${stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    ${pnlValue.toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.changePercent}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;