import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import 'semantic-ui-css/semantic.min.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { createStore } from "redux";
import { Provider } from "react-redux";

const stateFilm = {
  activeItem: "film"
}

//Reducer

const reducerFilm = (state = stateFilm, action) => {

  switch (action.type) {
    case "ACTIVE_ITEM":
      var stateactiveItem = { ...state, activeItem: action.ActiveItem }
      return stateactiveItem;
      break;
    default:
      return state;
      break;
  }

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