import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('UseForm::', () => {
    const initualStateMock = { name: 'rabindranath', email: 'test@email.com'}
    
    it('Should custom useForm initialice with right values', () => {
        const { result } = renderHook( () => useForm(initualStateMock))

        expect(result.current[0]).toEqual(initualStateMock);
        expect(typeof result.current[1]).toBe('function');
        expect(typeof result.current[2]).toBe('function');
    });

})
