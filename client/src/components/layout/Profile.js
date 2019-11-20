import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {getUser} from "../../actions/authActions";
import PropTypes from "prop-types";
import Sidenav from "./Sidenav/Sidenav";
class Profile extends Component {
  constructor(props){
    super();
    
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    console.log(this.props.auth.user.id);
    const user = this.props.getUser(this.props.auth.user.id);
    console.log(user);
  }
  
  render() {  
    return (
      <div>
      <div className="row">
        <div className="col s3">
          <Sidenav name={this.props.auth.user.name}/>
        </div>
        <div className="col s9">
          <h4 className="center-align">Welcome {this.props.auth.user.name}!</h4>    
          <ul class="collection">
            
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

Profile.propTypes = {
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {getUser})(withRouter(Profile));