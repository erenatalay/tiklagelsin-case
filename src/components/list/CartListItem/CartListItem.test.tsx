import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import CartListItem from './CartListItem';

describe('Card list unit tests', () => {
    it('should render text when it is given', () => {
        render(<CartListItem item={[] as any} decrement={() => null} increment={() => null} />);
        const componentElement = screen.getByTestId('cart-list');
        expect(componentElement).toBeDefined();
    });

      it('should trigger onPress increment when pressed', () => {
        const mockPress = jest.fn();
        const wrapper = render(<CartListItem item={[] as any} decrement={() => null} increment={mockPress}  />);
        const touchable = wrapper.getByTestId('plus-button');

        fireEvent(touchable, 'onPress');
        expect(mockPress).toBeCalled();
      });

      it('should trigger onPress decrement when pressed', () => {
        const mockPress = jest.fn();
        const wrapper = render(<CartListItem item={[] as any} decrement={mockPress} increment={() => null}  />);
        const touchable = wrapper.getByTestId('minus-button');

        fireEvent(touchable, 'onPress');
        expect(mockPress).toBeCalled();
      });
});