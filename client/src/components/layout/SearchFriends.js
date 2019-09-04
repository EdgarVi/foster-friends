import React, {Component} from 'react';
import M from "materialize-css";
import Sidenav from "../layout/Sidenav";


// redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getFriends} from "../../actions/authActions";
import {withRouter} from "react-router-dom";

class SearchFriends extends Component {
    constructor(){
        super();
        this.state = {
            species: "",
            gender: "",
            neutured: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        M.AutoInit();
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault(); // prevent page from reloading when submit is clicked
        
        var neutered_ = false;
        var n = this.state;
        // I don't know why this works
        if(n.neutured === "true"){
            neutered_ = true;
        }
        const searchQuery = {
            species: this.state.species,
            gender: this.state.gender,
            neutured: neutered_
        };

        // call middleware
        const result = this.props.getFriends(searchQuery, this.props.history);
        //console.log(result);
    };

    render(){
        return (
            
        <div>
            <div className="row">
                <div className="col s3">
                    <Sidenav name={this.props.auth.user.name}/>
                </div>
                <div className="col s9">
                    <div className="container">
                        <div className="row">
                        <div className="col s8 offset-s2">
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Find your furry friend!</b>
                            </h4>
                            </div>
                            <form className="col s12" onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="input-field">
                                    <select
                                    onChange={this.onChange}
                                    value={this.state.species}
                                    id="species"
                                    type="text">
                                        <option value="" disabled defaultValue>Choose your option</option>
                                        <option value="dog">dog</option>
                                        <option value="cat">cat</option>
                                        <option value="other">other</option>
                                    </select>
                                    <label>Friend species</label>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="input-field">
                                    <select
                                    onChange={this.onChange}
                                    value={this.state.gender}
                                    id="gender"
                                    type="text">
                                            <option value="" disabled defaultValue>Choose your option</option>
                                            <option value="male">male</option>
                                            <option value="female">female</option>
                                    </select>
                                    <label>Gender</label>
                                    </div>
                                </div>
                            <div className="row">
                            <div className="input-field">
                                <select
                                onChange={this.onChange}
                                value={this.state.neutured}
                                id="neutured"
                                type="text">
                                    <option value="" disabled defaultValue>Choose your option</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                                <label>Neutered?</label>
                            </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                Look for friends!
                            </button>
                            </form>
                                </div>
                            </div>
                        </div>          
                    </div>
                </div>
            </div>
        );
    }

}


SearchFriends.propTypes = {
    getFriends: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {getFriends})(withRouter(SearchFriends));