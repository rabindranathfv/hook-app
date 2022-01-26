import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../../components/useReducer/TodoListItem';

const todoMock = { id: 1, desc: 'descripcionTest1', done: true };
const handleDeleteMock = jest.fn();
const handleToggleMock = jest.fn();

describe('TodoListItem', () => {

    let wrapper = shallow(<TodoListItem todo={todoMock} index={todoMock.id} handleDelete={handleDeleteMock} handleToggle={handleToggleMock}/> );

    beforeEach(() => {
        wrapper = shallow(<TodoListItem todo={todoMock} index={todoMock.id} handleDelete={handleDeleteMock} handleToggle={handleToggleMock}/> );
    });
  
    it('should render todoListItem', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render todoItem description and index', () => {
        const todoDesc = wrapper.find('p');

        expect(todoDesc.text()).toBe(`${todoMock.id+1}. ${todoMock.desc}`);
    });

    it('should render todo with class complete when its done', () => {
        const completeTodo =  wrapper.find('p');

        expect(completeTodo.hasClass('complete')).toBeTruthy();
    });
    
    it('should render and apply handleToggle', () => {
        const findToggle = wrapper.find('p');
        findToggle.simulate('click');

        expect(typeof findToggle.props().onClick).toBe('function');
        expect(handleToggleMock).toBeCalled();
        expect(handleToggleMock).toHaveBeenCalledWith(1);
    });

    it('should render and apply handleDelete', () => {
        const findDelete = wrapper.find('button');
        findDelete.simulate('click');
        
        expect(findDelete.text()).toBe('DELETE');
        expect(findDelete.props().className).toBe('btn btn-danger');  
        expect(typeof findDelete.props().onClick).toBe('function');
        expect(handleDeleteMock).toBeCalled();
        expect(handleDeleteMock).toHaveBeenCalledWith(1);
    });
});
