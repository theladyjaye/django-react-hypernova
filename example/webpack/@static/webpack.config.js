var webpack = require("webpack");
var path = require("path");

var publicPath = '/static/';


var config = {
    context: path.resolve(__dirname),
    entry: {
        "js/common":  "./frontend/common.ts",
        "js/index":  "./frontend/index.ts",
    },
    output: {
        path:          path.resolve(__dirname, "../static"),
        filename:      "[name].js",
        publicPath:    publicPath,
        chunkFilename: "[id].chunck.[ext]"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name:     "js/common",
          filename: "js/common.js"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                // use: "awesome-typescript-loader",
                query: {
                    // Use this to point to your tsconfig.json.
                    configFileName: './tsconfig.json'
                }
            }
        ]
    },

    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", "web.js", ".ts", ".tsx", ".js"],
        modules: ["node_modules"]
    }

}

module.exports = config
