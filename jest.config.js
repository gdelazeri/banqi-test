module.exports = {
  globals: {
    "__DEV__": true,
  },
  moduleFileExtensions: ["ios.js", "native.js", 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native"
      + "|react-navigation-tabs"
      + "|react-native-splash-screen"
      + "|react-native-screens"
      + "|react-native-reanimated"
    + ")/)",
  ],
};