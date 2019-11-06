import React, { Component } from "react";
import M from "materialize-css";
import Sidenav from "./Sidenav";


class FriendProfile extends Component {
    constructor(){
        super();

        this.state = {
            name: null
        }
        this.fetchFriend = this.fetchFriend.bind(this);
    }

    componentDidMount(){
        M.AutoInit();
        const friendId = this.props.match.params.id;
        console.log(friendId);
        this.fetchFriend(friendId);
    }

    fetchFriend(friendId){
        // TO DO: write a GET request to return a single friend
        // finish friend profile
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
                            <b></b>
                        </h4>
                    </div>  
                </div>      
            </div>
        )
    }
}

export default FriendProfile;