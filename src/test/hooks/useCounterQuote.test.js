import { renderHook, act } from '@testing-library/react-hooks';
import { useCounterQuote } from '../../hooks/useCounterQuote';

describe('useCounterQuote::', () => {

    const initualStateMock = 10;
    
    it('Should custom useCounterQuote default values', () => {
        const { result } = renderHook( () => useCounterQuote())
        const { reset, add, subs,quoteId } = result.current;

        expect(quoteId).toEqual(1);
        expect(typeof reset).toBe('function');
        expect(typeof add).toBe('function');
        expect(typeof subs).toBe('function');
    });

    it('Should custom useCounterQuote initialice with right values', () => {
        const { result } = renderHook( () => useCounterQuote(initualStateMock))
        const { reset, add, subs,quoteId } = result.current;

        expect(quoteId).toEqual(10);
        expect(typeof reset).toBe('function');
        expect(typeof add).toBe('function');
        expect(typeof subs).toBe('function');
    });

    it('should custmon useCounterQuote apply reset', () => {
        const { result } = renderHook( () => useCounterQuote(initualStateMock + 10))
        const { reset, quoteId } = result.current;

        act(() => {
            reset();
        })

        expect(quoteId).toEqual(10);
        expect(typeof reset).toBe('function');
    });


})
