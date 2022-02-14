const types = {
  GET_CONTACTS_SUCCESS: 'GET_CONTACTS_SUCCESS',
  GET_CONTACTS_FAILED: 'GET_CONTACTS_FAILED',
  ADD_TO_FAV_SUCCESS: 'ADD_TO_FAV_SUCCESS',
  ADD_TO_FAV_FAILED: 'ADD_TO_FAV_FAILED',
};

export const useContacts = () => {
  const getContacts = items => (dispatch, getState) => {
    console.log('get contacts action fired');
    try {
      dispatch({type: types.GET_CONTACTS_SUCCESS, payload: items});
    } catch (error) {
      dispatch({type: types.ADD_TO_FAV_FAILED});
      console.log(error);
    }
  };

  const addToFav = items => (dispatch, getState) => {
    console.log('add to fav action fired');
    try {
      dispatch({type: types.ADD_TO_FAV_SUCCESS, payload: items});
    } catch (error) {
      dispatch({type: types.ADD_TO_FAV_FAILED});
      console.log(error);
    }
  };

  return {
    getContacts,
    addToFav,
  };
};

const initialState = {
  contacts: [],
  favorites: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_CONTACTS_SUCCESS:
      return {...state, contacts: [...state.contacts, ...payload]};
    case types.ADD_TO_FAV_SUCCESS:
      return {...state, favorites: payload};
    case types.GET_CONTACTS_FAILED:
    case types.ADD_TO_FAV_FAILED:
      return initialState;
    default:
      return state;
  }
};
