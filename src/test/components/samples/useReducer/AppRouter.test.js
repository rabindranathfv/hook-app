import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from './../../../../components/useContext/AppRouter';
import { UserContext } from '../../../../components/useContext/UserContest';

const user = {
    name: 'rabindranath',
    email: 'test@gmail.com'
}
describe('AppRouter', () => {

    let wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <AppRouter />
        </UserContext.Provider>
    );

    beforeEach( () => {
        wrapper= mount(
            <UserContext.Provider value={{ user }}>
                <AppRouter />
            </UserContext.Provider>
        );
    })
  it('Should render AppRouter component', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('Should render navBar component', () => {
      const navBarComponent = wrapper.find('Navbar');

      expect(navBarComponent).toBeDefined();
  });


});
