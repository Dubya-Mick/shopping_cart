import React from 'react'
import './CartFooter.css'

function CartFooter({ total }) {
    return (
        <div className="cart-footer">
            <div className="total">
                <span>TOTAL</span>
                <span>{total()}</span>
                <span>USD</span>
            </div>
            <button className="checkout-button">CHECKOUT</button>
        </div>
    )
}

export default CartFooter
