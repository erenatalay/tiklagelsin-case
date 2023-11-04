import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import SearchInput from './SearchInput';
describe('search input unit tests', () => {
    it('is rendered correctly', () => {
        render(
            <SearchInput
            />);

        const componentElement = screen.getByTestId('searchbar-input');
        expect(componentElement).toBeDefined();
    });

    it('should trigger search when typed', () => {
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


