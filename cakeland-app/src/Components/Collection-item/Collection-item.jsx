import React from 'react';
import './Collection-item.scss';

const CollectionItem = ({id,name,price,imageUrl}) => {
    return ( 
        <div className="collection-item" key={id}>
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">
                    {name}
                </span>
                <span className="price">
                    ₹{price}
                </span>
            </div>
        </div>
     );
}
 
export default CollectionItem;