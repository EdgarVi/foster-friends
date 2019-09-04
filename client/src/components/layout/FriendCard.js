import React, { Component } from "react";
import M from "materialize-css";


class FriendCard extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render(){
        return (
            <div>
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Chad</h4></li>
                    <li className="collection-item">About Chad</li>
                    <li className="collection-item">Owner contact details</li>
                </ul>
               
                <a className="waves-effect waves-light btn">Save Chad!</a>
            </div>
        )
    }

}

export default FriendCard;