const path = require('path');

const packagejson = require('./package.json');
const WebpackDashDynamicImport = require('@plotly/webpack-dash-dynamic-import');
const dashLibraryName = packagejson.name.replace(/-/g, '_');

module.exports = function (env, argv) {
    const mode = (argv && argv.mode) || 'production';
    const entry = [path.join(__dirname, 'src/lib/index.ts')];
    const output = {
        path: path.join(__dirname, dashLibraryName),
        filename: `${dashLibraryName}.js`,
        library: dashLibraryName,
        libraryTarget: 'umd',
        chunkFilename: '[name].js',
    }

    const externals = {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            umd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom',
            root: 'ReactDOM',
        },
    };

    return {
        output,
        mode,
        entry,
        target: 'web',
        externals,
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(t|j)sx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }, {
                    test: /\.s?css$/,
                    use: [
                        // {
                        //     loader: MiniCssExtractPlugin.loader,
                        //     options: {
                        //         esModule: false,
                        //     },
                        // },
                        {
                            loader: 'css-loader',
                        },

                    ],
                },
            ],
        },
        optimization: {
            splitChunks: {

                cacheGroups: {
                    async: {
                        chunks: 'async',
                        minSize: 0,
                        name(module, chunks, cacheGroupKey) {
                            return `${cacheGroupKey}-${chunks[0].name}`;
                        }
                    }
                }
            }
        },
        plugins: [
            new WebpackDashDynamicImport(),
        ]

    }
}
