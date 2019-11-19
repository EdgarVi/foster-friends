import React, { Component } from "react";
import M from "materialize-css";
import Sidenav from "./Sidenav/Sidenav";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class FriendProfile extends Component {
    constructor(props){
        super(props);

        this.state = {
            userId: props.auth.user.id
        }
    }

    componentDidMount(){
        M.AutoInit();
        
    }

    buttonClickHandler = e =>{
        e.preventDefault();
    }

    render(){
        return (
            <div className="FriendsGallery">
                <div className="row">
                    <div className="col s3">
                        <Sidenav name={this.props.auth.user.name}/>
                    </div>
                    <div className="col s9" id="Friend-Profile">
                        <h4 className="center-align">
                            <b>Your saved friends</b>
                        </h4>
                        <div className="display-container">
                            
                        </div>
                    </div>  
                </div>      
            </div>
        )
    }
}

FriendProfile.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(FriendProfile);