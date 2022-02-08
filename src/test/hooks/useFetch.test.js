import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('useFetch::', () => {

    const urlMock = 'https://www.breakingbadapi.com/api/quotes/2';
    const urlErrorMock = 'https://reqres.in/apiFF/users?page=2';
    const initialStateMock = { data: null, loading: true, error: null};
    const breakbadRespMock = [{
        quote_id: 2,
        quote: 'Stay out of my territory.',
        author: 'Walter White',
        series: 'Breaking Bad'
    }];
    
    it('Should custom useFetch return default values', () => {
        const { result } = renderHook( () => useFetch(urlMock));
        const { data, loading, error } = result.current;

        expect({ data, loading, error }).toEqual(initialStateMock);
    });
    it('should custmon useFetch update data', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch(urlMock));
        await waitForNextUpdate({timeout:5000});
        const { data, loading, error } = result.current;

        expect(data).toEqual(breakbadRespMock);
        expect(loading).toBeFalsy();
        expect(error).toBeFalsy();
    });

    it('should custmon useFetch fails and update error', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch(urlErrorMock));
        await waitForNextUpdate({timeout:5000});
        const { data, loading, error } = result.current;

        expect(data).toBeFalsy();
        expect(loading).toBeTruthy();
        expect(error).toEqual('could not load phrase');
    });

})
