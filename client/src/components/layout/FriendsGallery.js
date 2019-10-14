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
                <table className="centered highlight">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Species</th>
                            <th>Gender</th>
                            <th>Location</th>
                            <th>Foster or Adopt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Zeus</td>
                            <td>3?</td>
                            <td>Dog</td>
                            <td>Male</td>
                            <td>Anchorage, AK</td>
                            <td>Adopt</td>
                        </tr>
                        <tr>
                            <td>Chad</td>
                            <td>3</td>
                            <td>Cat</td>
                            <td>Male</td>
                            <td>Pullman, WA</td>
                            <td>Foster</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>          
        </div>            
    )}
}

export default FriendsGallery;