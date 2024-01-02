import React from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch } = React.useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value,
        });
    };

    return (
        <div className="currency">
            <select onChange={handleCurrencyChange}>
                <option value="£">£</option>
                <option value="$">$</option>
                <option value="€">€</option>
                <option value="₹">₹</option>
            </select>
        </div>
    );
};

export default Currency;
