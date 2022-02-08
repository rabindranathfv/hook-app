import React, { useEffect,useState } from 'react';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import { SingleForm } from '../../components/useEffect/SingleForm';

const initialStateMock = { name: '', email: ''};

const formStateMock = {
    name: '123',
    email: 'test@gmail.com'
};

const inputChangeTest = { 
    target: { 
        name: 'name', 
        value: 'fulanito'
    }
}

describe('SingleForm::', () => {

    let wrapper = shallow(<SingleForm />);

    beforeEach( ()=> {
        wrapper = shallow(<SingleForm />);
    })
    
    it('should return default values SingleForm', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleInputChange if they change', () => {
        const inputName = wrapper.find('input').at(0);
        const inputEmail = wrapper.find('input').at(1);
        inputName.simulate('change', inputChangeTest );

        expect(typeof inputName.prop('onChange')).toBe('function');
        expect(typeof inputEmail.prop('onChange')).toBe('function');
    });

    // it('Should decrement counter', () => {
    //     wrapper.find('button').at(1).simulate('click');
    //     const counterText = wrapper.find('h1').at(0).text().trim();
        
    //     expect(counterText).toBe('Counter1 -1');
    // });

    // it('Should decrement reset', () => {
    //     wrapper.find('button').at(2).simulate('click');
    //     const counterText = wrapper.find('h1').at(0).text().trim();
        
    //     expect(counterText).toBe('Counter1 0');
    // });
})
