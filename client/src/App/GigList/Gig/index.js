import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteGig } from "../../redux/gig";
import { Modal } from "react-bootstrap";
import Form from "../../shared/Form";
import "../../styles/Gig.css";



class Gig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            showDetails: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    
    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        let { bandName, eventName, date, street, city, state, zip, callTime, dress, equipmentChecklist, pay, travelDetails, notes, _id, deleteGig } = this.props;
        if (this.state.isEditing) {
            return (
                <div className="edit-form">
                    <Form className="edit-forms"{...this.props} options={{ toggle: this.toggleEdit }} />
                </div>
            )
        } else if (this.state.showDetails) {
            let style = { color: "black", fontWeight: "900" };
            return (
                <div className="gig-details">
                    <Modal className="backdrop-style" show={this.state.showDetails} animation={true}>
                        <div className="details-modal">
                            <Modal.Dialog>
                                <Modal.Header className="details-header">
                                    <Modal.Title className="details-title">{bandName} <span style={style}>&nbsp;in&nbsp;</span> {city}, {state}</Modal.Title>
                                </Modal.Header>

                                <Modal.Body className="details-body">
                                    <h2>{eventName}</h2>
                                    <p><span style={style}>Address:</span> {street}, {city}, {state} {zip}</p>
                                    <p><span style={style}>Call Time:</span> {callTime}</p>
                                    <p><span style={style}>Dress:</span> {dress}</p>
                                    <p><span style={style}>Equipment:</span> {equipmentChecklist}</p>
                                    <p><span style={style}>Pay:</span> ${pay}</p>
                                    <p><span style={style}>Travel Details: </span>{travelDetails}</p>
                                    <p><span style={style}>Notes: </span>{notes}</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <button style={{ cursor: "pointer" }} onClick={this.toggleDetails}>Close</button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>
                    </Modal>
                </div>
            )
        }
        return (
            <div className="gig">
                <div className="date-time">
                    <p>{new Date(date).toLocaleDateString()}</p>
                    <p>{callTime}</p>
                </div>
                <div className="band-location" onClick={this.toggleDetails}>
                    <h1 style={{ color: "#00A8E8" }}>{bandName}</h1>
                    <h3 style={{ fontFamily: "helvetica, serif", fontStyle: "italic" }}>{city}, {state}</h3>
                </div>
                <div className="buttons">
                    <button style={{ cursor: "pointer", outline: "none" }} onClick={this.toggleEdit}>EDIT</button>
                    <button style={{ cursor: "pointer", color: "red", outline: "none" }} onClick={() => deleteGig(_id)}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteGig })(Gig);
