import '@testing-library/jest-native/extend-expect';
import 'react-native-reanimated/jestUtils';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
