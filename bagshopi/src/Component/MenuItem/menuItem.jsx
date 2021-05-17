import React from 'react';
import './menuItem.scss';

const MenuItem = ({item}) => {
    const { name , imageUrl , price } = item;
    return ( 
        <div className="card">
            <img src={imageUrl} alt="" class="card__img" /> 
                            <div className="card__data">
                            <h1 className="card__title">{name}</h1>
                            <span className="card__preci">{price}</span>
                            <p className="card__description">Nike Air Jordan Footwear basketball sneakers.</p>
                            <a href="#" className="card__button">Buy Now</a>
             </div>
        </div>
     );
}
 
export default MenuItem;