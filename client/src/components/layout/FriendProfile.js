import React, { Component } from "react";
import M from "materialize-css";
import Sidenav from "./Sidenav/Sidenav";


class FriendProfile extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: props.history.location.friendInfo.name, 
            gender: props.history.location.friendInfo.gender,
            neutered: props.history.location.friendInfo.neutered,
            care: props.history.location.friendInfo.care,
            about: props.history.location.friendInfo.about
        }
    }

    componentDidMount(){
        M.AutoInit();
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

                    </div>  
                </div>      
            </div>
        )
    }
}

export default FriendProfile;