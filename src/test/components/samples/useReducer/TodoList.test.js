import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../../components/useReducer/TodoList';

const todosMock = [
    { id: 1, desc: 't1', done: false},
    { id: 2, desc: 't2', done: false},
    { id: 3, desc: 't3', done: true }
]

const handleDeleteMock = jest.fn();
const handleToggleMock = jest.fn();
describe('TodoList', () => {

    let wrapper = shallow(<todoList todos={todosMock} />);

    beforeEach(() => {
        wrapper = shallow(<TodoList todos={todosMock} />);
    });

  it('should render todoList', () => {
    expect(wrapper).toMatchSnapshot();      
  });

  it('should render all todos', () => {
      const todoList = wrapper.find('ul');
      
      expect(todoList.props().children.length).toBe(3);
  });
});
