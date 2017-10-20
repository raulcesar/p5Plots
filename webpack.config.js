const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const stylus_plugin = require('stylus_plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                use: 
                    // 'style-loader', 
                    ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
                
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]
};

module.exports = config;