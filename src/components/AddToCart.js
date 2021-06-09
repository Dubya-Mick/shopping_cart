import React from 'react'
import './AddToCart.css'

function AddToCart({ bucket, addItem }) {
    return (
        <div>
            <div className="add-to-cart-wrapper">
                <p>{bucket.name}</p>
                <p>&#36;{bucket.price}</p>
                <p>{bucket.description}</p>
                <button onClick={() => addItem(bucket)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default AddToCart
