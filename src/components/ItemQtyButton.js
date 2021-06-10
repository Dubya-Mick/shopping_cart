import React from 'react'
import './ItemQtyButton.css'

function ItemQtyButton({ changeQty, qty, id }) {
    return (
        <div className="qty-button">
            <button 
                onClick={() => {
                    if (qty > 1) {
                        changeQty(id, -1)
                    }
                }}>-
            </button>
            <span>{qty}</span>
            <button onClick={() => changeQty(id, 1)}>+</button>
        </div>
    )
}

export default ItemQtyButton
