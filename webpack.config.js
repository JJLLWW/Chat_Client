// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

/** @type {import('webpack').Configuration} */
const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        // make react router work in development
        publicPath: '/'
    },
    devServer: {
        watchFiles: [path.resolve(__dirname, "index.html")],
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        open: true,
        host: "localhost",
        port: 9000,
        // make react router work in development
        historyApiFallback: true
    },
    watchOptions: {
        ignored: "**/node_modules",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
