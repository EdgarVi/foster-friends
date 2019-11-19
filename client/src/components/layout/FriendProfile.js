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
            name: props.history.location.friendInfo.name, 
            gender: props.history.location.friendInfo.gender,
            neutered: props.history.location.friendInfo.neutered,
            care: props.history.location.friendInfo.care,
            about: props.history.location.friendInfo.about,
            friendId: props.history.location.friendInfo._id,
            userId: props.auth.user.id
        }
    }

    componentDidMount(){
        M.AutoInit();
        
    }

    buttonClickHandler = e =>{
        e.preventDefault();
    
        axios.post('http://localhost:5000/api/users/push-single-friend',
            {
                user: this.state.userId,
                friend: this.state.friendId
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div className="FriendsGallery">
                <div className="row">
                    <div className="col s3">
                        <Sidenav name={"placeholder name"}/>
                    </div>
                    <div className="col s9" id="Friend-Profile">
                        <h4 className="center-align">
                            <b>Meet {this.state.name}!</b>
                        </h4>
                        <div className="display-container">
                            <div className="Display-item">
                                About: <span className="Display-value">{this.state.about}</span>
                            </div>
                            <div className="Display-item">
                                Gender: <span className="Display-value">{this.state.gender}</span>
                            </div>
                            <div className="Display-item">
                                Neutered: <span className="Display-value">{this.state.neutered}</span>
                            </div>
                            <div className="Display-item">
                                Care level: <span className="Display-value">{this.state.care}</span>
                            </div>
                        </div>
                        <button className="waves-effect waves-light btn"
                        onClick={this.buttonClickHandler}
                        >save this friend!</button>
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