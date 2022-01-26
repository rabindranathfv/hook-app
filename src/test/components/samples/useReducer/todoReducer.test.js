import { todoReducer } from "../../../../components/useReducer/todoReducer.js";

const todosMock = [
    { id: 1, desc: 't1', done: false},
    { id: 2, desc: 't2', done: false},
    { id: 3, desc: 't3', done: true}
]

describe('todoReducer', () => {
  
    it('Should todoReducer have a default state', () => {
        const action = { type: '' };
        const applyReducer = todoReducer([],action)   
        expect(applyReducer).toEqual([]);
    });

    it('Should todoReducer have ADD action on state', () => {
        const action = {
            type: 'add',
            payload: { id: 1, desc: 'tt', done: false }
        };
        const applyReducer = todoReducer([], action);
        expect(applyReducer).toEqual([{ id: 1, desc:'tt', done: false, }])
    });

    it('Should todoReducer have DEL action on state', () => {
        const action = {
            type: 'delete',
            payload: 3
        };
        const applyReducer = todoReducer(todosMock, action);
        expect(applyReducer.length).toBe(2);
        expect(applyReducer).toEqual(todosMock.filter(t => t.id !== action.payload))
    });

    it('Should todoReducer have TOG action on state', () => {
        const action = {
            type: 'toggle',
            payload: 2
        };
        const applyReducer = todoReducer(todosMock, action);
        expect(applyReducer.length).toBe(3);
        expect(applyReducer[1].done).toBeTruthy();
    });

    it('Should todoReducer have TOG_OLD action on state', () => {
        const action = {
            type: 'toggle-old',
            payload: 3
        };
        const applyReducer = todoReducer(todosMock, action);
        expect(applyReducer.length).toBe(3);
        expect(applyReducer[2].done).toBeFalsy();
    });
});
