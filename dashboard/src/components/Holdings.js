import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [liveStocks, setLiveStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/allHoldings`).then((res) => {
      setAllHoldings(res.data);
      setLoading(false);
    });
  }, [API_URL]);

  useEffect(() => {
    if (allHoldings.length === 0) return;

    const fetchLivePrices = async () => {
      try {
        const symbols = allHoldings.map(stock => stock.name);
        const promises = symbols.map(symbol =>
          fetch(`${API_URL}/api/stocks/quote/${symbol}`).then(res => res.json())
        );

        const results = await Promise.all(promises);

        const liveData = results.map(stock => ({
          name: stock.symbol,
          price: stock.regularMarketPrice,
          percent: `${stock.regularMarketChangePercent?.toFixed(2)}%`,
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
  }, [allHoldings, API_URL]);

  const updatedHoldings = allHoldings.map((stock) => {
    const live = liveStocks.find((s) => s.name === stock.name);

    if (!live) return stock;

    const currentPrice = live.price;
    const currentValue = currentPrice * stock.qty;
    const investedValue = stock.avg * stock.qty;
    const pnl = currentValue - investedValue;
    const netPercent = ((pnl / investedValue) * 100).toFixed(2);

    return {
      ...stock,
      price: currentPrice,
      percent: live.percent,
      isLoss: live.isDown,
      net: `${netPercent > 0 ? '+' : ''}${netPercent}%`,
      pnl: pnl,
      currentValue: currentValue,
    };
  });

  const labels = updatedHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Profit/Loss ($)",
        data: updatedHoldings.map((stock) => stock.pnl || 0),
        backgroundColor: updatedHoldings.map((stock) =>
          stock.pnl >= 0 ? "rgba(75, 192, 192, 0.6)" : "rgba(255, 99, 132, 0.6)"
        ),
        borderColor: updatedHoldings.map((stock) =>
          stock.pnl >= 0 ? "rgba(75, 192, 192, 1)" : "rgba(255, 99, 132, 1)"
        ),
        borderWidth: 1,
      },
    ],
  };

  const totalInvestment = updatedHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );
  const currentValue = updatedHoldings.reduce(
    (sum, stock) => sum + (stock.currentValue || stock.price * stock.qty),
    0
  );
  const pnl = currentValue - totalInvestment;
  const pnlPercent = ((pnl / totalInvestment) * 100).toFixed(2);

  if (loading) return <div>Loading holdings...</div>;

  return (
    <>
      <h3 className="title">
        Holdings ({updatedHoldings.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {updatedHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnlValue = curValue - stock.avg * stock.qty;
              const isProfit = pnlValue >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>${stock.avg.toFixed(2)}</td>
                  <td>${stock.price.toFixed(2)}</td>
                  <td>${curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    ${pnlValue.toFixed(2)}
                  </td>
                  <td className={profClass}>
                    {stock.net}
                  </td>
                  <td className={dayClass}>
                    {stock.percent}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>${totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>${currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={pnl >= 0 ? "profit" : "loss"}>
            ${pnl.toFixed(2)} ({pnlPercent}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;