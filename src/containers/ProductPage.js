import React, { Component } from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import { bindActionCreators } from 'redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {ProductRequestAction} from '../actions';



class ProductPage extends Component {
    constructor(props){
        super(props);
        this.state = {product: {}};
    }

    componentWillMount() {
        const index = this.props.match.params.index;
        this.props.ProductRequest();
        const productList = this.props.ProductList;
        if(productList.data !== undefined && productList.data[index] !== undefined){
            this.setState({product: productList.data[index]});
        } else {
            this.props.history.push("/");
        }
    }

    
    _CheckOut = (title) => {
        console.log("title", title);
        confirmAlert({
            title: 'Checkout',
            message: title + ' checkout successfully..',
            buttons: [{
                label: 'Done'
            }]
        });
    }

    render() {
        return(
            <div className="container">
                {this.state.product.title !== undefined ? <div className="row">
                    <div className="col-sm-6">
                        <img className="img-thumbnail" src={this.state.product.image[1]} alt={this.state.product.title}/>
                    </div>
                    <div className="col-sm-6">
                        <h3>{this.state.product.title}</h3>
                        <h3>Price: {this.state.product.price} <button className="btn btn-success checkout" onClick={this._CheckOut.bind(this, this.state.product.title)}>Check out</button></h3><br />
                        <div dangerouslySetInnerHTML={{__html: this.state.product.description}}></div>
                    </div>
                </div>: ''}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ProductList: state.productlist
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ ProductRequest: ProductRequestAction }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (ProductPage);