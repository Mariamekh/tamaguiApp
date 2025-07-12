import React from 'react';
import {render} from '@testing-library/react-native';
import {Header} from '../Header';
import {HeaderLayout} from '../HeaderLayout';

jest.mock('../HeaderLayout', () => ({
  HeaderLayout: jest.fn(() => null),
}));

jest.mock('../../../hooks/useAnimatedBalance', () => ({
  useAnimatedBalance: jest.fn(),
}));

describe('Header', () => {
  const mockUseAnimatedBalance = require('../../../hooks/useAnimatedBalance')
    .useAnimatedBalance as jest.Mock;
  const mockOnRefresh = jest.fn();
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders HeaderLayout with correct props', () => {
    mockUseAnimatedBalance.mockReturnValue(99.99);

    render(
      <Header
        userName="Mari"
        balance={123.45}
        isLoading={false}
        onRefresh={mockOnRefresh}
        setTheme={mockSetTheme}
        theme="dark"
      />,
    );

    expect(HeaderLayout).toHaveBeenCalledWith(
      {
        userName: 'Mari',
        displayedBalance: 99.99,
        isLoading: false,
        onRefresh: mockOnRefresh,
        setTheme: mockSetTheme,
        theme: 'dark',
      },
      {},
    );
  });
});
