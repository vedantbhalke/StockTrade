import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const WatchList = () => {
  const generalContext = useContext(GeneralContext);
  const watchlist = generalContext.liveStocks || [];

  const chartData = {
    labels: watchlist.map((s) => s.name),
    datasets: [
      {
        label: "Stock Price",
        data: watchlist.map((s) => s.price),
        backgroundColor: [
          "#BFDBFE",
          "#d6fbe3",
          "#FEF3C7",
          "#FECACA",
          "#DDD6FE",
          "#CFFAFE",
          "#FED7AA",
          "#E2E8F0",
          "#D9F99D",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="watchlist-container">


      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>


      <div style={{ marginTop: "20px" }}>
        <DoughnutChart data={chartData} />
      </div>

    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const generalContext = useContext(GeneralContext);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">

        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="itemInfo">

          <span className="percent">
            {stock.percent}
          </span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">
            ${stock.price?.toFixed(2)}
          </span>

        </div>
      </div>

      {showWatchlistActions && (
        <span className="actions">
          <Tooltip title="Buy" arrow TransitionComponent={Grow}>
            <button
              className="buy"
              onClick={() => generalContext.openBuyWindow(stock.name)}
            >
              Buy
            </button>
          </Tooltip>

          <Tooltip title="Sell" arrow TransitionComponent={Grow}>
            <button className="sell">Sell</button>
          </Tooltip>

          <Tooltip title="Analytics" arrow TransitionComponent={Grow}>
            <button className="action">
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>

          <Tooltip title="More" arrow TransitionComponent={Grow}>
            <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
      )}
    </li>
  );
};