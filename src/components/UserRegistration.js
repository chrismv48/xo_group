import React from 'react';
import UserRegistrationModal from './UserRegistrationModal'
import {Alert, Button} from 'react-bootstrap'

export default class UserRegistration extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalVisible: false,
            isSuccessMessageVisible: false
        }
    }

    onSubmitUserRegistration() {
        this.setState({isModalVisible: false});
        this.setState({isSuccessMessageVisible: true});
    }

    render() {
        let {isModalVisible, isSuccessMessageVisible} = this.state;
        return (
            <div>
                <div className="user-registration-button">
                    <Button
                        onClick={() => this.setState({isModalVisible: true})}
                        bsStyle="primary"
                        bsSize="large">
                        User Registration
                    </Button>
                </div>
                {
                    isModalVisible ?
                        <div>
                            <UserRegistrationModal
                                closeModal={() => this.setState({isModalVisible: false})}
                                isModalVisible={isModalVisible}
                                submitUserRegistration={() => this.onSubmitUserRegistration()}
                            />
                        </div>
                        :
                        null
                }
                {isSuccessMessageVisible ?
                    <Alert bsStyle="success">
                        <strong>User registration successful.</strong> Thank you for signing up!
                    </Alert>
                    : null
                }
            </div>
        );
    }
}
