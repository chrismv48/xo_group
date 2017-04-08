import React from 'react'
import {shallow} from 'enzyme'
import {Modal} from 'react-bootstrap'
import UserRegistrationModal from '../src/components/UserRegistrationModal'
import UserRegistrationForm from '../src/components/UserRegistrationForm'

describe("Test UserRegistrationModal component", () => {
    let wrapper = shallow(<UserRegistrationModal />);
    it('contain a modal bootstrap component and the UserRegistrationForm component', () => {
        expect(wrapper.contains(<Modal />));
        expect(wrapper.contains(<UserRegistrationForm />));
    });
});


