import React, { useState } from 'react'
import './ItemCard.css'
import { Link, useRouteMatch } from 'react-router-dom'

function ItemCard({ bucket }) {
    const { url } = useRouteMatch();
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
            <div className="grid-item">
                <figure>
                    <Link to={`${url}/${bucket.id}`}>
                        <img
                            className={`bucket-image fade-in ${imageLoaded ? 'visible' : 'hidden'}`}
                            alt={bucket.name}
                            src={`https://source.unsplash.com/${bucket.imgID}`}
                            onLoad={() => setImageLoaded(true)}
                        />
                    </Link>
                    <figcaption>{bucket.name}</figcaption>
                    <figcaption>&#36;{bucket.price}</figcaption>
                </figure>
                
            </div>
    )
}

export default ItemCard
