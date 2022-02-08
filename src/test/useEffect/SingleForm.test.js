import React from 'react';
import { shallow } from 'enzyme';
import { SingleForm } from '../../components/useEffect/SingleForm';


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

})
