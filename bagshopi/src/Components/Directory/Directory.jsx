import { MDBCol } from 'mdbreact';
import React, { Component } from 'react';
import { SHOP_DATAS } from '../../Pages/SHOP_DATA';
import MenuItem from '../MenuItem/menuItem';
import './Directory.scss';


class Directory extends Component {
   state = { 
      SHOP_DATA : SHOP_DATAS,
      searchField:''
    }

    onSearchChange = event => {
       this.setState({
          searchField : event.target.value
       });
    }


   render() {
      const { SHOP_DATA , searchField } = this.state;
      const FilteredData = SHOP_DATA.filter(data => data.name.toLowerCase().includes(searchField.toLowerCase())) 
      return ( 
         <div className="directory">
            <MDBCol md="6 w-100 justify-content-center align-items-center">
      <input className="form-control" onChange={this.onSearchChange} type="text" placeholder="Search" aria-label="Search" />
       </MDBCol>
            <div className="directory-menu">
             {
                  FilteredData.map(item => (
                    <MenuItem key={item.id} item={item} />
            ))
             }
        </div>
         </div>
       );
   }
}
 
export default Directory;

// const Directory = () => {
//     return ( 
//          <div className="directory-menu">
//             {
//                  SHOP_DATA.map(item => (
//                     <MenuItem key={item.id} item={item} />
//             ))
//             }
//         </div>
//      );
// }
 
// export default Directory;