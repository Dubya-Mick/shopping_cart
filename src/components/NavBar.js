import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar({ cartQty }) {
    return (
        <nav className="main-nav">
            <div className="link-wrapper">
                <div className="logo">
                    <Link to="/">The Bucket Store</Link>
                </div>
                <div className="right-links">
                    <Link to="/catalogue">Catalogue</Link>
                    <Link to="/shopping-bucket">{`Buckets (${cartQty()})`}</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar