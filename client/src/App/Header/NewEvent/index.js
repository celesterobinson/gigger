import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import Form from "../../shared/Form";
import "../../styles/NewEvent.css";

class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    handleClose() {
        this.setState({
            show: false
        })
    }

    handleShow() {
        this.setState({
            show: true
        })
    }
    render() {
        return (
            <div>
                <Modal className="backdrop-style" show={this.state.show} onHide={this.handleClose} animation={true}>
                    <div className="modal-style">
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>ADD GIG</Modal.Title>
                            </Modal.Header>

                            <Modal.Body><Form add clear submit={this.handleClose} /></Modal.Body>

                            <Modal.Footer>
                                <button style={{cursor: "pointer"}} onClick={this.handleClose}>Close</button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                </Modal>
                <div className="add-event-button">
                    <h1 onClick={this.handleShow}>+</h1>
                </div>
            </div>
        )
    }
}

export default NewEvent;
