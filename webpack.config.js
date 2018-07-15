const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const SETTINGS = require('./settings');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
} else if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: '.env.development' });
}

const production = process.env.NODE_ENV === 'production';
const fileNamePrefix = production ? '.[chunkhash]' : '';

const pluginsBase = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    title: 'Expensify',
    // filename: 'index.html',
    excludeChunks: ['base'],
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
      collapseInlinespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
    },
    inject: 'body',
  }),
  new FaviconsWebpackPlugin({
    logo: './favicon.png',
    background: SETTINGS.THEME_COLOR,
    icons: SETTINGS.FAVICONS,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
    },
    'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
    'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
    'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
    'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
    'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
    'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
  }),
  new MomentLocalesPlugin({
    localesToKeep: ['es-us', 'ru'],
  }),
];

const developmentPlugins = [
  ...pluginsBase,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  // new OpenBrowserPlugin({ url: `http://localhost:${SETTINGS.PORT}` }),
];
const productionPlugins = [
  ...pluginsBase,
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  }),
  new WebpackChunkHash(), //webpack-chunk-hash
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: m => m.context && m.context.includes('node_modules'),
    filename: 'js/vendor/vendor.[chunkhash].js',
    // filename: 'vendor.js',
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime',
    chunks: ['vendor'],
    minChunks: Infinity,
    filename: 'js/runtime/runtime.[chunkhash].js',
    // filename: 'vendor.js',
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new PurifyCSSPlugin({
    // Give paths to parse for rules. These should be absolute!
    paths: glob.sync(path.join(__dirname, 'src/*.html')),
    minimize: true,
  }),
  new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    // filename: 'styles/[name].css',
    allChunks: true,
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new UglifyJSPlugin(),
  // new webpack.optimize.UglifyJsPlugin({
  //   beautify: false,
  //   mangle: true,
  //   sourcemap: true,
  //   compress: {
  //     warnings: false, // Suppress uglification warnings
  //     pure_getters: true,
  //     conditionals: true,
  //     join_vars: true,
  //     if_return: true,
  //     unsafe: true,
  //     sequences: true,
  //     booleans: true,
  //     loops: true,
  //     unused: false,
  //     drop_console: true,
  //     unsafe_comps: true,
  //     screw_ie8: true,
  //   },
  //   output: {
  //     comments: false,
  //   },
  //   exclude: [/\.min\.js$/gi], // skip pre-minified libs
  // }),
];

const configDev = {
  app: [
    'react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './src/index.tsx',
  ],
};

const configProd = {
  app: ['babel-polyfill', './src/index.tsx'],
  vendor: [
    'react',
    'redux',
    'react-dom',
    'react-router-dom',
    'styled-components',
  ],
};

const config = production ? configProd : configDev;

module.exports = {
  context: __dirname,
  entry: {
    app: config.app,
    vendor: configProd.vendor,
  },
  output: {
    filename: `js/[name]${fileNamePrefix}.js`,
    chunkFilename: 'js/chunks/chunk.[name]-[chunkhash].js',
    pathinfo: true,
    path: path.resolve(__dirname, 'public'),
    // publicPath: '/',
    // filename: '[name].bundle.js',
  },
  plugins: production ? productionPlugins : developmentPlugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          // 'react-hot-loader',
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'transform-class-properties',
              ],
              presets: ['env', 'react'],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
              loader: 'ts-loader',
              options: {
                  happyPackMode: true, // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
                  getCustomTransformers: path.join(__dirname, './webpack.ts-transformers.js'),
              }
          }
      ],
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.jsx?/,
        loader: 'stylelint-custom-processor-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'img-loader',
          options: {
            enabled: process.env.NODE_ENV === 'production',
            gifsicle: {
              interlaced: false,
            },
            mozjpeg: {
              progressive: true,
              arithmetic: false,
            },
            optipng: false, // disabled
            pngquant: {
              floyd: 0.5,
              speed: 2,
            },
            svgo: {
              plugins: [
                { removeTitle: true },
                { convertPathData: false },
              ],
            },
          },
        },
      },
    ],
  },

  devServer: {
    port: SETTINGS.PORT,
    compress: true,
    disableHostCheck: true,
    inline: true,
    hot: true,
    // watchContentBase: true,
    // contentBase: path.join(__dirname, 'dist'),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    // historyApiFallback: {
    //   rewrites: [{
    //     from: /\/(\d\.)?app\.js(\.map)?/,
    //     to: context => context.match[0]
    //   }],
    // },
    // // show compile errors
    overlay: true,
    publicPath: '/',
    // webpack build logs config
    stats: {
      colors: true,
      reasons: true,
      chunks: false,
    },
  },

  // devtool: production ? 'cheap-module-eval-source-map' : 'source-map',
  devtool: production ? false : 'cheap-module-eval-source-map',
  // devtool: production ? 'cheap-module-source-map' : 'source-map',
  cache: false,
  resolve: {
    modules: [
      path.join(__dirname, 'public'),
      'node_modules', 'shared',
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '*'],
  },
};
