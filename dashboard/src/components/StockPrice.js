import { useState, useEffect } from 'react';

function StockPrice({ symbol }) {
    const [stock, setStock] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${API_URL}/api/stocks/quote/${symbol}`)
            .then(res => res.json())
            .then(data => {
                setStock(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [symbol, API_URL]);

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', margin: '10px' }}>
            <h2>{stock.symbol}</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                ${stock.regularMarketPrice}
            </p>
            <p style={{ color: stock.regularMarketChange > 0 ? 'green' : 'red' }}>
                {stock.regularMarketChange > 0 ? '+' : ''}
                {stock.regularMarketChange?.toFixed(2)}
                ({stock.regularMarketChangePercent?.toFixed(2)}%)
            </p>
        </div>
    );
}

export default StockPrice;