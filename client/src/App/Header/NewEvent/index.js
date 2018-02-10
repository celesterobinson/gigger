import React from 'react';
import { Modal } from "react-bootstrap";
import Form from "../../shared/Form";
import "../../styles/NewEvent.css";
import { connect } from "react-redux";
import { modalToggle } from "../../redux/modal";

function NewEvent(props) {
    let { show, date, modalToggle } = props;
    return (
        <div>
            <Modal className="backdrop-style" show={show} onHide={modalToggle} animation={true}>
                <div className="modal-style">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>ADD GIG</Modal.Title>
                        </Modal.Header>

                        <Modal.Body><Form add clear modalDate={date}submit={modalToggle} /></Modal.Body>

                        <Modal.Footer>
                            <button style={{ cursor: "pointer" }} onClick={modalToggle}>Close</button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </Modal>
            <div className="add-event-button">
                <h1 onClick={modalToggle}>+</h1>
            </div>
        </div>
    )
}

export default connect(state => state.modal, { modalToggle })(NewEvent);
