import React, { Component } from 'react';
import LogoutButton from './component/LogoutButton';
import LoginButton from './component/LoginButton';
import Profile from './component/Profile';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class App extends Component {


  render() {
    return (
      <div>
        <Menu pointing inverted color='blue'>
          <Menu.Item
            name='home'
            as={Link} to="/home"
            active={this.props.activeItems === 'home'}
            onClick={this.props.onClickedHeader}
          >
          </Menu.Item>
          <Menu.Item
            name='film'
            as={Link} to="/film"
            active={this.props.activeItems === 'film'}
            onClick={this.props.onClickedHeader}
          >
          </Menu.Item>
          <Menu.Item
            name='actor'
            as={Link} to="/actor"
            active={this.props.activeItems === 'actor'}
            onClick={this.props.onClickedHeader}
          >
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Profile /> &nbsp;&nbsp;
              <LoginButton />
              <LogoutButton />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {this.props.activeItems === 'beranda'}

      </div>

    );
  }
}

function mapStatetoProps(state) {
  return {
    activeItems: state.activeItems
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    onClickedHeader: (e, { name }) => {
      const action = { type: "ACTIVE_ITEM", ActiveItem: name };
      dispatch(action);
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);