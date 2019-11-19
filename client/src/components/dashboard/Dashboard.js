import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidenav from "../layout/Sidenav/Sidenav"


class Dashboard extends Component {
  

  render() {
  const { user } = this.props.auth;
  return(
    <div>
      <div className="row">
        <div className="col s3">
          <Sidenav name={user.name}/>
        </div>
        <div className="col s9">
          <h2>Welcome {user.name}!</h2>
          <p>You are logged in</p>
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