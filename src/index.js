import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore'
import { /*reactReduxFirebase*/ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    , reduxFirestore(firebase)
    /*, reduxFirestore(fbConfig)
    , reactReduxFirebase(fbConfig)
    */
  )
);


const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}


if (!firebase.apps.length) {
  firebase.initializeApp(fbConfig);
}
firebase.firestore()



const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>

      </ReactReduxFirebaseProvider>

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
