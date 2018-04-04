import React, { Component } from 'react';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ProductList from '../components/ProductList';


class Dashbord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: ''
        }
        this.logOut = this.logOut.bind(this);
    }

    componentWillMount() {
        const user = localStorage.getItem('user');
        if(user !== null) {
            this.setState({Name: user});
        } else {
            this.props.history.push("/login");
        }
    }

    logOut(){
        confirmAlert({
            title: 'Logout',
            message: 'Are you sure to do logout?',
            buttons: [{
                label: 'Yes',
                onClick: () => {
                    localStorage.clear();
                    this.props.history.push("/login");
                }
            },
            {
                label: 'No'
            }]
        });
    }

    render() {
        return(
            <div className="container">
                <div align="center">
                    <div className="row">
                        <div className="col-xs-6">
                            <h4>Hey {this.state.Name} your dashbord! :)</h4>
                        </div>
                        <div className="col-xs-6">
                            <button className="btn btn-default" onClick={this.logOut}> Logout </button>
                        </div>
                    </div><br /><br /><br />
                    <div className="container">
                        <ProductList {...this.props}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        UserDetail: state.form
    };
}

export default connect(mapStateToProps, null) (Dashbord);