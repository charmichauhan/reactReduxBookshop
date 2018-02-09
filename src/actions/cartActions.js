import * as actionTypes from './actionTypes';
import Axios from 'axios';

const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/Cart';

export const deleteCartSuccess = (itemId) => {
  return {
    type: actionTypes.DELETE_CART_BY_ID_SUCCESS,
    itemId
  };
};

export const addToCartSuccess = (item) => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    item
  };
};

export const addToCart = (item) => {
  debugger;
  return (dispatch) => {
    return Axios.post(apiUrl, item)
      .then(response => {
        dispatch(addToCartSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchCartSuccess = (items) => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    items
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchCartSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deleteCart = (itemId) => {
  return (dispatch) => {
    return Axios.delete(apiUrl + '/' +itemId)
      .then(response => {

        dispatch(deleteCartSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};
