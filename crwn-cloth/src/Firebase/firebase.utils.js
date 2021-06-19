import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCIE2CJG84gYSXMp21i596U7qkcdoRUENY",
    authDomain: "crwn-db-39f39.firebaseapp.com",
    projectId: "crwn-db-39f39",
    storageBucket: "crwn-db-39f39.appspot.com",
    messagingSenderId: "891234527730",
    appId: "1:891234527730:web:6b398960875e288a57236b",
    measurementId: "G-CLFBHCE9Y9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Adding User Data to Firebase
   export const createUserProfileDocument = async (userAuth,additionalData) => {
     if (!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapshot = await userRef.get();

     if(!snapshot.exists){
       const { displayName,email} = userAuth;
       const createdAt = new Date();
       try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
       }catch(error){
            console.log('error creating user',error.message);
       }
     }
     return userRef;
   }

// Creating new collection and add Data
   export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);
      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
      });

      return await batch.commit();

   }

// get data fron collections firebase
export const convertCollectionsSnapshotToMap = (collections)=> {
  const transformedCollections = collections.docs.map(doc => {
    const {title,items} = doc.data();

    return {
      routeName : encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return transformedCollections.reduce((accumulator,collection) =>  {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{});

} 
  


   //Others firebase variables
  export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  GoogleProvider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
  export default firebase;

  
