module.exports={
    mode:'development',
    entry:"./src/index.js",
    output:{
        path: __dirname + "/build/",
        filename: "bundle.js"
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
            }
        ]
    }
}
