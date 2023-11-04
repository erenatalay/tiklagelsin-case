import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PasswordInput from './PasswordInput';
describe('Input component tests', () => {
    it('is rendered correctly', () => {
        expect(<PasswordInput
            name="inputName"
            placeholder="Enter text"
            changeText={() => null}
            blur={() => null}

        />
        ).toMatchSnapshot();
    });

    it('should trigger Password when typed', () => {
        const mockSearch = jest.fn();
        const wrapper = render(
            <PasswordInput
                name="inputName"
                placeholder="Enter text"
                changeText={mockSearch}
                blur={() => null}

            />
        );
        const input = wrapper.getByTestId('password-input');
        fireEvent(input, 'onChangeText', 'test');
        expect(mockSearch).toHaveBeenCalled();
    });
});

