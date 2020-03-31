var path = require('path');

module.exports = (env, options) => {
    const isDevMode = options.mode === "development";

    return {
        devtool: isDevMode ? "source-map" : false,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'index.js',
            libraryTarget: 'umd'
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },
        module: {
            rules: [
                {
                    test: /\.m?(js|jsx)$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /(node_modules|build)/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        }
    }
};
