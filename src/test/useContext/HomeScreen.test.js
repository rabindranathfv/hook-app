import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../../components/useContext/HomeScreen';
import { UserContext } from '../../components/useContext/UserContest';

const user = {
    name: 'rabindranath',
    email: 'test@gmail.com'
}

describe('HomeScreen', () => {

    const wrapper = mount( 
    <UserContext.Provider value={{ user }}>
        <HomeScreen  />    
    </UserContext.Provider>)
    it('Should render HomeScreen', () => {
        expect(wrapper).toMatchSnapshot();
    });
});