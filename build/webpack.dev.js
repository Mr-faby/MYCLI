const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(base, {
    mode: "development",
    devServer: {
        open: true,
        hot: true
    },
    devtool: 'eval-cheap-module-source-map',  // 能定位到源码位置和源码展示，体积较小
    plugins: [
        // 定义全局环境变量
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_DEV: JSON.stringify('development'),
                    // 这里可以定义其它你想要的全局变量
                    // VUE_APP_URL: JSON.stringify('https://xxx.com')
                }
            }
        }),
        // 开发构建在终端提示语法错误
        new ESLintPlugin({
            // 运行的时候自动帮你修复错误
            fix: false,
        })
    ]
})