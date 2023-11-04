import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import ProductListItem from './ProductListItem';

describe('Product list unit tests', () => {
    it('should render text when it is given', () => {
        render(<ProductListItem item={[] as any}  />);
        const componentElement = screen.getByTestId('product-list');
        expect(componentElement).toBeDefined();
    });

      it('should trigger onPress add cart when pressed', () => {
        const mockPress = jest.fn();
        const wrapper = render(<ProductListItem item={[] as any}  onPress={mockPress}/>);
        const touchable = wrapper.getByTestId('add-cart-button');

        fireEvent(touchable, 'onPress');
        expect(mockPress).toBeCalled();
      });
});