import React, {Component} from "react";
import M from "materialize-css";
import "./FriendsGallery.css";
import Sidenav from "../Sidenav/Sidenav";


class FriendsGallery extends Component {
    constructor(){
        super();
        this.state = {
            friends: [],
            props: {}
        }
    }

    componentDidMount(){
        M.AutoInit();
        this.setState({
            friends: this.props.location.state.data,
            props: this.props
        }, () => console.log(this.state));

    }

    render() {
        return(
            <div className="FriendsGallery">
                <div className="row">
                    <div className="col s3">
                        <Sidenav name={"placeholder name"}/>
                    </div>
                    <div className="col s9" id="Gallery">
                        <div className="container">
                            <div className="row">
                                <div className="col s8 offset-s2">
                                    <div className="col s12">
                                        <h4 className="center-align">
                                            <b>Friends</b>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="col s12">
                        <table className="highlight">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Species</th>
                                </tr>
                            </thead>
                            <tbody className="Table-body">
                                {this.state.friends.map((friend) => (
                                    <tr
                                        key = {friend._id}
                                        onClick = {() => this.props.history.push({pathname: `/friends/${friend._id}`, friendInfo: friend})}
                                    >
                                        <td>{friend.name}</td>
                                        <td>{friend.gender}</td>
                                        <td>{friend.species}</td>
                                    </tr> 
                                ))}
                            </tbody> 
                        </table>
                    </div>
                </div>  
            </div>      
        </div>
    )}
}

export default FriendsGallery;