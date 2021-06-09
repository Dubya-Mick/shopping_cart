import React from 'react';
import { useParams } from 'react-router-dom';
import bucketList from '../bucketList';
import AddToCart from './AddToCart';
import './Item.css'

function Item({ addItem }) {
    const { bucketID } = useParams();
    const bucket = bucketList.find(({ id }) => id === bucketID);

    return (
        <div className="item-wrapper">
            <div>
                <img 
                    className="bucket-display"
                    alt={bucket.name}
                    src={`https://source.unsplash.com/${bucket.imgID}`}
                />
            </div>
            <AddToCart 
                bucket={bucket}
                addItem={addItem}
            />
        </div>
    )
}

export default Item
