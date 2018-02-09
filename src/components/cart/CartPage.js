import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as cartActions from '../../actions/cartActions';
import { Link } from 'react-router';

class CartPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

  componentDidMount(){
    this.props.fetchCart();
  }

    render() {
        return (
            <div>
                <h1>Cart Page</h1>
                <table className="table">
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                  </tr>
                  {this.props.items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td><Link to="/cart" onClick={()=>{this.props.deleteCart(item.id)}}>Delete</Link></td>
                      </tr>
                    );
                  })}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      items: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchCart: bookId => dispatch(cartActions.fetchCart(bookId)),
      deleteCart: itemId => dispatch(cartActions.deleteCart(itemId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
