import React from 'react';
import { useParams } from 'react-router-dom';
import bucketList from '../bucketList';
import './Item.css'


function Item() {
    const { bucketID } = useParams();
    const bucket = bucketList.find(({ id }) => id === bucketID);

    return (
        <div>
            <div>
                <img 
                    className="bucket-display"
                    alt={bucket.name}
                    src={`https://source.unsplash.com/${bucket.imgID}`}
                />
            </div>
        </div>
    )
}

export default Item
