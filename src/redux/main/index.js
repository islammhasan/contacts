import auth from '@react-native-firebase/auth';

const types = {
  GET_CONTACTS_SUCCESS: 'GET_CONTACTS_SUCCESS',
  GET_CONTACTS_FAILED: 'GET_CONTACTS_FAILED',
  ADD_TO_FAV_SUCCESS: 'ADD_TO_FAV_SUCCESS',
  ADD_TO_FAV_FAILED: 'ADD_TO_FAV_FAILED',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILED: 'AUTH_FAILED',
  CONFIRM_SUCCESS: 'CONFIRM_SUCCESS',
  CONFIRM_FAILED: 'CONFIRM_FAILED',
};

export const useReg = () => {
  const signIn = phoneNumber => async (dispatch, getState) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      if (confirmation) {
        console.log('confirmation from signin action', confirmation);
        dispatch({type: types.LOGIN_SUCCESS, payload: confirmation});
      }
    } catch (error) {
      dispatch({type: types.LOGIN_FAILED});
      console.log(error);
    }
  };

  const confirm = code => async (dispatch, getState) => {
    const confirm = getState().main.confirm;
    try {
      await confirm.confirm(code);
      if (confirm) {
        dispatch({type: types.AUTH_SUCCESS, payload: true});
      } else {
        dispatch({type: types.AUTH_FAILED});
      }
    } catch (error) {
      dispatch({type: types.AUTH_FAILED});
      console.log(error);
    }
  };

  return {
    signIn,
    confirm,
  };
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
  confirm: null,
  authenticated: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_CONTACTS_SUCCESS:
      return {...state, contacts: payload};
    case types.ADD_TO_FAV_SUCCESS:
      return {...state, favorites: [...state.favorites, ...payload]};
    case types.LOGIN_SUCCESS:
      return {...state, confirm: payload};
    case types.AUTH_SUCCESS:
      return {...state, authenticated: payload};
    case types.LOGIN_FAILED:
    case types.AUTH_FAILED:
    case types.GET_CONTACTS_FAILED:
    case types.ADD_TO_FAV_FAILED:
      return initialState;
    default:
      return state;
  }
};
