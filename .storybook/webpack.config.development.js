"use strict";

const path = require("path");
const ROOT = path.resolve(__dirname, "../");

module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".sass"],
        modules: ["node_modules", path.resolve(ROOT, "src"), path.resolve(ROOT, "src/components"), path.resolve(ROOT, "src/assets")],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(ROOT, "src"), path.resolve(ROOT, ".storybook")],
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-syntax-dynamic-import"
                    ],
                    babelrc: false,
                    cacheDirectory: true,
                },
            },
            // {
            //     test: /\.(js|jsx)$/,
            //     include: [path.resolve(ROOT, "src"), path.resolve(ROOT, ".storybook")],
            //     exclude: /node_modules/,
            //     loader: "eslint-loader",
            //     enforce: "pre",
            //     options: {
            //         configFile: path.resolve(".eslintrc"),
            //         failOnWarning: false,
            //         failOnError: true,
            //     },
            // },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(sass|scss)$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 8192,
                },
            },
            {
                test: /.+Demo.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "demo-source-loader"
                    },
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: [
                                "@babel/plugin-proposal-class-properties",
                                "@babel/plugin-syntax-dynamic-import"
                            ],
                            babelrc: false,
                            cacheDirectory: true,
                        },
                    }
                ]
            }
        ],
    },
};
