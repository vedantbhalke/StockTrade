require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const { OrdersModel } = require("./model/OrdersModel.js");
const stockRoutes = require('./routes/stock.js');

const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
    origin: [
        '*'
    ],
    credentials: true
}));

app.use(bodyParser.json());
app.use('/api/stocks', stockRoutes);

// MongoDB connection
mongoose.connect(uri);

app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order saved");
});

module.exports = app;