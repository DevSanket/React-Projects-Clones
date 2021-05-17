import React from 'react';
import './menuItem.scss';
import { addItem } from '../../Redux/Cart/cart.actions';
import { connect } from 'react-redux';

const MenuItem = ({item,addItem}) => {
    const { name , imageUrl , price } = item;
    return ( 
        <div className="containers">
        <div className="box">
          <h2 className="name">{name}</h2>
          <button className="buy" onClick={() => addItem(item)}>ADD TO CART</button>
          <div  className="price">₹{price}</div>
          <div className="circle"></div>
          <img src={imageUrl} alt="product_image" className="product" />
        </div>
        
      </div>
     );
}

const mapDispatchToProps = dispatch => ({
  addItem : item => dispatch(addItem(item))
});

 
export default connect(null,mapDispatchToProps)(MenuItem);