import { connect} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector} from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { selectIsCollectionsLoaded } from '../../Redux/shop/shop.selector';
import CollectionPage from './Collection';

const mapStateToProps = createStructuredSelector({
    isLoading : (state) => !selectIsCollectionsLoaded(state)
});


const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
