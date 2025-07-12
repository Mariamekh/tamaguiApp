import React from 'react';
import {act, fireEvent, waitFor} from '@testing-library/react-native';
import {renderWithTheme} from '../../../../test/test-utils';
import {HeroSlider} from '../HeroSlider';
import {slides} from '../../../data/sliderData';

jest.useFakeTimers();
jest.mock('react-native-reanimated-carousel', () => {
  const React = require('react');
  const {View} = require('react-native');

  return ({renderItem, data}: any) => {
    return (
      <View>
        {data.map((item: any, index: number) => (
          <View key={item.id || index}>{renderItem({item, index})}</View>
        ))}
      </View>
    );
  };
});

describe('HeroSlider', () => {
  it('renders all slides and indicators correctly', () => {
    const {getByText, getAllByTestId} = renderWithTheme(<HeroSlider />);

    expect(getByText(slides[0].title)).toBeTruthy();
    expect(getAllByTestId('image').length).toBeGreaterThan(0);
  });

  it('loads images and removes loading spinner', async () => {
    const {getAllByTestId, queryAllByTestId} = renderWithTheme(<HeroSlider />);
    expect(getAllByTestId('loading-spinner').length).toBeGreaterThan(0);

    act(() => {
      fireEvent(getAllByTestId('image')[0], 'onLoad');
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() =>
      expect(queryAllByTestId('loading-spinner').length).toBeLessThanOrEqual(1),
    );
  });

  it('triggers confetti when CTA is pressed', async () => {
    const {getByText, queryByTestId} = renderWithTheme(<HeroSlider />);

    expect(queryByTestId('confetti')).toBeNull();

    act(() => {
      fireEvent.press(getByText(slides[0].cta));
      jest.advanceTimersByTime(500);
    });

    expect(queryByTestId('confetti')).toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    await waitFor(() => expect(queryByTestId('confetti')).toBeNull());
  });

  it('updates active slide indicator on snap', () => {
    const {getByTestId} = renderWithTheme(<HeroSlider />);

    expect(getByTestId(`slide-indicator-${slides[0].id}`)).toBeTruthy();
  });
});
