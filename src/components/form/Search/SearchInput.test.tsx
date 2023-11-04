import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchInput from './SearchInput';
describe('Input component tests', () => {
    it('is rendered correctly', () => {
        expect(<SearchInput
            placeholder="Enter text"
        />
        ).toMatchSnapshot();
    });

    it('should trigger Password when typed', () => {
        const mockSearch = jest.fn();
        const wrapper = render(
            <SearchInput
                placeholder="Enter text"
                onChangeText={mockSearch}
            />
        );
        const input = wrapper.getByTestId('searchbar-input');
        fireEvent(input, 'onChangeText', 'test');
        expect(mockSearch).toHaveBeenCalled();
    });
});

