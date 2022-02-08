import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('HookApp Component::', () => {
    
    it('should render HookApp', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
})
