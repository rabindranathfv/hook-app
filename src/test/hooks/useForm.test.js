import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('UseForm::', () => {
    const initialStateMock = { name: 'rabindranath', email: 'test@email.com'};
    const inputChangeTest = { 
        target: { 
            name: 'name', 
            value: 'fulanito'
        }
    }
    
    it('Should custom useForm initialice with right values', () => {
        const { result } = renderHook( () => useForm(initialStateMock))
        const [ values, handleInputChange, reset] = result.current

        expect(values).toEqual(initialStateMock);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    it('should custom useForm reset name', () => {
        const { result } = renderHook( () => useForm(initialStateMock));
        const [ values, handleInputChange, reset ] = result.current;

       act(() => {
           handleInputChange(inputChangeTest);
       })

       act( () => {
         reset();
       });

       expect(values.name).toBe(initialStateMock.name);
       expect(typeof reset).toBe('function');
    });

    it('should update name value with handleInputChange', () => {
        
        const { result } = renderHook( () => useForm(initialStateMock));
        const [ , handleInputChange ] = result.current;
     
        act(() => {
            handleInputChange(inputChangeTest);
        });
     
        const [ values ] = result.current;
        expect( values ).toEqual( { ...initialStateMock, name: inputChangeTest.target.value} );
    });

})
