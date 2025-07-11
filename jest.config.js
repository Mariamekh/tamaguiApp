const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    extraNodeModules: {
      '@tamagui/core': path.resolve(__dirname, 'node_modules/@tamagui/core'),
      '@tamagui/config': path.resolve(
        __dirname,
        'node_modules/@tamagui/config',
      ),
      '@tamagui/react-native-config': path.resolve(
        __dirname,
        'node_modules/@tamagui/react-native-config',
      ),
      tamagui: path.resolve(__dirname, 'node_modules/tamagui'),
    },
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
