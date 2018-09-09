const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const getOnEnv = (developmentEnv) => JSON.stringify(
  developmentEnv
)

module.exports = {
  devtool: 'eval',
  entry: ['./src/index'],
  mode: process.env.NODE_ENV,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    mainFields: ['main', 'module'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.jpe', '.jpeg', '.png', '.gif', '.svg']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: path.join(__dirname, 'src'),
      use: [{
        loader: 'ts-loader'
      }]
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      include: path.join(__dirname, 'src'),
      use: [{
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: (file) => process.env.NODE_ENV === 'production'? '[hash].[ext]':'[path][name].[ext]'
        }  
      }]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'ENV': JSON.stringify(process.env.BUILD_ENV),
      'AI_CHAN_TOKEN': getOnEnv(
        'YourBOTTOKENmustBEputINhere' //place your bot's token here and keep this on secret!
      ),
      'PREFIX': getOnEnv(
        '!' //Your PREFIX command
      )
    })
  ]
}
