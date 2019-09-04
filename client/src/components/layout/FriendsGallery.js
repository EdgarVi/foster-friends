import React, {Component} from "react";

class Gallery extends Component {
    constructor(){
        super();
    }

    componentDidMount(){

    }

    render() {
        return(
            <div id="Gallery">
                <h2 className="center-align">Friends</h2>
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
                    <div className="center-align">
                        <a className="waves-effect waves-light btn">prev</a>
                        <a className="waves-effect waves-light btn">next</a>
                    </div>
            </div>
        )
    }
}

export default Gallery;