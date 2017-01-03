module.exports = {
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*'
  ],
  stripPrefix: 'dist',
  runtimeCaching: [{
    urlPattern: /node-hnapi\.herokuapp\.com/,
    handler: 'networkFirst'
  }]
};
