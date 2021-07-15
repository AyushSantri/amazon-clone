import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText ={(value) => (
                  <>
                      <p>
                          Subtotal (0 items):
                          <strong>0</strong>
                      </p>
                      <small className="subtotal_gift">
                          <input type="checkbox" />
                          This order contains a gift
                      </small>
                  </>  
                )}
                decimalScale={2}   //print the amount to 2 decimal places
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
