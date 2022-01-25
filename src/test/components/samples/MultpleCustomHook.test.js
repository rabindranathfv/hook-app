import React from 'react';
import { shallow } from 'enzyme';

import { MultpleCustomHook } from '../../../components/samples/MultpleCustomHook';
import { useFetch } from '../../../hooks/useFetch';
import { useCounterQuote } from '../../../hooks/useCounterQuote';

jest.mock('../../../hooks/useFetch',
  () => {
    return {
        useFetch: (active = true) => {
        return active ? useFetchOKMock : useFetchInitMock;
      }
    }
  }
);

const useFetchOKMock = { 
    loading: false, 
    data:  [{
        quote_id: 2,
        quote: 'Stay out of my territory.',
        author: 'Walter White',
        series: 'Breaking Bad'
    }],
    error: null
}

const useFetchInitMock = { 
    loading: true, 
    data:  null,
    error: false
}

jest.mock('../../../hooks/useCounterQuote',
  () => {
    return {
        // you can also write with return in the same sentence
        // useCounterQuote: () => ({
        //         add: () => {},
        //         quoteId: 10
        // })
        useCounterQuote: () => {
            return {
                add: () => {},
                quoteId: 10
            }
        }
    }
  }
);
describe('MultpleCustomHook::', () => {

    let wrapper = shallow( <MultpleCustomHook />);

    beforeEach(() => {
        wrapper = shallow(< MultpleCustomHook />);
    });

    afterEach(() => {
        jest.restoreAllMocks();   
    });

    it('Should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should should loading is false, quote OK and author OK', () => {
        useFetch();
        const loading = wrapper.find('.alert-info');
        const quote = wrapper.find('.mb-0');
        const author = wrapper.find('.blockquote-footer');
        
        expect(loading).toEqual({});
        expect(quote.text().trim()).toBe(useFetchOKMock.data[0].quote);
        expect(author.text().trim()).toBe(useFetchOKMock.data[0].author)
    });


    it('Should have add function for get next Quote', () => {
        useCounterQuote();
        const btnAdd = wrapper.find('.btn-outline-primary').at(0).simulate('click');
        expect(btnAdd.exists()).toBe(true);
    });
});