import React, { Component } from "react";
import M from "materialize-css";
import Sidenav from "./Sidenav/Sidenav";

// redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addFriend} from "../../actions/authActions";
import {withRouter} from "react-router-dom";

class AddFriend extends Component {
    constructor(){
      super();
      this.state = {
        name: "",
        species: "",
        gender: "",
        neutered: false,
        about: "",
        care: "",
        errors: {}
      }
    }
    
    componentDidMount(){
        M.AutoInit();
        
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
            errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault(); // prevent page from reloading when submit is clicked

        var neutered_ = false;
        if(this.state.neutered === "true"){
            neutered_ = true;
        }
        const newFriend = {
            name: this.state.name,
            species: this.state.species,
            gender: this.state.gender,
            neutered: neutered_,
            about: this.state.about,
            owner: this.props.auth.user.id,
            care: this.state.care
        };

        // call middleware
        this.props.addFriend(newFriend, this.props.history);
        
    };
      

    render() { 
        return (
            <div className="row AddFriend">
                <div className="col s3">
                    <Sidenav name={"placeholder"}/>
                </div>
                <div className="container">
                <form className="col s9" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="input-field">
                                <input 
                                onChange={this.onChange}
                                value={this.state.name}
                                id="name"
                                type="text"></input>
                                <label htmlFor="name">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <select
                                onChange={this.onChange}
                                value={this.state.species}
                                id="species"
                                type="text"    
                                >
                                    <option value="" disabled selected>Select species</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="other">Other</option>
                                </select>
                                <label>Species</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <select
                                onChange={this.onChange}
                                value={this.state.gender}
                                id="gender"
                                type="text"
                                >
                                    <option value="" disabled selected>Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <label>Gender</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <select
                                onChange={this.onChange}
                                value={this.state.neutered}
                                id="neutered"
                                type="text"
                                >
                                    <option value="" disabled selected>Neutered?</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                                <label>Neutered?</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <select
                                onChange={this.onChange}
                                value={this.state.care}
                                id="care"
                                type="text"
                                >
                                    <option value="" disabled selected>Care level?</option>
                                    <option value="foster">Foster</option>
                                    <option value="adopt">Adopt</option>
                                </select>
                                <label>Care level?</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <input 
                                onChange={this.onChange}
                                value={this.state.about}
                                id="about"
                                type="text"></input>
                                <label htmlFor="name">Tell us about your friend!</label>
                            </div>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                            type="submit"
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                            Register Friend
                            </button>
                        </div>
                    </form>    
                </div>
            </div>
    );
  }
}

AddFriend.propTypes = {
    addFriend: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect (mapStateToProps, {addFriend})(withRouter(AddFriend));