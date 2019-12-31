import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{ height: "90vh" }} className="valign-wrapper" id="landing-container">
          <div className="row">
            <div className="col s12 center-align">
              <p className="flow-text grey-text text-darken-1">
                Meet your furry friend today!
              </p>
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;