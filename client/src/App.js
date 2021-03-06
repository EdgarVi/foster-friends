import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// redux state management
import { Provider } from "react-redux";
import store from "./store";

// components
import Landing from "./components/layout/Landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/dashboard/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// dashboard components
import Profile from "./components/layout/Profile";
import EditProfile from "./components/layout/EditProfile";
import AddFriend from "./components/layout/AddFriend";
import EditFriends from "./components/layout/EditFriends";
import SearchFriends from "./components/layout/SearchFriends";
import FriendsGallery from "./components/layout/FriendsGallery/FriendsGallery";
import FriendProfile from "./components/layout/FriendProfile";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <PrivateRoute exact path="/profile" component={Profile}/>
            <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
            <PrivateRoute exact path="/add-friend" component={AddFriend}/>
            <PrivateRoute exact path="/edit-friends" component={EditFriends}/>
            <PrivateRoute exact path="/search-friends" component={SearchFriends}/>
            <PrivateRoute exact path="/gallery" component={FriendsGallery}/> 
            <PrivateRoute path="/friends/:id" component={FriendProfile} exact/>   
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;