import React, { Component } from 'react';
import { connect } from 'react-redux';

class Film extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Halaman Film</h1>
            </div>
        );
    }
}

const mapDispatchtoProps = (dispatch) => {
    return dispatch({
        type: "ACTIVE_ITEM",
        ActiveItem: "film"
    })
}
const mapStateToProps = () => { };

export default connect(mapStateToProps, mapDispatchtoProps)(Film);