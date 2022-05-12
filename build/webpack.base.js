const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js',
        // 打包前自动清除旧的dist
        clean: true
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': '/src'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, '../src'), // 需要编译的文件目录
                exclude: /node_modules/, // 不需要编译的文件目录
                use: [
                    // 为什么thread-loader、cache-loader放在前面？
                    // 正常的loader的执行顺序是从右向左的，但是向thread-loader和cache-loader会有一个pitch方法，这个方法会在loader函数执行前执行，如果存在多个loader串行的情况，这些loader的pitch函数会从左到右依次执行
                    'cache-loader',   // 缓存资源，放在比较耗时的Loader之前,提高二次构建的速度
                    'thread-loader',  // 多进程打包，放在比较耗时的Loader之前，提高构建速度
                    'babel-loader'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(css|scss|sass)/,
                use: [
                    // loader执行顺序从右到左
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                // 全局引入的css; bootstrap.min.css ...
                                './src/styles/default.scss'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|webp)/,
                type: 'asset',
                parser: {
                    // 转base64的条件
                    dataUrlCondition: {
                        maxSize: 25 * 1024, // 25kb
                    }
                },
                generator: {
                    filename: 'images/[contenthash][ext][query]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body',
            title: 'web5'
        }),
        new MiniCssExtractPlugin({
            // 合并后的css输出到styles目录
            filename: 'styles/index.css'
        }),
        // 进度条
        new ProgressBarPlugin({
            format: ` build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
        })
    ]
}