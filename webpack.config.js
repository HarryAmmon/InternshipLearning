const path = require('path');

module.exports={
    mode:'development',
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
        // publicPath: "/assets/"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
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
                test: /\.module\.css/,
                loaders:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules:true,
                        }
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
    }
}
