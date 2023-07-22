module.exports = {
  include: './src',
  loader: require.resolve('babel-loader'),
  options: {
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src/App'],
          alias: {
            '@components': './src/components',
          },
        },
      ],
    ],
    cacheDirectory: true,
  },
};
