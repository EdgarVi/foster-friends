import React, { Component } from "react";
import PropTypes from "prop-types";
import { logoutUser } from "../../../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Import Materialize
import M from "materialize-css";
import "./Sidenav.css";
class Sidenav extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: props.name
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  componentDidMount(){
    M.AutoInit();

    console.log(this.state);
  }

  render () {
    return(
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <li>
          <div className="user-view">
              <a><span className="black-text name">{this.state.name}</span></a>
          </div>
        </li>
        <li><a class="subheader">Your profile</a></li>
        <li><a><Link to="/profile">View your profile</Link></a></li>
        <li><a><Link to="/edit-profile">Edit profile</Link></a></li>
        <li><a onClick={this.onLogoutClick}>Logout</a></li>
        <li><div class="divider"></div></li>          
        <li><a class="subheader">Friends</a></li>
        <li><a><Link to="/add-friend">Add friend</Link></a></li>
        <li><a><Link to="/edit-friends">Edit friends</Link></a></li>
        <li><a><Link to="/search-friends">Search friends</Link></a></li>
      </ul>
  )
  }
}

Sidenav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Sidenav);