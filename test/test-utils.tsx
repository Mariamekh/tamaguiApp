import React from 'react';
import {render} from '@testing-library/react-native';
import {TamaguiProvider, Theme} from 'tamagui';
import config from '../tamagui.config';

export const renderWithTheme = (
  ui: React.ReactElement,
  theme: 'light' | 'dark' = 'light',
) =>
  render(
    <TamaguiProvider config={config}>
      <Theme name={theme}>{ui}</Theme>
    </TamaguiProvider>,
  );
