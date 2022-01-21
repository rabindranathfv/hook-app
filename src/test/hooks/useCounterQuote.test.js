import { renderHook, act } from '@testing-library/react-hooks';
import { useCounterQuote } from '../../hooks/useCounterQuote';

describe('useCounterQuote::', () => {

    const initialStateMock = 10;
    
    it('Should custom useCounterQuote default values', () => {
        const { result } = renderHook( () => useCounterQuote())
        const { reset, add, subs,quoteId } = result.current;

        expect(quoteId).toEqual(1);
        expect(typeof reset).toBe('function');
        expect(typeof add).toBe('function');
        expect(typeof subs).toBe('function');
    });

    it('Should custom useCounterQuote initial values', () => {
        const { result } = renderHook( () => useCounterQuote(initialStateMock))
        const { reset, add, subs,quoteId } = result.current;

        expect(quoteId).toEqual(10);
        expect(typeof reset).toBe('function');
        expect(typeof add).toBe('function');
        expect(typeof subs).toBe('function');
    });

    it('should custmon useCounterQuote apply add', () => {
        const { result } = renderHook( () => useCounterQuote(initialStateMock))
        const { add } = result.current;

        act(() => {
            add();
        });
        const { quoteId } = result.current;

        expect(quoteId).toEqual(11);
        expect(typeof add).toBe('function');
    });

    it('should custmon useCounterQuote apply subs', () => {
        const { result } = renderHook( () => useCounterQuote(initialStateMock))
        const { subs } = result.current;

        act(() => {
            subs();
        });
        const { quoteId } = result.current;
        
        expect(quoteId).toEqual(9);
        expect(typeof subs).toBe('function');
    });

    it('should custmon useCounterQuote apply reset successfuly', () => {
        const { result } = renderHook( () => useCounterQuote(initialStateMock))
        const { subs, reset } = result.current;

        act(() => {
            subs();
        });
        
        act(() => {
            reset();
        });
        const { quoteId } = result.current;
        
        expect(quoteId).toEqual(10);
        expect(typeof reset).toBe('function');
    });


})
