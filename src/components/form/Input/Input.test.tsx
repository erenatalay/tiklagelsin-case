import React from 'react';
import Input from './Input';
import { render, fireEvent } from '@testing-library/react-native';
describe('Input component tests', () => {
    it('is rendered correctly', () => {
        expect(<Input
            name="inputName"
            placeholder="Enter text"
            changeText={() => null}
            blur={() => null}

        />
        ).toMatchSnapshot();
    });

    it('should trigger input when typed', () => {
        const mockSearch = jest.fn();
        const wrapper = render(
            <Input
                name="inputName"
                placeholder="Enter text"
                changeText={mockSearch}
                blur={() => null}

            />
        );
        const input = wrapper.getByTestId('text-input');
        fireEvent(input, 'onChangeText', 'test');
        expect(mockSearch).toHaveBeenCalled();
    });
});

