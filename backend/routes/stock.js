const express = require('express');
const router = express.Router();
const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

router.get('/quote/:symbol', async (req, res) => {
    try {
        const quote = await yahooFinance.quoteCombine(req.params.symbol);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ error: 'Stock not found' });
    }
});

module.exports = router;