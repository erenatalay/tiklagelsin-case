import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import {View,SafeAreaView,Text} from './Theme';

describe('Theme  unit tests', () => {
    it('should render View when it is given', () => {
        render(<View />);
        const componentElement = screen.getByTestId('theme-view');
        expect(componentElement).toBeDefined();
    });

    it('should render SafeAreView when it is given', () => {
        render(<SafeAreaView  />);
        const componentElement = screen.getByTestId('theme-safeareaview');
        expect(componentElement).toBeDefined();
    });
    it('should render Text when it is given', () => {
        render(<Text />);
        const componentElement = screen.getByTestId('theme-text');
        expect(componentElement).toBeDefined();
    });

    it('should render text when it is given', () => {
        const wrapper = render(<Text>test</Text>);
    
        const text = wrapper.getByTestId('theme-text').children[0];
    
        expect(text).toBe('test');
      });

    
     
});