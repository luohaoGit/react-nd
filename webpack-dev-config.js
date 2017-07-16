/**
 * 开发模式下的webpack配置
 */

const path = require('path');
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import rucksackCss from 'rucksack-css'
import px2rem from 'postcss-pxtorem'
const px2remOpts = {
    rootValue: 100,
    propWhiteList: []
};

export default {
    devtool: 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    entry: [
        './src/webpack-public-path',  // 服务器静态资源路径配置，保证首先载入
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/js/index.js')
    ],
    target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: {
        path: `${__dirname}/src`, // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
            template: 'src/index.html',
            title: '开发模式',
            favicon: './src/favicon.ico',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            hash: true,
            // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
            // 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新！
            inject: 'body'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                debug: true,
                noInfo: true, // set to false to see a list of every file being bundled.
                postcss: () => [precss, autoprefixer, rucksackCss, px2rem(px2remOpts)]
            }
        })
    ],
    resolve: {
        extensions: ['.web.js', '.js', '.json'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, '../node_modules')
        ],

        // 路径别名
        alias: {
            app: path.resolve(__dirname, 'src/js'),
            style: path.resolve(__dirname, 'src/styles')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/js'),
                use: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
                    'postcss-loader?parser=postcss-scss'
                ]
            },
            // 组件样式，需要私有化，单独配置

            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/styles'),
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader?parser=postcss-scss'
                ]
            },
            // 公有样式，不需要私有化，单独配置

            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'node_modules'),
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },

            {
                test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
                use: 'url-loader?limit=10000'
            },
            {
                test: /\.(gif|jpe?g|png|ico)$/,
                use: 'url-loader?limit=10000'
            }
        ]
    }
};
