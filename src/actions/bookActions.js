import * as actionTypes from './actionTypes';
import Axios from 'axios';

const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

// export const createBook = (book) => {
//   return {
//     type: actionTypes.CREATE_BOOK,
//     book
//   }
// };

export const fetchBooksSuccess = (books) => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    books
  };
};

export const createBookSuccess = (book) => {
  return {
    type: actionTypes.CREATE_BOOK_SUCCESS,
    book
  };
};

export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book
  };
};

export const deleteBookSuccess = (book) => {
  return {
    type: actionTypes.DELETE_BOOK_BY_ID_SUCCESS,
    book
  };
};

export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        dispatch(createBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' +bookId)
      .then(response => {

        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deleteBook = (bookId) => {
  return (dispatch) => {
    return Axios.delete(apiUrl + '/' +bookId)
      .then(response => {

        dispatch(deleteBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};
