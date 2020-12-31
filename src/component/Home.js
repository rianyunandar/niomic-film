import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Halaman Home</h1>
            </div>
        );
    }
}

const mapDispatchtoProps = (dispatch) => {
    return dispatch({
        type: "ACTIVE_ITEM",
        ActiveItem: "home"
    })
}
const mapStateToProps = () => { };

export default connect(mapStateToProps, mapDispatchtoProps)(Home);