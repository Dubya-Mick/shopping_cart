import React from 'react'
import CartFooter from './CartFooter'
import CartItem from './CartItem'
import './ShoppingBucket.css'

function ShoppingBucket({ cartItems, deleteItem, changeQty, total }) {
    const cartContents = cartItems.map(item => (
        <CartItem 
            bucket={item}
            deleteItem={deleteItem}
            changeQty={changeQty}
            total={total}
        />
    ))


    return (
        <div>
            {cartContents.length > 0 &&
                <div className="cart-wrapper">
                    {cartContents}
                    <CartFooter
                        total={total}
                    />
                </div>
            }
            {cartContents.length === 0 &&
                <span>test</span>
            }
        </div>
    )
}

export default ShoppingBucket
