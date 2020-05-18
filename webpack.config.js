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
                loaders:[
                    {
                        loader: 'babel-loader',
                        options:
                        {
                            babelrc: true
                        }
                    }
                ]
                
            }
        ]
    }
}
