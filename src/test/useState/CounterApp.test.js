import React from 'react';
import { shallow } from 'enzyme';
import { CounterApp } from '../../components/useState/CounterApp';

describe('CounterApp::', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach( ()=> {
        wrapper = shallow(<CounterApp />);
    })
    
    it('should return default values CounterApp', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with default values in all counters', () => {
        const counterText = wrapper.find('h1').at(0).text().trim();
        const counterText2 = wrapper.find('h1').at(1).text().trim();

        expect(counterText).toBe('Counter1 0');
        expect(counterText2).toBe('Counter2 20');
    });

    it('Should increment counter', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h1').at(0).text().trim();
        
        expect(counterText).toBe('Counter1 1');
    });

    it('Should decrement counter', () => {
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h1').at(0).text().trim();
        
        expect(counterText).toBe('Counter1 -1');
    });

    it('Should decrement reset', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h1').at(0).text().trim();
        
        expect(counterText).toBe('Counter1 0');
    });
})
