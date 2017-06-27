var webpack = require('webpack');
var path = require('path');


module.exports = {
    context: __dirname + '/',
    entry: {
        app: './index.js',
        vendor: './vendor.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist',
        filename: 'you-are-here.bundle.js'
    },
    module: {
        rules: [

            //SCSS
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')({browsers: ['last 2 versions', 'ie >= 8']}),
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }]
            },

//HTML TEMPLATE LOADER
            {
                test: /\.(htm|html)$/,
                use: [
                    {
                        loader: 'html-loader', // allows loading of images
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle.js"}),
        new webpack.HotModuleReplacementPlugin({}), // wont work with javaScript unless we use UI-router
        new webpack.NamedModulesPlugin()
    ],
    devtool: "#eval", // fast cheap source maps  // in order for css source maps to work use '#source-map'
    devServer: {
        contentBase: path.join(__dirname, "/"),
        compress: true,
        port: 9000,
        hot: true,
        headers: {'Access-Control-Allow-Origin': '*'} // needed for hot.update.json
    },
    node: {
        fs: "empty"
    }
};

