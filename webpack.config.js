var path = require('path');

/**
 * Info: We must keep the JS/JSX extensions in order to work with packages in node_modules
 *
 * Otherwise we would get errors
 */

module.exports = (env, options) => {
    const isDevMode = options.mode === "development";

    return {
        devtool: isDevMode ? "source-map" : false,
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            libraryTarget: 'umd'
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
        },
        module: {
            rules: [
                {
                    test: /\.m?(ts|js)x?$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /(node_modules|build)/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
        externals: {
          'react': 'react',
          'react-dom': 'react-dom',
          'react-router': 'react-router',
        }
    }
};
