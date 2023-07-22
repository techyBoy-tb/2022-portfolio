var MODULE_RESOLVER = [
  'module-resolver',
  {
    extensions: ['.ts', '.tsx', '.json'],
    alias: {
      '@api': './api',
      '@theme': './src/theme',
      '@data': './src/data',
      '@utils': './src/utils',
      '@hooks': './src/hooks',
      '@assets': './src/assets',
      '@screens': './src/screens',
      '@graphql': './src/data/graphql',
      '@navigators': './src/navigators',
      '@components': './src/components',
    },
  },
];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'react',
      ['@babel/preset-env', { targets: { node: 'current' } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
    plugins: [MODULE_RESOLVER],
  };
};
