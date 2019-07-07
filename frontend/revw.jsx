import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

import {signUp} from './actions/session_actions'
/* Four testin only*/
import { fetchAllBusinesses,
makeBusiness,
fetchBusiness,
changeBusiness,
deleteBusiness} from './actions/business_actions'
window.fetchAllBusinesses = fetchAllBusinesses
window.makeBusiness = makeBusiness
window.fetchBusiness = fetchBusiness
window.changeBusiness = changeBusiness
window.deleteBusiness= deleteBusiness
window.deleteBusiness = deleteBusiness
/* Four testin only end*/=

//newbiz ={business:{business_name: "oh mah mah my"}}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        user: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }



  window.store=store
  window.signUp  = signUp

  ReactDOM.render(<Root store={store} />, root);
})