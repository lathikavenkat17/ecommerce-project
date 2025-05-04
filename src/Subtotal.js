import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
import { FormattedNumber } from "react-intl";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();
  const total = getBasketTotal(basket);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length || 0} items):{" "}
        <strong>
          <FormattedNumber value={total} style="currency" currency="USD" />
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
