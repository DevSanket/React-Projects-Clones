import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching} from '../../Redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner';
import collectionOverview from './collection-overview';
const mapStateToProps =createStructuredSelector({
    isLoading : selectIsCollectionFetching
});

const CollectionsOverviewContainer =  compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionOverview);


export default CollectionsOverviewContainer;


// connect(mapStateToProps)(WithSpinner(CollectionsOverview));



