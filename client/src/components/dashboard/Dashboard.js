import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// Import Materialize
import M from "materialize-css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  componentDidMount(){
    M.AutoInit();
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <div className="row">
            <div className="col s3">
              <a className="dropdown-trigger btn" href="#" data-target='dropdown1'>Hello, {user.name}</a>
              <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
              </ul>
            </div>
            <div className="col s9">

            </div>
          </div>
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