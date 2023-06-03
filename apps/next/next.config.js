const { withTamagui } = require('@tamagui/next-plugin');
const { join } = require('path');
const withTM = require('next-transpile-modules'); // pass the modules you would like to see transpiled

const boolVals = {
  true: true,
  false: false,
};

const disableExtraction =
  boolVals[process.env.DISABLE_EXTRACTION] ?? process.env.NODE_ENV === 'development';

if (disableExtraction) {
  console.log('Disabling static extraction in development mode for better HMR');
}

const transpilePackages = ['react-native', 'react-native-web', 'ui'];

const plugins = [
  withTM(transpilePackages),
  withTamagui({
    config: './tamagui.config.ts',
    components: ['ui', 'tamagui'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    disableExtraction,
    shouldExtract: (path) => {
      if (path.includes(join('packages', 'app'))) {
        return true;
      }
    },
    useReactNativeWebLite: false, // if enabled dont need excludeReactNativeWebExports
    excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'CheckBox', 'Touchable'],
  }),
];

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    output: 'standalone',
    reactStrictMode: false,
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {},
    modularizeImports: {},
    experimental: {
      scrollRestoration: true,
      legacyBrowsers: false,
      fullySpecified: false,
    },
  };
  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    };
  }
  return config;
};
