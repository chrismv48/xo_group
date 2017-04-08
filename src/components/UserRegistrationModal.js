import React from 'react';
import {Modal} from 'react-bootstrap';
import UserRegistrationForm from './UserRegistrationForm'

const UserRegistrationModal = (props) => {
    let {closeModal, isModalVisible, submitUserRegistration} = props;
    return (
        <div>
            <Modal
                show={isModalVisible}
                onHide={closeModal}
                dialogClassName="user-registration-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>User Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserRegistrationForm
                        submitUserRegistration={submitUserRegistration}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default UserRegistrationModal