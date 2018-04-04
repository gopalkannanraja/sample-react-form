import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ProductList from '../components/ProductList';

class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-9 col-md-3">
                        <Link to="/login">Login</Link> (or) <Link to="/register">Register</Link>
                    </div>
                </div><br /><br /><br />
                <div className="container">
                    <ProductList {...this.props}/>
                </div>
            </div>
        );
    }
}

export default Home;



