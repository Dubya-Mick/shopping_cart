import React from 'react'
import ItemCard from './ItemCard'
import './Catalogue.css'

function Catalogue({ bucketList }) {

    const bucketCards = bucketList.map(bucket => (
       <div key={bucket.id}>
           <ItemCard 
                bucket={bucket}
           />
       </div> 
    ));


    return (
        <div className="catalogue">
            {bucketCards}
        </div>
    )
}

export default Catalogue
