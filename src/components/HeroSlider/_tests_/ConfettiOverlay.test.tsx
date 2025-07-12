import React from 'react';
import {render} from '@testing-library/react-native';
import {ConfettiOverlay} from '../ConfettiOverlay';

jest.mock('react-native-simple-confetti', () => {
  return ({testID}: {testID?: string}) => (
    <>{testID && <div testID={testID} />}</>
  );
});

describe('ConfettiOverlay', () => {
  it('does not render when visible is false', () => {
    const {queryByTestId} = render(<ConfettiOverlay visible={false} />);
    expect(queryByTestId('confetti')).toBeNull();
  });

  it('renders Confetti when visible is true', () => {
    const {getByTestId} = render(<ConfettiOverlay visible={true} />);
    expect(getByTestId('confetti')).toBeTruthy();
  });
});
