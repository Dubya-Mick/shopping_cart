import React from 'react'
import './CartItem.css'

function CartItem({ bucket }) {
    return (
        <div className="grid-item">
            <figure>
                    <img
                        className="cart-image"
                        alt={bucket.name}
                        src={`https://source.unsplash.com/${bucket.imgID}`}
                    />
                <figcaption>{bucket.name}</figcaption>
                <figcaption>&#36;{bucket.price}</figcaption>
            </figure>
        </div>
    )
}

export default CartItem
