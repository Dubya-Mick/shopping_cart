import React from 'react'
import './CartItem.css'
import ItemQtyButton from './ItemQtyButton'

function CartItem({ bucket, deleteItem, changeQty, total }) {
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
                <ItemQtyButton 
                    changeQty={changeQty}
                    qty={bucket.qty}
                    id={bucket.id}
                />
            <button 
                className="delete" 
                onClick={() => deleteItem(bucket.id)}>
                Delete
            </button>
            </figure>
        </div>
    )
}

export default CartItem
