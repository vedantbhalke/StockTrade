const { model } = require("mongoose");

const { HoldingSchema } = require('../schema/HoldingScehma');

const HoldingsModel = new model("holding", HoldingSchema);

module.exports = { HoldingsModel };