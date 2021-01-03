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
            active={this.props.activeItem === 'home'}
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            name='film'
            active={this.props.activeItem === 'film'}
          >
            <Link to="/film">Film</Link>
          </Menu.Item>
          <Menu.Item
            name='actor'
            active={this.props.activeItem === 'actor'}
          >
            <Link to="/actor">Actor</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <LoginButton />
              <LogoutButton />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Profile />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem
  }
}

export default connect(mapStateToProps)(App);