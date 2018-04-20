var join = require("path").join;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var UglifyPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: join(__dirname, "./dist"),
        filename: "bundle.js",
        library: "home"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: "file-loader?name=./img/[name].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
        //new UglifyPlugin()
    ],
    devtool: "source-map"
};
