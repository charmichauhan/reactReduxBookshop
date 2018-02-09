import React from 'react';
import * as cartActions from '../../actions/cartActions';
import {connect} from 'react-redux';

const BookDetails = ({book}) => {
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{book.title}</h4>
          <ul>
            <li><strong>Author: </strong> {book.author}</li>
            <li><strong>Price: </strong> ${book.price}</li>
            <li><strong>Year: </strong> {book.year}</li>
            <br/>
            <button className="btn btn-primary" onClick={() => this.props.addToCart(book)}>Buy</button>
          </ul>
        </div>
      </div>
    );
};

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.book,
    items: state.cart,
    item: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: item => dispatch(cartActions.addToCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);

