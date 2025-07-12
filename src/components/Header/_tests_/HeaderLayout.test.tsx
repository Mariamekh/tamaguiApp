import React from 'react';
import {render as rtlRender, fireEvent} from '@testing-library/react-native';
import {TamaguiProvider} from 'tamagui';
import {HeaderLayout} from '../HeaderLayout';
import config from '../../../../tamagui.config';

const render = (ui: React.ReactElement) =>
  rtlRender(<TamaguiProvider config={config}>{ui}</TamaguiProvider>);

describe('HeaderLayout', () => {
  const mockOnRefresh = jest.fn();
  const mockSetTheme = jest.fn();

  const defaultProps = {
    userName: 'Mari',
    displayedBalance: 123.45,
    isLoading: false,
    onRefresh: mockOnRefresh,
    setTheme: mockSetTheme,
    theme: 'light' as const,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders logo and user info', () => {
    const {getByText} = render(<HeaderLayout {...defaultProps} />);
    expect(getByText('LOGOBET')).toBeTruthy();
    expect(getByText('Welcome Back, Mari!')).toBeTruthy();
    expect(getByText('Balance: $123.45')).toBeTruthy();
  });

  it('shows spinner icon when isLoading is true', () => {
    const {getByTestId} = render(
      <HeaderLayout {...defaultProps} isLoading={true} />,
    );
    expect(getByTestId('spinner')).toBeTruthy();
  });

  it('calls onRefresh when refresh button is pressed', () => {
    const {getByTestId} = render(<HeaderLayout {...defaultProps} />);
    const refreshButton = getByTestId('refresh-button');
    fireEvent.press(refreshButton!);
    expect(mockOnRefresh).toHaveBeenCalled();
  });

  it('calls setTheme on ThemeToggle click', () => {
    const {getByTestId} = render(<HeaderLayout {...defaultProps} />);
    fireEvent.press(getByTestId('theme-toggle'));
    expect(mockSetTheme).toHaveBeenCalled();
  });
});
