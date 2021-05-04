import React from 'react';
import CollectionItem from '../Collection-item/Collection-item';
import './Collection-Preview.scss';


const CollectionPreview = ({title,items}) => {
    return ( 
        <div className="collection-preview">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <div className="preview">
                {
                    items.filter((index,idx) => idx < 4).map(({id,...otherItemsProps}) => (
                       <CollectionItem key={id}{...otherItemsProps}/> 
                    ))
                }
            </div>
        </div>
     );
}
 
export default CollectionPreview;