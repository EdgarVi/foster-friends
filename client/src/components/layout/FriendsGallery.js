import React, {Component} from "react";
import M from "materialize-css";
import Sidenav from "./Sidenav";

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
            <div>
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
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tbody className="Table-body">
                    {this.state.friends.map((friend) => (
                        <tr>
                            <th>{friend.gender}</th>
                        </tr> 
                    ))}
                </tbody> 
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>            
    )}
}

export default FriendsGallery;