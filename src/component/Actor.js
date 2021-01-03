import React, { Component } from 'react';
import { connect } from 'react-redux';

class Actor extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Halaman Actor</h1>
            </div>
        );
    }
}

const mapDispatchtoProps = dispatch => {
    return dispatch({
        type: "ACTIVE_ITEM",
        ActiveItem: "actor"
    })
}
const mapStateToProps = state => ({});


export default connect(mapStateToProps, mapDispatchtoProps)(Actor);