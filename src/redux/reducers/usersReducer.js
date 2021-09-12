import {
  CREATE_CONTACTS,
  DELETE_CONTACTS,
  LOADING_CONTACT,
  LOADING_CONTACT_ERROR,
  LOADING_CONTACT_SUCCESS,
  RESET_CREATE_CONTACT_STATE,
  SET_CONTACT_DETAIL,
  UPDATE_CONTACT,
} from "../types";

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  contactCreated: false,
  contactDetail: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CONTACT:
      return { ...state, isLoading: true, error: null, contactCreated: false, contactDetail: {} };

    case LOADING_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contacts: action.payload,
        error: null,
      };

    case LOADING_CONTACT_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case CREATE_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        isLoading: false,
        error: null,
        contactCreated: true
      };

    case RESET_CREATE_CONTACT_STATE:
      return {
        ...state,
        contactCreated: false
      }

    case DELETE_CONTACTS:
      return {...state, contacts: state.contacts.filter((contact) => contact.id !== action.id)};

    case UPDATE_CONTACT:
      return {...state, isLoading: false, contactCreated: true, contacts: state.contacts.map(item=>item.id===action.payload.id?action.payload:item)}

    case SET_CONTACT_DETAIL:
      return {...state, isLoading: false, contactDetail: action.payload}

    default:
      return state;
  }
};
