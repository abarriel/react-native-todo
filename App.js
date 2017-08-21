import React from 'react';
import { Provider } from 'react-redux';
import PouchDb from 'pouchdb';
import configureStore from './store';
// import { syncRemote } from './lib/pouchActions';
import App from './component/App';

const db = PouchDb('todos');
const pathStore = 'todos';

// const remoteCouch = 'http://admin:admin@localhost:5984/todos';
// const configSync = {
//   live: true,
//   retry: true,
// };

// syncRemote(db, remoteCouch, configSync);

const store = configureStore({}, db, pathStore);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
