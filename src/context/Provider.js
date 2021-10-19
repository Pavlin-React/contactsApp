import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialsState from './initialsStates/authState';
import contacts from './reducers/contacts';
import contactsInitialState from './initialsStates/contactsInitialState';

export let GlobalContext = createContext({});

  let GlobalProvider = ({children}) => {
  let [authState, authDispatch] = useReducer(auth, authInitialsState);
  let [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactsState,
        authDispatch,
        contactsDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
