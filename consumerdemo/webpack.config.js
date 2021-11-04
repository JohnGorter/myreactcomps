const plugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx$|\.es6$|\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins:[
        new plugin({template:'./src/index.html'})
    ]
}