import React, { Component } from "react";
import M from "materialize-css";

class AddFriend extends Component {
    constructor(){
      super();
      this.state = {
        name: "",
        species: "",
        gender: "",
        neutered: false
      }
    }
    
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault(); // prevent page from reloading when submit is clicked
        const newFriend = {
            name: this.state.name,
            species: this.state.species,
            gender: this.state.gender,
            neutered: this.state.neutered
        };
    
    };
      
    componentDidMount(){
        M.AutoInit();
    }

    render() {    
        return (
            <div className="container">
                <form className="col s12" onSubmit={this.onSubmit}>
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
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Other">Other</option>
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
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
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
    );
  }
}

export default AddFriend;