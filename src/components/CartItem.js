import React from 'react'
import './CartItem.css'
import ItemQtyButton from './ItemQtyButton'
import { Link } from 'react-router-dom'

function CartItem({ bucket, deleteItem, changeQty }) {
    return (
        <div className="grid-item">
            <figure>
                <Link to={`/catalogue/${bucket.id}`}>
                    <img
                        className="cart-image"
                        alt={bucket.name}
                        src={`https://source.unsplash.com/${bucket.imgID}`}
                    />
                </Link>
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
