import React, { Component } from 'react';
import { connect } from "react-redux";
import {postGig, updateGig} from "../redux/gig";

class Form extends Component {
    constructor(props) {
        super(props);
        let { bandName, eventName, street, city, state, zip, callTime, dress, equipmentChecklist, pay, travelDetails, notes } = props;
        this.state = {
            inputs: {
                bandName: bandName || "",
                eventName: eventName || "",
                street: street || "",
                city: city || "",
                state: state || "",
                zip: zip || "",
                callTime: callTime || "",
                dress: dress || "",
                equipmentChecklist: equipmentChecklist || "",
                pay: pay || "",
                travelDetails: travelDetails || "",
                notes: notes || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                bandName: "",
                eventName: "",
                street: "",
                city: "",
                state: "",
                zip: "",
                callTime: "",
                dress: "",
                equipmentChecklist: "",
                pay: "",
                travelDetails: "",
                notes: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let { _id, add, postGig, updateGig, clear, options } = this.props;
        if (add) {
            postGig(this.state.inputs);
        } else {
            updateGig(this.state.inputs, _id);
            options.toggle();
        }
        if (clear) {
            this.clearInputs();
        }
    }

    render() {
        let { bandName, eventName, street, city, state, zip, callTime, dress, equipmentChecklist, pay, travelDetails, notes } = this.state.inputs;        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={bandName} name="bandName" placeholder="Band Name" type="text" />
                    <input onChange={this.handleChange} value={eventName} name="eventName" placeholder="Event Name" type="text" />
                    <input onChange={this.handleChange} value={street} name="street" placeholder="Street" type="text" />
                    <input onChange={this.handleChange} value={city} name="city" placeholder="City" type="text" />
                    <input onChange={this.handleChange} value={state} name="state" placeholder="State" type="text" />
                    <input onChange={this.handleChange} value={zip} name="zip" placeholder="Zip" type="text" />
                    <input onChange={this.handleChange} value={callTime} name="callTime" placeholder="Call Time" type="text" />
                    <input onChange={this.handleChange} value={dress} name="dress" placeholder="Dress" type="text" />
                    <input onChange={this.handleChange} value={equipmentChecklist} name="equipmentChecklist" placeholder="Equipment Checklist" type="text" />
                    <input onChange={this.handleChange} value={pay} name="pay" placeholder="Pay" type="text" />
                    <textarea onChange={this.handleChange} value={travelDetails} name="travelDetails" placeholder="Travel Details" type="text" cols="30" rows="10"></textarea>
                    <textarea onChange={this.handleChange} value={notes} name="notes" placeholder="Notes" type="text"cols="30" rows="10"></textarea>
                    <button>Create Gig</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { postGig, updateGig })(Form);
