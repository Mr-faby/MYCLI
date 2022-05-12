const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(base, {
    mode: "production",
    devtool: 'nosources-source-map',  // 只能定位到源码位置，不能源码展示，体积较小
    plugins: [
        // 定义全局环境变量
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_DEV: JSON.stringify('production'),
                    // 这里可以定义其它你想要的全局变量
                    // VUE_APP_URL: JSON.stringify('https://xxx.com')
                }
            }
        }),
        // 打包体积分析
        new BundleAnalyzerPlugin(),

    ],
    optimization: {
        minimizer: [
            // 压缩去重CSS代码体积
            new CssMinimizerPlugin(),
            // js代码压缩
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true, // 去除console
                    },
                },
            })
        ]
    }
})