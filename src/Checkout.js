/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" />

                <div>
                    <h2 className="checkout_title">
                        Your Shopping basket
                    </h2>
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
            </div>
        </div>
    )
}

export default Checkout
