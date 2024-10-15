module.exports = {
  upgrade: true,
  reject: [
    'react-native-navigation',
    '@types/react-native',
    'message2call',
    'react',
    'react-native',
    'react-native-pager-view',
    'react-native-navigation',
    '@react-native/metro-config',
    '@react-native/babel-preset',
    '@react-native/typescript-config',
  ],

  // target: 'patch',
  // filter: [
  //   '@types/react-native',
  //   'react',
  //   'react-native',
  //   '@react-native/metro-config',
  //   '@react-native/babel-preset',
  //   '@react-native/typescript-config',
  // ],
}
