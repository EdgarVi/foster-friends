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
        const friendId = this.props.match.params.id;
        //console.log(this.props.history.location.friendInfo);
        //this.fetchFriend(friendId);
        console.log(this.state);
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
                            <b>Profile</b>
                        </h4>
                        <h5>About</h5>
                        <p></p>
                    </div>  
                </div>      
            </div>
        )
    }
}

export default FriendProfile;