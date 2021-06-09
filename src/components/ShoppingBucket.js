import React from 'react'
import CartItem from './CartItem'
import './ShoppingBucket.css'

function ShoppingBucket({ cartItems, deleteItem }) {
    const cartContents = cartItems.map(item => (
        <CartItem 
            bucket={item}
        />
    ))


    return (
        <div className="cart-wrapper">
            {cartContents}
        </div>
    )
}

export default ShoppingBucket
