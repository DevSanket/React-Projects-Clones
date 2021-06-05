import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/collections-overview/collection-overview";
import WithSpinner from "../../components/with-spinner/with-spinner";
import { fetchCollectionsStartAsync} from "../../Redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../Redux/shop/shop.selector";
import CollectionPage from "../Collection/Collection";

const CollectionOverviewWithSpinner  = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner  = WithSpinner(CollectionPage);


class ShopPage extends React.Component {


  componentDidMount() {

      //Using the redux-thunk or Asyncronus Redux

    const { fetchCollectionStartAsync} = this.props;
    fetchCollectionStartAsync();
    
     // Old Approch
    //So complicated to get the data from firebase
    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-39f39/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections));

    //using promises
    // const collectionRef = firestore.collection("collections");
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading:false});
    // });

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading:false});
    // });
  }
  render() {
    const { match,isCollectionFetching,isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}  render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}/>
        <Route path={`${match.path}/:categoryId`} component={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>} />
      </div>
    );
  }
}

// const ShopPage = ({match}) => {
//   return (
//     <div className="shop-page">
//         <Route exact path={`${match.path}`} component={CollectionOverview}/>
//         <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
//       </div>
//    );
// }

const mapStateToProps = createStructuredSelector({
  isCollectionFetching : selectIsCollectionFetching,
  isCollectionLoaded : selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync : () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
