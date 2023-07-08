import * as webpack from 'webpack';
import * as path from 'path'
import * as CopyPlugin from "copy-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
const distDir = "dist_post_ld"


const config: webpack.Configuration & { devServer: any } = {
  entry: {
    app: './src/main.ts',
    vendors: ['phaser']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, distDir)
  },

  mode: 'development',

  devServer: {
    static: path.resolve(__dirname, distDir),
    // https: true
  },

  plugins: [
    new CopyPlugin(
      {
        patterns:  [
          {
            from: path.resolve(__dirname, 'assets', '**', '*'),
            to: path.resolve(__dirname, distDir)
          }
        ],
      }
     ),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

export default config;