import React, { Component } from "react";
import CollectionPreview from "../../components/preview-collection/preview_collection";
import { SHOP_DATA } from "./Shop_Data";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
      </div>
    );
  }
}

export default ShopPage;
