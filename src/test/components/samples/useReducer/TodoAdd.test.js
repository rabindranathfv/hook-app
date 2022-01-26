import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../../components/useReducer/TodoAdd';

const handleAddMock = jest.fn();
const resetMock = jest.fn();
const desc = 'create an item';
const mockData = {
    target: {
        value: desc,
        name: 'description'
    },
    preventDefault: () => {}
};

describe('TodoAdd', () => {

    let wrapper = shallow(<TodoAdd handleAddTodo={handleAddMock} />);

    beforeEach(() => {
        wrapper = shallow(<TodoAdd handleAddTodo={handleAddMock} />);
    })
  it('should render TodoApp', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('should not call handleSubmit for create a new todo', () => {
      const formSubmit = wrapper.find('form').prop('onSubmit');
      formSubmit({ preventDefault(){} });
      
      expect(handleAddMock).toHaveBeenCalledTimes(0);
  });

  it('should call handleSubmit for create a new todo', () => {
    const inputDesc = wrapper.find('input').simulate('change',mockData);
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit(mockData);
    
    expect(handleAddMock).toHaveBeenCalled();
    expect(handleAddMock).toHaveBeenCalledTimes(1);
    expect(handleAddMock).toHaveBeenCalledWith({ id: expect.any(Number), desc, done: false});
    expect(inputDesc.prop('value')).toBe('');
  });
});
