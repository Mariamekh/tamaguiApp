const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const projectRoot = __dirname;

const config = {
  resolver: {
    extraNodeModules: {
      '@tamagui/core': path.resolve(projectRoot, 'node_modules/@tamagui/core'),
      '@tamagui/config': path.resolve(
        projectRoot,
        'node_modules/@tamagui/config',
      ),
      '@tamagui/react-native-config': path.resolve(
        projectRoot,
        'node_modules/@tamagui/react-native-config',
      ),
    },
  },
  watchFolders: [
    path.resolve(projectRoot, 'node_modules/@tamagui/core'),
    path.resolve(projectRoot, 'node_modules/@tamagui/config'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(projectRoot), config);
