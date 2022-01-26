import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../../components/useReducer/TodoListItem';

const todoMock = { id: 1, desc: 'descripcionTest', done: true };
const handleDeleteMock = jest.fn();
const handleToggleMock = jest.fn();

describe('TodoListItem', () => {

    let wrapper = shallow(< TodoListItem todo={todoMock} index={todoMock.id} handleDelete={handleDeleteMock} handleToggle={handleToggleMock}/> );

    beforeEach(() => {
        wrapper = shallow(< TodoListItem todo={todoMock} index={todoMock.id} handleDelete={handleDeleteMock} handleToggle={handleToggleMock}/> );
    });
  
    it('should render todoListItem', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render todoItem description and index', () => {
        const todoDesc = wrapper.find('p');

        expect(todoDesc.text()).toBe(`${todoMock.id+1}. ${todoMock.desc}`);
    });

    it('should render todo with class complete when its done', () => {
        const completeTodo = wrapper.find('.complete');

        expect(completeTodo).toBeTruthy()
    });
    
    it('should render and apply handleToggle', () => {
        const findDelete = wrapper.find('button');

        expect(findDelete.text()).toBe('DELETE');
        expect(findDelete.props().className).toBe('btn btn-danger');        
        expect(typeof findDelete.props().onClick).toBe('function');
    });

    it('should render and apply handleDelete', () => {
        const findToggle = wrapper.find('p');
        
        expect(findToggle.props().className).toBe('complete');        
        expect(typeof findToggle.props().onClick).toBe('function');
    });
});
