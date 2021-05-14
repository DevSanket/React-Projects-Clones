import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/cart/cart.actions';
import CustomButton from '../CustomButton/custom-button';
import './Collection-item.scss';

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item;
    return ( 
        <div className="collection-item">
            <div className="image"
            style={{backgroundImage:`url(${imageUrl})`}}
            >
            </div>
            <div className="collection-footer">
                <span className="name">
                    {name}
                </span>
                <span className="price">
                    ${price}
                </span>
            </div>
            <CustomButton 
            onClick={() => addItem(item)}
            inverted >ADD to Cart</CustomButton>
        </div>
     );
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})
 
export default connect(null,mapDispatchToProps)(CollectionItem);
 