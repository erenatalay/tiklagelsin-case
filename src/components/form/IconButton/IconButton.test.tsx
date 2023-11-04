import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import IconButton from './IconButton';

describe('IconButton unit tests', () => {
    it('should render icon, color, size when they are given', () => {
        const { getByTestId } = render(<IconButton name='ab-testing' size={30} color='black' />);
        
        const iconButton = getByTestId('button-icon'); 
        
        expect(iconButton).toBeDefined(); 
    });

    it('should trigger onPress when pressed', () => {
        const mockPress = jest.fn();
        const { getByTestId } = render(<IconButton name='ab-testing' size={30} color='black' onPress={mockPress} />);
        
        const touchable = getByTestId('button-icon'); 
        
        fireEvent.press(touchable);
        expect(mockPress).toBeCalled();
    });
});
