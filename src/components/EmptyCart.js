import React from 'react'
import { Link } from 'react-router-dom'
import './EmptyCart.css'

function EmptyCart() {
    return (
        <div className="empty-cart">
            <div className="empty-main">
                <h1>Your bucket awaits . . .</h1>
                <Link to="/catalogue">Check the catalogue.</Link>
            </div>
        </div>
    )
}

export default EmptyCart
