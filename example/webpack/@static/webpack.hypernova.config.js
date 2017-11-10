// https://blog.larah.me/2017/04/10/react-server-side-rendering/

const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
    entry: './hypernova/server.ts',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, "../hypernova"),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                query: {
                    // Use this to point to your tsconfig.json.
                    configFileName: './tsconfig.json'
                }
            },
        ]
    },
    resolve: {
        extensions: [".webpack.js", "web.js", ".ts", ".tsx", ".js"],
        modules: ["node_modules"]
    }
};