// metro.config.js
const os = require('node:os');
const path = require('node:path');
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

config.cacheStores = ({ FileStore }) => [
  new FileStore({
    root: path.join(os.homedir(), "metro-cache"),
  }),
];

// Force Metro to use our modified source files instead of compiled ones
config.resolver = {
  ...config.resolver,
  alias: {
    ...config.resolver.alias,
    // Force use of source files instead of compiled ones
    '@expo/metro-runtime/build/error-overlay/UI/LogBoxStyle': path.resolve(__dirname, 'node_modules/@expo/metro-runtime/src/error-overlay/UI/LogBoxStyle.ts'),
    '@expo/metro-runtime/build/error-overlay/overlay/LogBoxInspectorHeader': path.resolve(__dirname, 'node_modules/@expo/metro-runtime/src/error-overlay/overlay/LogBoxInspectorHeader.tsx'),
  },
};

module.exports = withNativeWind(config, { input: "./global.css" });
