import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ErrorText from './ErrorText';


describe('Error Text unit tests', () => {
  it('should render text when it is given', () => {
    const wrapper = render(<ErrorText error='text' touched={true}/>);

    const text = wrapper.getByTestId('error-text').children[0];

    expect(text).toBe('text');
  });


});