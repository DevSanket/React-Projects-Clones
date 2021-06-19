import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container";
import { fetchCollectionStart } from "../../Redux/shop/shop.actions";
import CollectionPageContainer from "../Collection/Collection.container";


class ShopPage extends React.Component {
  componentDidMount() {

      //Using the redux-thunk or Asyncronus Redux

    const { fetchCollectionStart} = this.props;
    fetchCollectionStart();
    
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
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}  component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
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


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart : () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
