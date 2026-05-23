import React, { useState, useEffect } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => { },
    closeBuyWindow: () => { },
    liveStocks: [],
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");
    const [liveStocks, setLiveStocks] = useState([]);

    const API_URL = process.env.REACT_APP_API_URL;

    const symbols = [
        "AAPL",
        "MSFT",
        "GOOGL",
        "AMZN",
        "TSLA",
        "NVDA",
        "META",
        "NFLX",
        "AMD",
    ];

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const promises = symbols.map((symbol) =>
                    fetch(`${API_URL}/api/stocks/quote/${symbol}`)
                        .then((res) => res.json())
                );

                const results = await Promise.all(promises);

                const formattedData = results.map((stock) => ({
                    name: stock.symbol,
                    price: stock.regularMarketPrice,
                    percent: `${stock.regularMarketChangePercent?.toFixed(2)}%`,
                    isDown: stock.regularMarketChange < 0,
                }));

                setLiveStocks(formattedData);
            } catch (error) {
                console.error("Error fetching stocks:", error);
            }
        };

        fetchStocks();
        const interval = setInterval(fetchStocks, 30000);
        return () => clearInterval(interval);
    }, [API_URL]);

    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    };

    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
                liveStocks,
            }}
        >
            {props.children}
            {isBuyWindowOpen && (
                <BuyActionWindow uid={selectedStockUID} />
            )}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;