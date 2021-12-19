/**
 * @Author: forguo
 * @Date: 2021/11/14 22:13
 * @Description: common
 */
const path = require("path");
const chalk = require("chalk");

// merge配置合并
const { merge } = require('webpack-merge');

// 在每次 build 后移除你的dist目录（可配置），默认情况下它会读取 webpack 配置的output.path。
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// css打包提取为单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 自动创建 HTML 模板供 Webpack 打包结果使用，包括文件名称 模板参数 meta 标签配置 压缩等等。SPA 与 MPA 都会使用到。
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 友好的进度条
const WebpackBar = require('webpackbar');

const { name, version } = require("../package");


// dev配置
const devConfig = require('./webpack.dev');
// prod配置
const prodConfig = require('./webpack.prod');

module.exports = env => {
    console.log(chalk.blue('Environment:'), chalk.yellowBright(env));
    console.log(chalk.blue('Version:'), chalk.yellowBright(version));
    // 是否是开发环境
    const _DEV_ = env === 'development';
    const commonConfig = {
        // 默认打包出来是main.js
        // entry: ['babel-polyfill', path.resolve(__dirname, '../src/app.js')],
        entry: {
            app: ['babel-polyfill', path.resolve(__dirname, '../src/app.js')]
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: "js/[name].[contenthash:8].js",
            // publicPath: 'https://cloud-app.com.cn/app/',
        },
        module: {
            rules: [
                {
                    test: /\.ws$/, // 检测ws文件
                    use: {
                        loader: "./ws-loader/index", // 使用babel-loader
                    }
                },
                {
                    test: /\.js$/, // 检测js文件
                    use: {
                        loader: "babel-loader", // 使用babel-loader
                    }
                },
                {
                    // https://www.dengwb.com/typescript/project/compile-tools.html#ts-loader
                    test: /\.tsx?$/, // 检测ts或者tsx文件
                    use: {
                        loader: 'ts-loader',
                        options: {
                            // 忽略类型检查，提高编译速度
                            transpileOnly: true
                        }
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                    ],
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "less-loader",
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|bmp|mp4)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                outputPath: 'img/',
                                publicPath: '../img/',
                                // base64配置 小于 limit 字节的文件会被转为 base64，大于 limit 的使用 file-loader 进行处理，单独打包
                                limit: 8000,
                                name: '[name].[hash:4].[ext]'
                            }
                        },
                        /*********** loader for zip img  ***************/
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.90],
                                    speed: 4, // 1-11 越小压缩效果越好
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // the webp option will enable WEBP
                                webp: {
                                    quality: 75
                                }
                            }
                        },
                        /*********** loader for zip img  ***************/
                    ]
                },
                {
                    test: /\.(ttf|eot|woff2?)$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/',
                        publicPath: '../fonts/',
                        name: '[name].[hash:4].[ext]',
                    },
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'WebPack',
                template: path.resolve(__dirname, "../public/index.html"),
                filename: "index.html",
                inject: true, // 是否自动引入资源
                icon: path.join(__dirname, "../public/favicon.ico"),
                minify: _DEV_ ? false : {
                    // collapseWhitespace: true,
                    // collapseBooleanAttributes: true,
                    // collapseInlineTagWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: true,
                    useShortDoctype: true,
                }
            }),
            new CleanWebpackPlugin(), // outputPath
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:7].css'
            }),
            new WebpackBar({
                name: name || 'WebPack',
                color: '#61dafb', // react 蓝
            }),
        ]
    }
    return merge(commonConfig, {
        development: devConfig,
        production: prodConfig
    }[env])
}
