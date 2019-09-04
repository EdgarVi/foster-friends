import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidenav from "../layout/Sidenav";


class EditProfile extends Component {
  constructor(){
      super();
      this.state = {
          name: ""
      }
  }

  render() {
  const { user } = this.props.auth;
  return(
    <div>
      <div className="row">
        <div className="col s3">
          <Sidenav name={user.name}/>
        </div>
        <div className="col s9">
            <div className="container">
            <div className="row">
            <div className="col s8 offset-s2">
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                    <b>Edit your profile</b>
                </h4>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.name}
                    id="name"
                    type="text"
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.email}
                    id="email"
                    type="email"
                    
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12">
                    <input
                    onChange={this.onChange}
                    value={this.state.password}
                    id="password"
                    type="password"
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                    Edit
                    </button>
                </div>
                            </form>
                    </div>
                </div>
            </div>          
        </div>
      </div>
    </div>
   );
  }
}

EditProfile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(EditProfile);