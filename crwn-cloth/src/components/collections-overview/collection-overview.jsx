import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../Redux/shop/shop.selector';
import CollectionPreview from '../preview-collection/preview_collection';
import './collection-overview.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
              ))
        }
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
  })

export default connect(mapStateToProps)(CollectionOverview);