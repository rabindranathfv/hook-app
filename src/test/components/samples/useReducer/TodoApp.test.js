import React from 'react';
import { shallow } from 'enzyme';
import { TodoApp } from './../../../../components/useReducer/TodoApp';

const todosMock = [
    { id: 1, desc: 't1', done: false},
    { id: 2, desc: 't2', done: false},
    { id: 3, desc: 't3', done: true }
];

describe('TodoApp', () => {

    let wrapper = shallow(<TodoApp />);

    beforeEach(() => {
        localStorage.setItem('todos', JSON.stringify(todosMock));
        wrapper = shallow(<TodoApp />);
    })
    it('Should render TodoApp component', async () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render all todos from localStorage and todoList component', () => {
        const todoList = wrapper.find('TodoList');
        todoList.debug();
        console.log('***TODO ', todoList.props());

        expect(todoList.props().todos.length).toBe(3);
        expect(typeof todoList.props().handleDelete).toBe('function');
        expect(typeof todoList.props().handleToggle).toBe('function');
    });

    it('Should render todoAddComponent', () => {
        const todoAdd = wrapper.find('TodoAdd');
        todoAdd.debug();
        console.log('***TODO ', todoAdd.props());

        expect(typeof todoAdd.props().handleAddTodo).toBe('function');
    });
})