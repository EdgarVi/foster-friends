import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

// Import Materialize
import M from "materialize-css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  componentDidMount(){
    console.log(this.props);
    M.AutoInit();
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
                <a><span className="black-text name">{user.name}</span></a>
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
        <a data-target="slide-out" class="sidenav-trigger btn-floating waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>

    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);