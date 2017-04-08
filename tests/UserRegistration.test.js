import React from 'react'
import {mount} from 'enzyme'
import {Alert} from 'react-bootstrap'
import UserRegistration from '../src/components/UserRegistration'
import UserRegistrationModal from '../src/components/UserRegistrationModal'

describe("Test UserRegistration component", () => {
    let wrapper = mount(<UserRegistration />);
    it('should initialize to a dom with a div with only one child', () => {
        expect(wrapper.text()).toBe("User Registration");
        expect(wrapper.children.length).toBe(1);
    });

    it('should have state initialized to hide modal/success text', () => {
        expect(wrapper.state('isModalVisible')).toBe(false);
        expect(wrapper.state('isSuccessMessageVisible')).toBe(false);
    });

    it('should render a modal when the user clicks the link', () => {
        wrapper.find('h3').simulate('click');
        expect(wrapper.state('isModalVisible')).toBe(true);
        expect(wrapper.containsMatchingElement(<UserRegistrationModal />)).toBe(true)
    });

    it('should display success message when state is true', () => {
        wrapper.setState({'isSuccessMessageVisible': true});
        expect(wrapper.find(Alert).exists()).toBe(true)
    });

});


