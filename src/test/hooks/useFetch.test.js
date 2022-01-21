import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('useFetch::', () => {

    const urlMock = 'https://www.breakingbadapi.com/api/quotes/2';
    const initialStateMock = { data: null, loading: true, error: null};
    
    it('Should custom useFetch return default values', () => {
        const { result } = renderHook( () => useFetch(urlMock));
        const { data, loading, error } = result.current;

        expect({ data, loading, error }).toEqual(initialStateMock);
    });
    it('should custmon useFetch update data', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch(urlMock));
        await waitForNextUpdate({timeout:5000});
        const { data, loading, error } = result.current;

        expect(data).toEqual([{
            quote_id: 2,
            quote: 'Stay out of my territory.',
            author: 'Walter White',
            series: 'Breaking Bad'
        }]);
        expect(loading).toBeFalsy();
        expect(error).toBeFalsy();
    });

    // it('should custmon useFetch apply subs', () => {
    //     const { result } = renderHook( () => useFetch(initialStateMock))
    //     const { subs } = result.current;

    //     act(() => {
    //         subs();
    //     });
    //     const { quoteId } = result.current;
        
    //     expect(quoteId).toEqual(9);
    //     expect(typeof subs).toBe('function');
    // });

    // it('should custmon useFetch apply reset successfuly', () => {
    //     const { result } = renderHook( () => useFetch(initialStateMock))
    //     const { subs, reset } = result.current;

    //     act(() => {
    //         subs();
    //     });
        
    //     act(() => {
    //         reset();
    //     });
    //     const { quoteId } = result.current;
        
    //     expect(quoteId).toEqual(10);
    //     expect(typeof reset).toBe('function');
    // });


})
