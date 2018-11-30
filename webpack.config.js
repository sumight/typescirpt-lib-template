const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path') 
module.exports = {
  entry: ['./src/main.ts'],
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, './src'),
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            // disable type checker - we will use it in fork plugin
            // transpileOnly: true
          },
        },
      ],
    },]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new DeclarationBundlerPlugin({
    //   moduleName:'avc',
    //   out:'./bundle.d.ts',
    // })
  ]
}