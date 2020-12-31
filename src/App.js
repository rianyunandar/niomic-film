import React, { Component } from 'react';
import LogoutButton from './component/LogoutButton';
import LoginButton from './component/LoginButton';
import Profile from './component/Profile';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';




class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render() {
    return (
      <div>
        <Menu pointing inverted color='blue'>
          <Menu.Item
            name='home'
            active={this.props.activeItem === 'home'}
            onClick={this.goTo.bind(this, 'home')}
          />
          <Menu.Item
            name='film'
            active={this.props.activeItem === 'film'}
            onClick={this.goTo.bind(this, 'film')}
          />
          <Menu.Item
            name='actor'
            active={this.props.activeItem === 'actor'}
            onClick={this.goTo.bind(this, 'actor')}
          />
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