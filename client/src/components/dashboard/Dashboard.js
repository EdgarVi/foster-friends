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
          <h4 className="center-align">Welcome {this.props.auth.user.name}</h4>
          <hr/>
          <div className="">
            <h5>What does it mean to foster?</h5>
            <p>By fostering you agree to provide the love, care and attention 
              all animals deserve. The length of the stay can vary from a few 
              sleepovers to several weeks depending on the needs of the shelter. 
            </p>
            <br/>
            <h5>How does fostering work?</h5>
            <p>Animal shelters and foster care organizations enter  
              friends in to our database. Some programs provide accomodations 
              such as food, bowls and vouchers for animal care products. We'll make
              sure to notify you when your foster term is over. If your circumstances change
              or your ability to care for the animal changes, there is no pressure to 
              return the animals. 
            </p>
            <br/>
            <h5>How does adopting work?</h5>
            <p>
              The adoption process varies between shelters. Typically you will be responsible for 
              an adoption fee, ensuring that your new friend's vaccines are up to date and 
              registering for a chip service. Thank you for choosing to adopt instead of shopping!
            </p>
            <p></p>
          </div>
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