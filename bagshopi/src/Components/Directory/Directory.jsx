import React from 'react';
import { SHOP_DATA } from '../../Pages/SHOP_DATA';
import MenuItem from '../MenuItem/menuItem';
import './Directory.scss';

const Directory = () => {
    return ( 
         <div className="directory-menu">
            {
                 SHOP_DATA.map(item => (
                    <MenuItem key={item.id} item={item} />
            ))
            }
        </div>
     );
}
 
export default Directory;