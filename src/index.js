import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import 'semantic-ui-css/semantic.min.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { createStore } from "redux";
import { Provider } from "react-redux";

const stateFilm = {
  activeItem: "home"
}

//Reducer

const reducerFilm = (state = stateFilm, action) => {
  console.log('action nya =>', action)
  switch (action.type) {
    case "ACTIVE_ITEM":
      var stateactiveItem = { ...state, activeItem: action.ActiveItem }
      return stateactiveItem;
    default:
      return state;
  }

  // switch (action.type) {
  //   case 'HOME':
  //     return Object.assign({}, state, { activeItem: 'home' });
  //   case 'ACTOR':
  //     return Object.assign({}, state, { activeItem: 'actor' });
  //   case 'FILM':
  //     return Object.assign({}, state, { activeItem: 'film' });
  //   default:
  //     return state;
  // }

}

const store = createStore(reducerFilm);

ReactDOM.render(
  <Auth0Provider
    domain="ras-movie.us.auth0.com"
    clientId="Qz18waXA7Etjbh6tpKSVeC9obRRWcWPi"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <Routes />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);