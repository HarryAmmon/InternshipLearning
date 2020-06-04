const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports={
    mode:'development',
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        hot: true,
        port: 3000,
        publicPath: '/',
        historyApiFallback: true
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders:[
                    {
                        loader: 'babel-loader',
                        options:
                        {
                            babelrc: true
                        }
                    }
                ]
            },
            {
                test: /\.s?[ac]ss$/i,
                loaders:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules:true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loaders:[
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images'
                        }
                    },
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('./index.html'),
        })
    ]
}
