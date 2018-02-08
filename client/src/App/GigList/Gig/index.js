import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteGig } from "../../redux/gig";
import Form from "../../shared/Form";

class Gig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    
    render() {
        let { bandName, eventName, street, city, state, zip, callTime, dress, equipmentChecklist,date, pay, travelDetails, notes, _id, deleteGig } = this.props;
        if (this.state.isEditing) {
            return (
                <div className="edit-form">
                    <Form {...this.props} options={{ toggle: this.toggleEdit }} />
                    <button onClick={this.toggleEdit}>Cancel</button>
                </div>
            )
        }
        return (
            <div className="gig">
                <h1>{bandName}</h1>
                <h2>{eventName}</h2>
                <h3>Address: {street}, {city} {state} {zip}</h3>
                <p>{callTime}</p>
                <p>{dress}</p>
                <p>{date.toLocaleString()}</p>
                <p>{equipmentChecklist}</p>
                <p>{pay}</p>
                <p>{travelDetails}</p>
                <p>{notes}</p>
                <button onClick={this.toggleEdit}>EDIT</button>
                <button onClick={() => deleteGig(_id)}>DELETE</button>
            </div>
        )
    }
}

export default connect(null, { deleteGig })(Gig);
