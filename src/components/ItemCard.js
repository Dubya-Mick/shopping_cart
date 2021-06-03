import React, { useState } from 'react'
import './ItemCard.css'

function ItemCard({ bucket }) {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="grid-item">
            <figure>
                <img
                    className={`bucket-image fade-in ${imageLoaded ? 'visible' : 'hidden'}`}
                    alt={bucket.name}
                    src={`https://source.unsplash.com/${bucket.imgID}`}
                    onLoad={() => setImageLoaded(true)}
                />
                <figcaption>{bucket.name}</figcaption>
                <figcaption>&#36;{bucket.price}</figcaption>
            </figure>
        </div>
    )
}

export default ItemCard
