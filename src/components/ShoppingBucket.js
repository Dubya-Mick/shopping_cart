import React from 'react'
import CartFooter from './CartFooter'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import './ShoppingBucket.css'

function ShoppingBucket({ cartItems, deleteItem, changeQty, total }) {
    const cartContents = cartItems.map(item => (
        <div key={item.id}>
            <CartItem
                bucket={item}
                deleteItem={deleteItem}
                changeQty={changeQty}
                total={total}
            />
        </div>
    ))


    return (
        <div>
            {cartContents.length > 0 &&
                <div>
                    <div className="cart-wrapper">
                        {cartContents}
                        <CartFooter
                            total={total}
                        />
                    </div>
                </div>
            }
            {cartContents.length === 0 &&
                <EmptyCart />
            }
        </div>
    )
}

export default ShoppingBucket
