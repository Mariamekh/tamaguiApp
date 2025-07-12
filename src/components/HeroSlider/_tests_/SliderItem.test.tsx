import React, {act} from 'react';
import {fireEvent} from '@testing-library/react-native';
import {SliderItem} from '../SliderItem';
import {renderWithTheme} from '../../../../test/test-utils';

const slide = {
  id: '1',
  title: 'Mega Win',
  subtitle: 'Spin now!',
  image: 'https://via.placeholder.com/300',
  cta: 'Play Now',
};

describe('SliderItem', () => {
  it('renders correctly with props', () => {
    const {getByText} = renderWithTheme(
      <SliderItem
        item={slide}
        loading={false}
        onLoad={jest.fn()}
        onPress={jest.fn()}
        onTouchStart={jest.fn()}
      />,
    );

    expect(getByText('Mega Win')).toBeTruthy();
    expect(getByText('Spin now!')).toBeTruthy();
    expect(getByText('Play Now')).toBeTruthy();
  });

  it('shows loading spinner when loading is true', () => {
    const {getByTestId} = renderWithTheme(
      <SliderItem
        item={slide}
        loading={true}
        onLoad={jest.fn()}
        onPress={jest.fn()}
        onTouchStart={jest.fn()}
      />,
    );

    expect(getByTestId('loading-spinner')).toBeTruthy();
  });

  it('calls onPress when CTA button is pressed', async () => {
    const onPress = jest.fn();

    const {getByText} = renderWithTheme(
      <SliderItem
        item={slide}
        loading={false}
        onLoad={jest.fn()}
        onPress={onPress}
        onTouchStart={jest.fn()}
      />,
    );

    await act(async () => {
      fireEvent.press(getByText('Play Now'));
    });
    expect(onPress).toHaveBeenCalled();
  });
});
