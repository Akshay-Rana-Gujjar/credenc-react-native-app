import axios from "axios";
import { RESET_CREATE_CONTACT_STATE } from "../../constants/screen";
import {
  CREATE_CONTACTS,
  DELETE_CONTACTS,
  GET_CONTACTS,
  LOADING_CONTACT,
  LOADING_CONTACT_ERROR,
  LOADING_CONTACT_SUCCESS,
  SET_CONTACT_DETAIL,
  UPDATE_CONTACT,
} from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const createContact = (userData) => (dispatch) => {
  dispatch({ type: LOADING_CONTACT });
  axios
    .post(`${BASE_URL}/users/`, userData)
    .then(({ data }) => {
      dispatch({
        type: CREATE_CONTACTS,
        payload: data,
      });
    })
    .catch((err) => {
        dispatch({ type: LOADING_CONTACT_ERROR, payload: err });
    });
};
export const getContact = (_) => (dispatch) => {
  dispatch({ type: LOADING_CONTACT });

  console.log("calling api");
  axios
    .get(`${BASE_URL}/users/`)
    .then(({ data }) => {
      console.log({ data });
      dispatch({
        type: LOADING_CONTACT_SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOADING_CONTACT_ERROR, payload: err });
    });
};

export const deleteContact = (id) => dispatch=>{
  
  axios.delete(`${BASE_URL}/users/${id}`)
  .then(({data})=>{
    dispatch({
      type: DELETE_CONTACTS,
      id,
    })
  })
  .catch(err=>{
    dispatch({ type: LOADING_CONTACT_ERROR, payload: err });
  })

};


export const updateContact = userData => dispatch=>{
    console.log({userData}, "dispatch");
    dispatch({type: LOADING_CONTACT});
    axios.put(`${BASE_URL}/users/${userData.id}`,userData)
    .then(({data})=>{
        dispatch({type: UPDATE_CONTACT, payload: userData})
    })
    .catch(err=>{
        console.log({err});
        dispatch({ type: LOADING_CONTACT_ERROR, payload: err });
    })
}

export const resetCreateContactState  = ()=>({
    type: RESET_CREATE_CONTACT_STATE
})


export const getContactDetail = (id)=>dispatch=>{

  dispatch({type: LOADING_CONTACT});
  axios.get(`${BASE_URL}/users/${id}`)
  .then(({data})=>{
    dispatch({type: SET_CONTACT_DETAIL, payload: data})
  })
  .catch(err=> dispatch({ type: LOADING_CONTACT_ERROR, payload: err }))

}

/* 
● User list - https://jsonplaceholder.typicode.com/users/
● User details - https://jsonplaceholder.typicode.com/users/1 
● Create User (POST) - https://jsonplaceholder.typicode.com/users/ 
● Update User (PUT) - https://jsonplaceholder.typicode.com/users/1 
● Delete User: (DELETE) - https://jsonplaceholder.typicode.com/users/1

*/
