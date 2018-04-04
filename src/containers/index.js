import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Dashboard from './Dashboard';
import ProductPage from './ProductPage';



class App extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center"><h3>This is sample shopping site.</h3></div>
                <div className="wrapper">
                <Router>
                    <div>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/dashboard" component={Dashboard}></Route>
                        <Route path={`/product/:index`} component={ProductPage}></Route>
                    </div>
                </Router>
                </div>
            </div>
        );
    }
}

export default App;
