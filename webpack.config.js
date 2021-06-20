let path = require('path');

module.exports = {
    mode: "development",
    entry: "./index.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    devServer: {                    // настройка devServer
        historyApiFallback: true,
        port: 8081,
        open: true
    },
    module:{

        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            },
            {
                test: /\.css$/, //определяем тип файлов
                use: [
                    "style-loader",
                    {
                        loader: "css-loader", // определяем загрузчик
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.m?jsx/,
                resolve: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx','.wasm'],
                    fullySpecified: false
                }
            },
        ]
    }
}