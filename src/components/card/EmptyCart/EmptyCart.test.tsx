import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import EmptyCart from './EmptyCart';

describe('Empty Cart unit tests', () => {
    it('should render  when it is given', () => {
        render(<EmptyCart onPress={() => null}/>);
        const componentElement = screen.getByTestId('empty-cart');
        expect(componentElement).toBeDefined();
    });

      it('should trigger onPress button when pressed', () => {
        const mockPress = jest.fn();
        const wrapper = render(<EmptyCart  onPress={mockPress}  />);
        const touchable = wrapper.getByTestId('empty-cart-button');
        fireEvent(touchable, 'onPress');
        expect(mockPress).toBeCalled();
      });

});