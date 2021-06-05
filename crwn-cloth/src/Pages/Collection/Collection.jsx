import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/Collection-item/Collection-item';
import { selectCollection } from '../../Redux/shop/shop.selector';
import'./Collection.scss';

const CollectionPage = ({collection}) => {
    console.log(collection);
    const {title,items} = collection;
    return ( 
        <div className="collection-page">
                <div className="title">{title}</div>
                <div className="items">
                    {
                        items.map(item => <CollectionItem key={item.id} item={item}/>)
                    }
                </div>
        </div>
     );
}

const mapStateToProps = (state,ownProps) => {
    console.log(ownProps);
    console.log(state);
    return({

    collection : selectCollection(ownProps.match.params.categoryId)(state)
}) }
 
export default connect(mapStateToProps)(CollectionPage);