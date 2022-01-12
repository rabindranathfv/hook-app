const ADD = 'add';
const DEL ='delete';
const TOG = 'toggle';
const TOG_OLD = 'toggle-old';

export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case ADD:
            return [ ...state, action.payload ];
        case DEL:
            return state.filter( todo => todo.id !== action.payload );
        case TOG: 
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        case TOG_OLD:
            return state.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }


}