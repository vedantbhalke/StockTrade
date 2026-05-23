import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./BuyActionWindow.css";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
    const generalContext = useContext(GeneralContext);
    const [stockQuantity, setStockQuantity] = useState("");
    const [stockPrice, setStockPrice] = useState("");

    const API_URL = process.env.REACT_APP_API_URL;

    const handleBuyClick = async () => {
        try {
            await axios.post(`${API_URL}/newOrder`, {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "BUY",
            });
            generalContext.closeBuyWindow();
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    const handleCancelClick = () => {
        generalContext.closeBuyWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            value={stockQuantity}
                            placeholder="1,2,.."
                            onChange={(e) =>
                                setStockQuantity((e.target.value))
                            }
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            value={stockPrice}
                            placeholder="$"
                            onChange={(e) =>
                                setStockPrice((e.target.value))
                            }
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>
                    Margin required $9.64
                </span>
                <div>
                    <Link
                        className="btn btn-blue"
                        onClick={handleBuyClick}
                    >
                        Buy
                    </Link>
                    <Link
                        to=""
                        className="btn btn-grey"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;