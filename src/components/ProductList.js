import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ProductRequestAction} from '../actions';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.getProductList = this.getProductList.bind(this);
        this.props.ProductRequest();
    }

    productOnClick = (index) => {
        this.props.history.push('/product/'+index);
    }

    getProductList(){
        const ProductList = this.props.ProductList;
        if(ProductList.status !== undefined && ProductList.status === 1) {
            return ProductList.data.map((product, index) => {
                return (<div className="col-md-3 col-sm-6">
                            <div className="product">
                                <img className="img-thumbnail clickevt" onClick={this.productOnClick.bind(this, index)} src={product.image[0]} alt={product.title} /> 
                                <div className="product-detail">
                                    <h1>{product.price}</h1>
                                    <h5 className="clickevt" onClick={this.productOnClick.bind(this, index)} >{ product.title.length > 25 ? product.title.substring(0, 25) : product.title}</h5>
                                </div>
                            </div>
                        </div>);
            });
        }
    }

    render() {
        return(
            <div className="row">
                {this.getProductList()}
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

export default connect(mapStateToProps, matchDispatchToProps) (ProductList);