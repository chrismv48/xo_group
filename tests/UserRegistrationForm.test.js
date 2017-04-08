import React from 'react'
import {shallow} from 'enzyme'
import {FormControl, HelpBlock} from 'react-bootstrap'
import UserRegistrationForm from '../src/components/UserRegistrationForm'

describe("Test UserRegistrationForm component", () => {
    let wrapper = shallow(<UserRegistrationForm />);
    it('has validation on both email and password fields', () => {
        let emailInput = wrapper.find(FormControl).first();
        emailInput.simulate('change', {target: {value: 'invalid_email'}});
        emailInput.simulate('blur');
        expect(wrapper.state('isEmailValid')).toBe(false);
        expect(wrapper.find(HelpBlock).length).toBe(1);

        emailInput.simulate('change', {target: {value: 'valid@email.com'}});
        emailInput.simulate('blur');
        expect(wrapper.state('isEmailValid')).toBe(true);
        expect(wrapper.find(HelpBlock).length).toBe(0);

        let passwordInput = wrapper.find(FormControl).last();
        passwordInput.simulate('change', {target: {value: 'invalid_password'}});
        passwordInput.simulate('blur');
        expect(wrapper.state('isPasswordValid')).toBe(false);
        expect(wrapper.find(HelpBlock).length).toBe(1);

        passwordInput.simulate('change', {target: {value: 'valid_password1'}});
        passwordInput.simulate('blur');
        expect(wrapper.state('isPasswordValid')).toBe(true);
        expect(wrapper.find(HelpBlock).length).toBe(0);
    });
});


