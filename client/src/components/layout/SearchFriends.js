import React, {Component} from 'react';
import M from "materialize-css";

class SearchFriends extends Component {
    constructor(){
        super();
        this.state = {
            species: "",
            gender: "",
            neutered: false
        }
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
        if(this.state.neutered === "true"){
            neutered_ = true;
        }
        const searchQuery = {
            species: this.state.species,
            gender: this.state.gender,
            neutered: neutered_
        };

        // call middleware
        console.log(searchQuery);
    };

    render(){
        return (
            <div className="row">
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
                    value={this.state.neutered}
                    id="neutered"
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
        );
    }

}


export default SearchFriends;


/**
 * 
 * <div id="SearchFriends">
                <div className="row">


                    <form className="row">
                        <div className="input-field col s12">
                            <select
                            onChange={this.onChange}
                            value={this.state.species}
                            id="species"
                            type="text">
                                <option value="dog">dog</option>
                                <option value="cat">cat</option>
                                <option value="other">other</option>
                            </select>
                            <label>Friend species</label>
                        </div>
                        <div className="input-field col s12">
                            <select
                            onChange={this.onChange}
                            value={this.state.gender}
                            id="gender"
                            type="text">
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                            <label>Gender</label>
                        </div>
                        <div className="input-field col s12">
                            <select
                            onChange={this.onChange}
                            value={this.state.neutered}
                            id="neutered"
                            type="text">
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                            <label>Neutered?</label>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                            type="submit"
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                            Look for friends!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
 */